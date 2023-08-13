import bcryptjs from "bcryptjs";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "~/lib/mongodb";
import User from "~/models/UserModel";
// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    connectToMongoDB().catch((err) =>
      NextResponse.json({ error: err }, { status: 500 })
    );

    // get the request & Check if it is an empty resquest being sent
    const reqBody = await request.json();

    if (!reqBody){
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });
    }

    // Extract all info
    const {email, password} = reqBody;

    // Check if the user exists
    const userExists = await User.findOne({ email }).select("+password");

    console.log("This user exists is ", userExists);

    // If the user does not exist then show this errors
    if (!userExists){
      return NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }
    // If user already exists then check if password is correct
    
    // Hash the password first here before storing it
    // const hashedPassword = await hash(password, 12);
    
    const validPassword = await bcryptjs.compare(password, userExists.password);

    if (!validPassword){
      return NextResponse.json({error: "Invalid password"}, { status: 400 });
    }else{
      // Create token data
      const tokenData = {
        _id: userExists._id,
        email: userExists.email,
        fullname: userExists.fullname,
        phoneNumber: userExists.phoneNumber,
        role: userExists.role,
      };

      // Create token
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, {expiresIn: "4h"});

      const response = NextResponse.json({message: "Login successful", success: true});

      response.cookies.set("token", token, {httpOnly: true});

      return response;
    }

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not allowed" }, { status: 405 });
}

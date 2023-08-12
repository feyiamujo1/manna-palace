import bcryptjs from "bcryptjs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "~/lib/mongodb";
import User from "~/models/UserModel";
import { IUser } from "~/types/User";

export async function POST(request: Request) {
  try {
    connectToMongoDB().catch((err) =>
      NextResponse.json({ error: err }, { status: 500 })
    );

    // get the request
    const reqBody = await request.json();
    // Check if it is an empty resquest being sent
    if (!reqBody)
      return NextResponse.json({ error: "Data is missing" }, { status: 400 });

    // Extract all info
    const { fullname, email, password, phoneNumber } = reqBody;

    // Check if the user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      // If user already exists then send this error
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    } else {
      // Hash the password first here before storing it
      // const hashedPassword = await hash(password, 12);

      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      User.create(
        {
          fullname,
          email,
          phoneNumber,
          password: hashedPassword,
        },
        (error: unknown, data: IUser) => {
          if (error && error instanceof mongoose.Error.ValidationError) {
            // The mongodb database will return an array
            // but we only need to show one error at a time

            for (let field in error.errors) {
              const msg = error.errors[field].message;
              return NextResponse.json({ error: msg }, { status: 409 });
            }
          }
          const user = {
            email: data.email,
            fullname: data.fullname,
            phoneNumber: data.phoneNumber,
            _id: data._id,
            role: data.role,
          };
          return NextResponse.json(
            { success: true, user: user },
            { status: 201 }
          );
        }
      );
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method Not allowed" }, { status: 405 });
}

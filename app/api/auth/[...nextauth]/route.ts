import bcryptjs from "bcryptjs";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToMongoDB } from "~/lib/mongodb";
import User from "~/models/UserModel";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        connectToMongoDB().catch((err) => {throw Error(err)});

        // Check if the user exists
        const ExistingUser = await User.findOne({ email }).select("+password");

        // If the user does not exist then show this errors
        if (!ExistingUser) throw Error("User does not exist");
        // If user already exists then check if password is correct

        // Hash the password first here before storing it
        // const hashedPassword = await hash(password, 12);

        const validPassword = await bcryptjs.compare(
          password,
          ExistingUser.password
        );

        if (!validPassword) throw Error("Invalid password");

        const user = {
            id: ExistingUser._id,
            email: ExistingUser.email,
            fullname: ExistingUser.fullname,
            phoneNumber: ExistingUser.phoneNumber,
            role: ExistingUser.role,
        };
        return user
      },
    }),
  ],
  pages: {
    signIn: "/login"
  },
  session: {
    strategy: "jwt"
  },
  callbacks: {
    jwt: async ({token, user}: any)=>{
        if (user){
            token.user = user
        }
        return token
    },
    session: async({session, token})=>{
        const user = token.user;
        session.user = user as any;
        return session
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// export default NextAuth(authOptions)
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
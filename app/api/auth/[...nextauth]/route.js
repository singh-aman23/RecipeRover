import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth";
import CrendentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const authOptions = {
  providers: [
    CrendentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectMongoDB();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) {
            return null;
          }
          return user;
        } catch (error) {
          console.log("error: ", error);
        }
      },
    }),
  ],
  session: {
    stratergy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/get-started/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

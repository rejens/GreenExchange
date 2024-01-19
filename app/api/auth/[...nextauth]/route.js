import NextAuth from "next-auth";
import connectDB from "@/config/connectDb";
import CredentialsProvider from "next-auth/providers/credentials";
import UserModel from "@/models/userModel";

const authOptions = {
   providers: [
      CredentialsProvider({
         // type: "credentials",
         // credentials: {
         //    email: { label: "Email", type: "text", placeholder: "jsmith" },
         //    password: { label: "Password", type: "password" },
         // },

         async authorize(credentials, req) {
            const { email, password } = credentials;

            await connectDB();
            const details = await UserModel.findOne({ email });
            if (details.password === password) {
               return details;
            } else {
               return null;
            }
         },
      }),
   ],
   jwt: {
      maxAge: 5,
   },

   pages: {
      signIn: "/auth/login",
   },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };

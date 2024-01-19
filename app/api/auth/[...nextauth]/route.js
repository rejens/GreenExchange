import NextAuth from "next-auth";
import connectDB from "@/config/connectDb";
import CredentialsProvider from "next-auth/providers/credentials";
import userModel from "@/models/userModel";

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
            console.log("email", email);
            console.log("password", password);

            // await connectDB();
            // const details = await AdminModel.findOne({ email });
            // if (details.password === password) {
            //    return details;
            // } else {
            //    return null;
            // }
         },
      }),
   ],
   jwt: {
      maxAge: 5,
   },
   callbacks: {
      // signIn({ user, account, profile, email, credentials }) {
      //    console.log("signin callback");
      //    console.log(user, account, profile, email, credentials);
      //    return true;
      // },
      // session({ session }) {
      //    console.log("this should run every fucking time i call session ");
      //    session.user.value = "hello";
      //    return session;
      // },
   },
   pages: {
      signIn: "/auth/login",
   },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
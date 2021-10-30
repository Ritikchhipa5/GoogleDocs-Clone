import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import db from "../../../firebaseConfig";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //   adapter: FirebaseAdapter(db),
});
console.log("Hello", process.env.GOOGLE_CLIENT_ID);

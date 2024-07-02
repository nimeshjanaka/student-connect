import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials" ;
import {getUserByEmail} from "./data/users";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  session:{
    strategy:'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials){
        if(credentials === null) return null;
        try {
          const user = getUserByEmail(credentials?.email);

          if(user){
            const isMatch = user?.password === 
            credentials?.password

            if(isMatch){
              return user;
            }else{
              throw new Error ("Check your Password")
            }
          }else{
            throw new Error ("user Not found")
          }
        } catch (error) {
          
        }
      }
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization:{
        params:{
            prompt:"consent",
            access_type:"offline",
            response_type:'code'
        }
      }
    }),
  ],
});

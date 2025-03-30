import NextAuth from "next-auth";

// next-auth.d.ts
declare module "next-auth" {
  interface Session {
    idToken: string;  // Add the idToken property
  }
}

import React from "react";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
   //checking session for admin
   const session = await getServerSession();
   if (session) {
      redirect("/admin/dashboard");
   }

   return <div>{children}</div>;
}

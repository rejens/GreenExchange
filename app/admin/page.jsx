import React from "react";

import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function page() {
   const session = await getServerSession();
   if (!session) {
      // redirect("/admin/login");
   }
}

import Provider from "@/components/providers/Provider";
import React from "react";
import { lazy } from "react";
import { Toaster } from "react-hot-toast";

import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const DefaultLayout = lazy(() => import("@/components/layouts/DefaultLayout"));

const AdminLayout = async ({ children }) => {
   const session = await getServerSession();
   if (!session) {
      // redirect("/admin/login");
   }

   return (
      <Provider>
         <DefaultLayout>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
         </DefaultLayout>
      </Provider>
   );
};

export default AdminLayout;

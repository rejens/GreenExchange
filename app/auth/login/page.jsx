import Login from "@/components/admin/auth/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
export default async function HomePage() {
   const session = await getServerSession(authOptions);
   if (session) {
      // redirect("/admin");
   }
   return (
      <>
         <Login />
      </>
   );
}

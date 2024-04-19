import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function Profile() {
  const authSession = await getServerAuthSession();

  return ( 
    <>
        {/* {authSession?.user && <UserInfo user={authSession?.user} />} */}
        {(!authSession?.user) ? redirect('/') : authSession?.user && <UserInfo user={authSession?.user} />}
    </> 
  )
}
import UserInfo from "@/components/UserInfo";
import { getServerAuthSession } from "@/server/auth";
import { redirect } from "next/navigation";

export default async function Profile() {
  const authSession = await getServerAuthSession();

  if (!authSession?.user) {
    redirect('/login');
    return null;
  }

  return (
    <>
      <UserInfo user={authSession?.user} />
    </>
  );
}

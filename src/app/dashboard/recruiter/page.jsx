"use client";
import { authClient } from "@/lib/auth-client";

const RecruiterPage = () => {
  const {
    data: session,
    //refetch the session
  } = authClient.useSession();
  const user = session?.user;
  // console.log('The session is a', user);
  return (
    <div>
      <p className="text-4xl py-20 text-white">hello ! welcome {user?.name}</p>
    </div>
  );
};

export default RecruiterPage;

import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import { LogIn } from "lucide-react";
import  Link  from "next/link";
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen text-white">
      <div className="flex flex-col justify-center items-center h-[100vh] w-[100vw] gap-3">
        <div className="flex items-center gap-5">
          <h1 className="text-[30px]">Chat with you pdf</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div>{isAuth && <Button variant={"secondary"}>Go to Chats</Button>}</div>
        <p className="max-w-xl">
          Join us to get answer of your question from any pdf
        </p>
        <div className="max-w-xl">
          {isAuth ? (
            <FileUpload/>
          ) : (
            <Link href="/sign-in">
              <Button variant={"secondary"}> Login to started! <LogIn/> </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

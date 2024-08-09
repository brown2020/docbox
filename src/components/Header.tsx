import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeToggler } from "./ThemeToggler";

type Props = {};
export default function Header({}: Props) {
  return (
    <header className="h-14 flex items-center px-3 justify-between bg-slate-200 dark:bg-slate-600">
      <Link
        href={"/"}
        className="px-3 py-2 bg-green-500 text-white rounded-md hover:opacity-50"
      >
        Docbox
      </Link>
      <div className="flex space-x-2 items-center">
        <ThemeToggler />
        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </header>
  );
}

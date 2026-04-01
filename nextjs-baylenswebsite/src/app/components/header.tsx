import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="h-2 w-full bg-[#6B4D29]" />

      <div className="flex justify-center bg-[#F7DBA6] py-4">
        <Link href="/">
        <Image
          src={Logo}
          alt="Baylens logo"
          priority
          className="h-[50px] w-auto"
        />
        </Link>
      </div>

      <div className="h-px w-full bg-[#977644]" />
    </header>
  );
}
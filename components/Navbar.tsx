import Link from "next/link";
import Image from "next/image";
import React from "react";
import { BsChatDotsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex bg-white justify-end  items-center m-0 h-24 w-full">
      <Link href="/">
        <div className="rounded-full text-blue-400">
          <BsChatDotsFill size={36} />
        </div>
      </Link>
      <Link href="/">
        <div className="rounded-full ml-6 mr-8 relative overflow-hidden">
          <Image
            src="/profile.png"
            width={40}
            height={40}
            alt="Profile Photo"
          />
        </div>
      </Link>
    </div>
  );
};

export default Navbar;

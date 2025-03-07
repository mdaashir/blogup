import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth} from "@/auth";

export const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" width={144} height={30} alt="Logo"/>
                </Link>

                <div className="flex items-center gap-5">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="cursor-pointer">Create Startup</span>
                            </Link>
                            <button onClick={() => auth().signOut()}>Sign Out</button>
                        </>
                    ) }
                </div>
            </nav>
        </header>
    )
}

export default Navbar
import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {auth, signIn, signOut} from "@/auth";

export const Navbar = async () => {
    const session = await auth();

    return (
        <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex items-center justify-between">
                <Link href="/">
                    <Image src="/logo.png" width={144} height={30} alt="Logo"/>
                </Link>

                <div className="flex items-center gap-5 text-black">
                    {session && session?.user ? (
                        <>
                            <Link href="/startup/create">
                                <span className="cursor-pointer">Create Startup</span>
                            </Link>

                            <form action={async () =>  {
                                'use server'

                                await signOut({redirectTo: '/'});
                            }}>
                                <button type="submit">
                                    Logout
                                </button>
                            </form>

                            <Link href={`/user/${session?.user?.id}`}>
                                <span> {session?.user?.name}</span>
                            </Link>
                        </>
                    ) : (
                        <form action={async () =>  {
                            'use server'

                            await signIn('github');
                        }}>
                            <button type="submit">
                                Login
                            </button>
                        </form>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
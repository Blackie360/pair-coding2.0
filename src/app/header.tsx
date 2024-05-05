'use client';
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

const Header = () => {
    const session = useSession()
  return (
    <header>
        <div>
            {
                session.data ? (
                    <Button
                    onClick={() => signOut()}
                    >sign out</Button>
                ):(
                    <Button
                    onClick={() => signIn("google")}
                    >sign in</Button>
                )
            }
        <ModeToggle />
        </div>
    </header>
  )
}

export default Header
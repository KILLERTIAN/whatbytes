import { CircleUserRound } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between pr-20 border-b border-gray-300'>
            <Image src="/logo.jpg"
                width={300}
                height={40}
                alt='logo'
                priority
            />
            <div className="flex flex-row items-center justify-center rounded-lg border-2 border-gray-300 p-1 font-bold text-xl gap-1">
            <CircleUserRound />
                Om Sharma
            </div>
        </div>
    )
}

import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <nav className='w-[100%] h-16 flex'>
                <div className='p-4 font-bold text-l'>
                    <h1 className='text-2xl'>Weather Forecast</h1>
                </div>
                <ul className='flex space-x-7 font-bold text-l justify-center m-auto'>
                    <li className='hover:bg-white p-4 rounded-xl'><Link to={'/'}>Home</Link></li>
                    <li className='hover:bg-white p-4 rounded-xl'><Link to={'/Contact'}>Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}

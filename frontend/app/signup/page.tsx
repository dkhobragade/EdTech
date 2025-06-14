import InputText from '@/components/lowlevel/InputText'
import { ColourfulText } from '@/components/ui/colourful-text'
import React from 'react'

const page = () =>
{
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-50'>
            <div className='p-8 w-full max-w-2xl rounded-2xl shadow-lg bg-white'>
                <div className="text-center text-3xl font-extrabold mb-8">
                    <ColourfulText text="Sign Up" />
                </div>
                <div className='grid grid-cols-1 gap-8 md:gap-12'>
                    <div className='flex flex-col justify-center gap-6 order-2 md:order-1'>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputText placeholder='Enter First Name' type="text" title='First Name' />
                            <InputText placeholder='Enter Last Name' type="text" title='Last Name' />
                        </div>
                        <InputText placeholder='Enter Email' type="email" title='Email' />
                        <InputText placeholder='Enter Mobile No.' type="number" title='Mobile No.' />
                        <InputText placeholder='Enter Password' type="password" title='Password' />
                        <button className='bg-[#FFC9F0] hover:bg-pink-200 transition-colors flex justify-center w-full rounded-2xl p-2 font-semibold cursor-pointer'>
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page

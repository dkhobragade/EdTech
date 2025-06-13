import Loading from '@/components/lowLevel/Loading'
import { ColourfulText } from '@/components/ui/colourful-text'
import React, { Suspense } from 'react'

const page = () =>
{
    return (
        <Suspense fallback={ <Loading /> }>
            <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-amber-100 p-8 rounded-2xl shadow-lg">
                    <form className="grid gap-6">
                        <div className="text-center text-3xl font-extrabold mb-2">
                            <ColourfulText text="Log In" />
                        </div>
                        <div className="text-center text-gray-700">
                            Hey, enter your details to sign in to your account.
                        </div>
                        <div className="grid gap-4">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="w-full border-2 border-gray-300 rounded-2xl p-3 focus:outline-none focus:border-amber-400"
                                autoComplete='new-password'
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter password"
                                className="w-full border-2 border-gray-300
                            rounded-2xl p-3 focus:outline-none focus:border-amber-400"
                                required
                                autoComplete='new-password'
                            />
                        </div>
                        <div className="w-16 p-1 bg-[#FFC9F0] cursor-pointer text-black font-bold grid justify-self-center transition">
                            Sign In
                        </div>
                    </form>
                </div>
            </div>
        </Suspense >
    )
}

export default page
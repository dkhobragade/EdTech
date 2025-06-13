"use client"

import { IconArchiveFilled, IconArrowBadgeDownFilled, IconClockQuestion, IconDownload, IconWriting } from "@tabler/icons-react"
import { useRouter } from 'next/navigation';

export default function MainLayout ( {
    children,
}: {
    children: React.ReactNode
} )
{
    const router = useRouter()

    return <div className="p-3">
        <div className="flex flex-row items-end justify-end p-4 gap-10 ">
            <div className='relative group'>
                <div className="cursor-pointer flex items-center">
                    Courses
                    <span>
                        <IconArrowBadgeDownFilled />
                    </span>
                </div>
                <div className="absolute left-0 z-10 hidden group-hover:block group-focus-within:block ">
                    <div
                        tabIndex={ 0 }
                        className='w-25 rounded-b-2xl h-25 bg-[#FFE68C] flex flex-col justify-center items-center shadow-lg outline-none'
                    >
                        <div className='grid grid-rows-2 gap-2 p-2 w-full h-full'>
                            <div className='w-full h-full flex gap-2 cursor-pointer border-b-2 border-neutral-400 pb-2'>
                                Pre
                                <span>
                                    <IconArchiveFilled />
                                </span>
                            </div>
                            <div className='w-full h-full flex gap-2 cursor-pointer'>
                                Mains
                                <span>
                                    <IconWriting />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer flex gap-1">
                <div className='relative group'>
                    <div className="cursor-pointer flex gap-1 items-center">
                        PYQ
                        <span>
                            <IconArrowBadgeDownFilled />
                        </span>
                    </div>
                    <div className="absolute left-0 z-10 hidden group-hover:block group-focus-within:block ">
                        <div
                            tabIndex={ 0 }
                            className='w-30 rounded-b-2xl h-25 bg-[#FFC9F0] flex flex-col justify-center items-center shadow-lg outline-none'
                        >
                            <div className='grid grid-rows-2 gap-2 p-2 w-full h-full'>
                                <div className='w-full h-full flex gap-2 cursor-pointer border-b-2 border-neutral-400 pb-2'>
                                    Mock Test
                                    <span>
                                        <IconClockQuestion />
                                    </span>
                                </div>
                                <div className='w-full h-full flex gap-2 cursor-pointer'>
                                    Download
                                    <span>
                                        <IconDownload />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer" onClick={ () => router.push( '/freeInitiative' ) }>
                Free Initiative
            </div>
            <div className="cursor-pointer" onClick={ () => router.push( '/demo' ) }>
                Demo
            </div>
            <div className="p-1 bg-[#FFC9F0] cursor-pointer" onClick={ () => router.push( '/login' ) }>
                Log In
            </div>
        </div>
        { children }
    </div>
}
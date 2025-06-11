import React from 'react'
import Image from "next/image";
import men from '../../public/man.svg'
import arrow from '../../public/arrow.svg'
import { TextFlipContainer } from '@/components/ui/TextFlipContainer';
import { IconArchiveFilled, IconArrowBadgeDownFilled, IconClockQuestion, IconDownload, IconWriting } from '@tabler/icons-react';
import { Timeline } from '@/components/ui/timeline';
import { timelineData } from '@/helper/Constants';

const page = () =>
{
    return (
        <div className="p-5 gap-11">
            <div className="flex flex-row items-end justify-end p-4 gap-10 ">
                <div className='relative group'>
                    <div className="cursor-pointer flex gap-1 items-center">
                        Courses
                        <span>
                            <IconArrowBadgeDownFilled />
                        </span>
                    </div>
                    <div className="absolute left-0 mt-2 z-10 hidden group-hover:block group-focus-within:block ">
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
                        <div className="absolute left-0 mt-2 z-10 hidden group-hover:block group-focus-within:block ">
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
                <div className="cursor-pointer">
                    Free Initiative
                </div>
                <div className="cursor-pointer">
                    Demo
                </div>
                <div className="p-1 bg-[#FFC9F0] cursor-pointer">
                    Log In
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="box-border size-5/6 p-4 ">
                    <div className="grid grid-rows-2">
                        <div className="w-2xs h-25 grid grid-cols-3 -rotate-6">
                            <Image src={ men } alt="men" />
                            <Image src={ arrow } alt="arrow" className="justify-self-center self-center" />
                            <div className="text-3xl p-1 w-35 h-10 bg-[#FFC9F0] font-bold font-[Handlee]" >
                                DKMPSC
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <TextFlipContainer words={ [ 'Syllabus', 'Study Planning', 'PYQ', 'Daily News' ] } prefixText="Struggling with the MPSC" />
                            <div>
                                <span className="p-1 bg-[#FFC9F0] cursor-pointer">
                                    Don’t worry.
                                </span>
                                We’re with you, from your first step to your
                                <span className="p-1 bg-[#FFE68C] cursor-pointer">
                                    final victory !
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Timeline data={ timelineData } /> */ }
        </div>
    )
}

export default page
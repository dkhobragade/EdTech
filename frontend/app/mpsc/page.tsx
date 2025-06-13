"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import Image from "next/image";
import men from '../../public/man.svg'
import arrow from '../../public/arrow.svg'
import { TextFlipContainer } from '@/components/ui/TextFlipContainer';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import CardSection from '@/components/pageLevel/CardSection';

const page = () =>
{
    const router = useRouter()

    return (
        <div className="p-5 gap-11">
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
                            <TextFlipContainer words={ [ 'Syllabus', 'Planning', 'PYQ', 'Daily News' ] } prefixText="Struggling with the MPSC" />
                            <div>
                                <span className="p-1 bg-[#FFC9F0]">
                                    Don’t worry.
                                </span>
                                We’re with you, from your first step to your { " " }
                                <span className='bg-[#FFE68C]'>
                                    final victory!
                                </span>
                                <br />
                                <div className='grid justify-center mt-8' onClick={ () => router.push( "/signup" ) }>
                                    <PointerHighlight>
                                        <span className="p-1 bg-[#FFC9F0] items-center cursor-pointer">
                                            Sign In
                                        </span>
                                    </PointerHighlight>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CardSection />
        </div >
    )
}

export default page
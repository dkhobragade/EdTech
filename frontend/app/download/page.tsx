import React from 'react'
import { ColourfulText } from '@/components/ui/colourful-text'
import { years } from '@/helper/Constants'

const page = () =>
{

    return (
        <div className='grid grid-cols-2 p-5 gap-5'>
            <div className='border-2 p-4'>
                <div className='grid grid-rows-12 '>
                    <div className='text-2xl font-semibold justify-self-center row-span-1'>
                        <ColourfulText text="Prelims" />
                    </div>
                    <div className='row-span-12 h-screen overflow-scroll'>
                        { years.map( ( year ) =>
                            <div className='grid'>
                                <div className='cursor-pointer'>
                                    <span className='text-rose-400 font-semibold'>
                                        GS:{ " " }
                                    </span>
                                    { year }
                                </div>
                                <div className='cursor-pointer'>
                                    <span className='text-rose-400 font-semibold'>
                                        CSAT:{ " " }
                                    </span>
                                    { year }
                                </div>
                                <br />
                            </div>
                        ) }
                    </div>
                </div>
            </div>
            <div className='border-2 p-4'>
                <div className='grid grid-rows-12 '>
                    <div className='text-2xl font-semibold justify-self-center'>
                        <ColourfulText text="Mains" />
                    </div>
                    <div className='row-span-12 h-screen'>2</div>
                </div>
            </div>
        </div>
    )
}

export default page
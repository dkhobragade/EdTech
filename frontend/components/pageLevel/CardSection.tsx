import React from 'react'
import arrow from '../../public/arrow.svg'
import Image from 'next/image'
import CardContainer from '../ui/CardContainer'
import book from '../../public/book.png'
import calender from '../../public/calender.png'
import clock from '../../public/clock.png'

const CardSection = () =>
{
    return (
        <div>
            <div className='grid grid-rows-2 gap-8'>
                <div className='font-[Handlee] text-3xl p-1 w-76 font-semibold h-10 bg-[#FFC9F0]'>
                    How can we help you?
                </div>
                <Image src={ arrow } alt="arrow" className='-rotate-90' />
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20">
                    <CardContainer color="#FFE68C" src={ book } className="-rotate-10"  >
                        <div className="text-2xl font-bold">
                            Understanding the Exam & Syllabus
                        </div>
                    </CardContainer>
                    <CardContainer src={ calender } className="rotate-10 bg-[#4DA8DA]"  >
                        <div className="text-2xl font-bold">
                            Building a Study Plan & providing the right resources
                        </div>
                    </CardContainer>
                    <CardContainer color="#FFC9F0" src={ clock } className="-rotate-10"  >
                        <div className="text-2xl font-bold">
                            Practicing PYQ and Mock Test
                        </div>
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}

export default CardSection
'use client'

import * as React from 'react';
import Link from 'next/link';
import Button from '@/components/home-components/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function NewHero() {
    return (
        <div
            className={`w-full flex max-tab:flex-col items-center gap-4 min-h-[400px] max-w-[90rem] h-full mx-auto p-2`}
        >
            <div className="relative tab:px-12 max-tab:pt-[4rem] max-w-4xl flex flex-col max-tab:items-center justify-center gap-4 tab:gap-7 text-white flex-1 shrink-0">
                <h1
                    className={`font-jakarta tab:text-[3.5rem] phone:text-[2.5rem] text-[2.2rem] font-extrabold bg-gradient-to-r from-lime-300 to-green-800 text-transparent bg-clip-text leading-tight px-2 max-phone:px-6 max-tab:text-center drop-shadow-[25px_6px_80px_#079281] max-tab:max-w-lg`}
                >
                    30DC Community Members make more than the Average Developer
                </h1>
                <Link
                    className="phone:mx-2"
                    href={"https://rzp.io/l/kZPObNXZ"}

                >
                    <Button>
                        <span className="px-5 flex gap-2 items-center tab:text-lg">
                            Join Now <ArrowRight className="h-4 w-4" />
                        </span>
                    </Button>
                </Link>
            </div>
            <Image className='aspect-square tab:w-1/2' src={"/30dc-earn.gif"} alt='30 DC Develiper"s Earning' height={700} width={700} />
        </div>
    );
}

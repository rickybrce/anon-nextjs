"use client"; // This is a client component
import React, { ReactNode, useEffect } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Image from "next/image";
import ButtonMenu from './buttons/ButtonMenu';
import Link from 'next/link';
import { Preferences } from '@capacitor/preferences';
import { useRouter } from "next/navigation";
import { getUserSumPrizePool } from '../api/stats';



type Props = {

}

const TopNavigation = ({ }: Props) => {
    const[prizePool, setPrizePool] = React.useState(0)
    const router = useRouter()
    async function handlelogout() {
        console.log("logout")
        //Remove token
        await Preferences.remove({ key: "token" });
        //Redirect to login
        router.push('/login')
    }

    useEffect(() => {
        //Get UserSumPrizePool TODO : Server Error
        /*(async () => {
          const items = await getUserSumPrizePool();
          //Set price pool
          items && setPrizePool(items);
        })();*/
      }, []);

    return (
        <div className="w-full bg-sidebar border-[3px] border-green-100 rounded-[16px] p-[20px] md:flex items-center justify-between">
            <div className='flex items-center mb-4 lg:mb-0'>
                <Image
                    src={"/images/ic-music.svg"}
                    alt={""}
                    width={50}
                    height={55}
                    className="
                    w-full
                    h-auto
                    max-w-[50px]
                    "
                />
                <div className='font-w-500 text-[16px] 2xl:text-[20px] leading-[24px] tracing-[0.02em] ml-[10px]'>{content.general.prize_pool}</div>
                <div className='relative bg-gradient-pool ml-3 font-w-700 text-[16px] 2xl:text-[20px] leading-[28px] py-[8px] lg:py-[14px] px-[28px] rounded-[16px]'>
                    <div className='absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] bg-sidebar z-0 rounded-[16px]'></div>
                    <span className="relative">{prizePool ? prizePool.toString() + "$" : "0$"}</span>
                </div>
            </div>
            <Link href="#" className='ml-23xl:ml-[28px]'>
                <ButtonMenu>How2play</ButtonMenu>
            </Link>
            <Link href="/gmaes" className='ml-2 3xl:ml-[16px]'>
                <ButtonMenu>Games</ButtonMenu>
            </Link>
            <div>
                <Link href="#" className='ml-1 3xl:ml-[16px]'>
                    <ButtonMenu>Burn KIN</ButtonMenu>
                </Link>
                <Link href="/burn" className='ml-[10px]'>
                    <ButtonMenu>Buy KIN</ButtonMenu>
                </Link>
            </div>


            <ButtonMenu onClick={() => handlelogout ? handlelogout() : ""}>Logout</ButtonMenu>

        </div>
    )
}

export default TopNavigation
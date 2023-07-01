"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Image from "next/image";
import ButtonBreadcrumb from './buttons/ButtonBreadcrumb';
import { useRouter } from 'next/navigation';



type Props = {
    items: any;
}

const BreadCrumb = ({ items }: Props) => {
    const router = useRouter()

    return (
        <div className="flex items-center mt-5 mb-7">
            {items.map((item: any, index: number) => (
                <div key={index} className='flex items-center'>
                    <ButtonBreadcrumb onClick={() => { index === 0 ? router.push("/games") : "" }} disabled={item.active} active={item.active}>{item.title}</ButtonBreadcrumb>
                    {index !== items.length - 1 && (
                        <svg className='mx-2 shrink-0 grow-0' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.255 8.69604C15.029 8.49101 15.029 8.1586 15.255 7.95357C15.4811 7.74855 15.8476 7.74855 16.0736 7.95357L20.1254 11.6286C20.3514 11.8336 20.3514 12.166 20.1254 12.371L16.0736 16.046C15.8476 16.2511 15.4811 16.2511 15.255 16.046C15.029 15.841 15.029 15.5086 15.255 15.3036L18.3187 12.5248L5.54709 12.5248C5.22742 12.5248 4.96827 12.2898 4.96827 11.9998C4.96827 11.7099 5.22742 11.4748 5.54709 11.4748L18.3187 11.4748L15.255 8.69604Z" fill="#F9FAFB" />
                        </svg>
                    )}
                </div>
            ))}
        </div>
    )
}

export default BreadCrumb
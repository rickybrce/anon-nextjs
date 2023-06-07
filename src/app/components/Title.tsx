"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import ButtonSeeAll from './buttons/ButtonSeeAll';
import SingleStatistic from './SIngleStatistic';




type Props = {
title?: string;
classList?: string;
}

const Title = ({ title, classList }: Props) => {

    return (
        <div className={`font-w-700 text-[32px] leading-[40px] text-gray-100 ${classList ? classList : ""}`} 
        dangerouslySetInnerHTML={{ __html: title ? title : "" }}>
        </div>
    )
}

export default Title
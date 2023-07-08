"use client"; // This is a client component
import React, { ReactNode } from 'react'
import content from '../../../public/static/locales/en/common.json'
import Avatar from './Avatar';
import Avatars from './Avatars';
import Balance from './Balance';
import LeftGames from './LeftGames';
import LeftHotGame from './LeftHotGame';

const avatar = {
    name: "Character name",
    nickname: "@nickname",
    image: "/images/avatar.png"
}
const avatars = [
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    },
    {
        image: "/images/avatar.png",
        url: ""
    }
]

const balance = {
    title: "Balance",
    value : "4,668 DOL",
    type: "eth",
    url: "/#"
}
const balanceTwo = {
    title: "Balance",
    value : "4,668 KIN",
    type: "eth",
    url: "/#"
}

type Props = {

}

const LeftAvatarSection = ({ }: Props) => {

    return (
        <div className="shrink-0 bg-sidebar min-h-[calc(100vh-88px)] border-[3px] border-green-100 w-full lg:w-[300px] 2xl:w-[368px]  rounded-[16px] mr-[17px]">
            <Avatar
                name={avatar.name}
                nickname={avatar.nickname}
                image={avatar.image}
                tooltipText='Some text here'
                tooltipTextTwo='Some text here two'
            />
            <Avatars
                items={avatars}
            />
            <Balance
                title={balance.title}
                ctaLabel={content.general.butAddLabel}
                ctaLink={balance.url}
                type={balance.type}
                value={balance.value}
            />
            <Balance
                title={""}
                ctaLabel={content.general.butAddLabel}
                ctaLink={balanceTwo.url}
                type={balanceTwo.type}
                value={balanceTwo.value}
                size='small'
            />
            <LeftGames />
            <LeftHotGame />

        </div>
    )
}

export default LeftAvatarSection
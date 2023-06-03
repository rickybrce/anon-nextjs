"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from "next/image";
import Avatar from './Avatar';
import Avatars from './Avatars';

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

type Props = {

}

const LeftAvatarSection = ({ }: Props) => {

    return (
        <div className="bg-sidebar min-h-[calc(100vh-88px)] border-[3px] border-green-100 w-[368px] rounded-[16px]">
            <Avatar
                name={avatar.name}
                nickname={avatar.nickname}
                image={avatar.image}
            />
            <Avatars
                items={avatars}
            />

        </div>
    )
}

export default LeftAvatarSection
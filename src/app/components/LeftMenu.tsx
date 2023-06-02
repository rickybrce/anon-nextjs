import React, { ReactNode, useState } from 'react'
import LeftMenuSIngleItem from './LeftMenuSIngleItem'

type Props = {
    description?: string
}

const LeftMenu = ({ description }: Props) => {

    return (
        <div className="bg-sidebar h-[calc(100vh-88px)] border-[3px] border-green-100 w-[94px] rounded-[16px]">
            <div className='mb-[11px]'>

            </div>
            <LeftMenuSIngleItem
                link="/"
                title="Dashboard"
                iconUrl=""
                active={true}
                />
        </div>
    )
}

export default LeftMenu
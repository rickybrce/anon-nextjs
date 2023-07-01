
"use client"; // This is a client component
import React, { ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  onChange?: Function;
  onKeyUp?: Function;
  name?: string
  placeholder?: string
  type?: string
  value?: string
  disabled?: boolean
  className?: string
  children?: ReactNode
  error?: string;
  id?: string
  ref?: any
  required?: boolean
  checked?: boolean
  label?: string
  active?: boolean
}

export default function InputCheckbox({ disabled = false,  active, label, checked, onChange, required, onKeyUp, error, className, name, placeholder, type, value, id, ref }: Props) {
  const errors = error?.length ?? 0;
  return (
    <div className={`relative ${className}`}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input onChange={(e) => (onChange ? onChange(e) : '')} type="checkbox" value="" className="sr-only peer" checked={checked} />
        <div className={` 
        ${active ? 'pr-[40px]  lg:pr-[60px]' : 'bg-checkbox-but'}
        px-[16px] 
        min-h-[52px]
        peer-checked:pr-[40px] 
        lg:px-[33px] 
        lg:peer-checked:pr-[60px] 
        py-2
        lg:py-[9px]
        text-[12px]
        2xl:text-[16px]
        leading-[24px]
        font-w-400
        inline-flex
        items-center
        rounded-[16px] mb-4 lg:mb-0
         text-white transition duration-300 bg-checkbox-but-gradient border-none whitespace-nowrap focus:outline-none relative`}>
          <div className='rounded-[16px] absolute top-[2px] left-[2px] w-[calc(100%-4px)] h-[calc(100%-4px)] bg-checkbox-but
          '></div>
          {label && (
            <div className=''>
          <span className="text-[14px] leading-[20px] font-w-700 text-white relative" dangerouslySetInnerHTML={{__html: label ? label : ""}}></span>
          <Image src="images/ic-checked.svg" 
          alt="checked"
          width={18} height={18} 
          className='hidden absolute right-3 top-5 checked-image' />
          </div>
        )}
        {active && (
          <Image src="images/ic-active-checkbox.svg" 
          alt="checked"
          width={18} height={18} 
          className='absolute right-3 top-5 active-image' />
           )}
        </div>
        
      </label>
    </div>
  )
}

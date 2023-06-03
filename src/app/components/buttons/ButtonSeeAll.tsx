import React, { ReactNode } from 'react'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
    type?: 'normal' | 'primary' | 'secondary'
}

const ButtonSeeAll = ({ disabled = false, onClick, children, type }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className={`
        ${type === 'normal' ? 'text-[16px]' : 'text-[14px]'}
        leading-[20px]
        font-w-700 text-white transition duration-300 border-none hover:underline whitespace-nowrap focus:outline-none flex items-center`}>
        <span>{children}</span>
        <svg className='ml-1' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5041 8.69604C15.278 8.49101 15.278 8.1586 15.5041 7.95357C15.7301 7.74855 16.0966 7.74855 16.3226 7.95357L20.3744 11.6286C20.6005 11.8336 20.6005 12.166 20.3744 12.371L16.3226 16.046C16.0966 16.2511 15.7301 16.2511 15.5041 16.046C15.278 15.841 15.278 15.5086 15.5041 15.3036L18.5677 12.5248L5.79612 12.5248C5.47644 12.5248 5.21729 12.2898 5.21729 11.9998C5.21729 11.7099 5.47644 11.4748 5.79612 11.4748L18.5677 11.4748L15.5041 8.69604Z" fill="#F9FAFB" />
        </svg>
    </button>
)

export default ButtonSeeAll

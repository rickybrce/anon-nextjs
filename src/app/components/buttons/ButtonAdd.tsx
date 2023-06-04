import React, { ReactNode } from 'react'

type Props = {
    disabled?: boolean
    children?: ReactNode
    onClick?: () => void
}

const ButtonAdd = ({ disabled = false, onClick, children }: Props) => (
    <button
        onClick={() => (onClick ? onClick() : null)}
        disabled={disabled}
        className="
        text-base
        leading-[24px]
        font-w-600 text-white transition duration-300 border-none hover:underline whitespace-nowrap focus:outline-none flex items-center">
        <span>{children}</span>
        <svg className='ml-[6px]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.52794 3.52876C5.26759 3.78911 5.26759 4.21122 5.52794 4.47157L9.05654 8.00016L5.52794 11.5288C5.26759 11.7891 5.26759 12.2112 5.52794 12.4716C5.78829 12.7319 6.2104 12.7319 6.47075 12.4716L10.4708 8.47157C10.7311 8.21122 10.7311 7.78911 10.4708 7.52876L6.47075 3.52876C6.2104 3.26841 5.78829 3.26841 5.52794 3.52876Z" fill="white" />
        </svg>

    </button>
)

export default ButtonAdd

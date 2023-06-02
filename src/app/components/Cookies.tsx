import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


import cx from 'classnames'

import ButtonCookies from './buttons/ButtonCookies'

export type CookieState = {
    analytics: boolean
    marketing: boolean
}

type Props = {
    visible?: boolean
    defaultState: CookieState
    onAccept?: (state: CookieState) => void
    acceptCta: string
    acceptCtaAll: string
    optionsCta: string
    copy: string
    items: any
}

type CookieListProps = {
    state: CookieState
    onChange?: (state: CookieState) => void
    items: any
}

type CookieListItemProps = {
    disabled?: boolean
    checked?: boolean
    title: string
    copy: string
    onChange?: (checked: boolean) => void
}

const Cookies = ({
    visible = true,
    onAccept,
    defaultState = {
        analytics: false,
        marketing: false,
    },
    acceptCta,
    optionsCta,
    acceptCtaAll,
    copy,
    items
}: Props) => {
    const [isVisible, setIsVisible] = useState(visible)
    const [showSettings, setShowSettings] = useState(false)
    const [acceptDisabled, setAcceptDisabled] = useState(false)
    const [state, setState] = useState(defaultState)

    const listRef = useRef(null)

    useEffect(() => {
        setIsVisible(visible)
    }, [visible])

    const GetWrapperStyle = () => {
        return showSettings && listRef !== null ? { height: listRef.current ? listRef.current : "" } : { height: 0 }
    }

    const HandleAccept = () => {
        const cookesPopup = document.querySelector(".cookies-popup")
        if(cookesPopup) {
            cookesPopup.classList.add("hidden");
        }
        setShowSettings(false)
        setAcceptDisabled(true)
        setIsVisible(false)
        // if the settings are hidden, we accept everything
        // if the settings are shown we accept what's selected
        const acceptance = showSettings
            ? state
            : {
                analytics: true,
                marketing: true,
            }

        if (onAccept) {
            onAccept(acceptance)
        }
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 128 }}
                    transition={{ duration: 0.5, delay: 1.25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 256, transition: { delay: 0.1 } }}
                    className="
                    px-4
                    max-w-7xl
                    mb-8
                    lg:px-0
                    lg:max-w-[clamp(700.44px,68.4vw,1313.33px)]
                    lg:mb-[clamp(22.76px,2.22vw,42.67px)]
                    cookies-popup fixed bottom-0 left-0 right-0 z-50 w-full mx-auto antialiased text-grey-600 font-450 no-print"
                >
                    <div 
                    style={{boxShadow: "0px 0px 100px rgb(0 0 0 / 15%)"}}
                    className="rounded-lg
                    px-8 
                    py-6 
                    lg:px-[clamp(22.76px,2.22vw,42.67px)] 
                    lg:py-[clamp(18.49px,1.81vw,34.67px)] 
                    overflow-hidden bg-white text-black shadow-lg">
                        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:items-center md:flex-row">
                            <div className="
                            text-sm 
                            leading-6
                            lg:text-[clamp(9.96px,0.97vw,18.67px)] 
                            lg:leading-[clamp(17.07px,1.67vw,32px)]
                            font-light font-450
                            " dangerouslySetInnerHTML={{ __html: copy }} />
                            <div>
                                <ButtonCookies onClick={HandleAccept} disabled={acceptDisabled}>
                                {showSettings ? (<span>{acceptCta}</span>) : (<span>{acceptCtaAll}</span>)}
                                </ButtonCookies>
                            </div>
                            <button
                                onClick={() => setShowSettings((current) => !current)}
                                className="
                                text-sm
                                lg:text-[clamp(10.67px,1.04vw,20px)]
                                lg:leading-[clamp(10.67px,1.04vw,20px)]
                                flex items-center focus:outline-none whitespace-nowrap"
                            >
                                <svg
                                    className={cx('mr-3 lg:mr-[clamp(8.53px,0.83vw,16px)] transform transition duration-300', { 'rotate-180': !showSettings })}
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0H24V24H0V0Z" fill="#fff"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M7 10L12 15L17 10H7Z" fill="#000000"></path>
                                </svg>
                                <span>{optionsCta}</span>
                            </button>


                        </div>

                        <div className="transition-all duration-500" ref={listRef} style={GetWrapperStyle()}>
                            <CookieList items={items} state={state} onChange={(state) => setState(state)} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

const CookieList = ({ state, onChange, items }: CookieListProps) => {
    const [cookieState, setCookieState] = useState<CookieState>(state)

    useEffect(() => {
        if (onChange) {
            onChange(cookieState)
        }
    }, [cookieState, onChange])

    return (
        <div className="pt-6 lg:pt-9">
            <div className="pt-6 border-t border-gray-200">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <CookieListItem disabled={true} checked={true} title={items[0].title} copy={items[0].copy} />
                    <CookieListItem
                        checked={cookieState.analytics}
                        onChange={(checked) => setCookieState((current) => ({ ...current, analytics: checked }))}
                        title={items[1].title}
                        copy={items[1].copy}
                    />
                    <CookieListItem
                        checked={cookieState.marketing}
                        onChange={(checked) => setCookieState((current) => ({ ...current, marketing: checked }))}
                        title={items[2].title}
                        copy={items[2].copy}
                    />
                </div>
            </div>
        </div>
    )
}

const CookieListItem = ({ disabled = false, checked = false, onChange, title, copy }: CookieListItemProps) => {
    const [itemChecked, setChecked] = useState(checked)

    /*useEffect(() => {
        if (onChange) {
            onChange(itemChecked)
        }
    }, [itemChecked, onChange])*/

    return (
        <label className={cx('cookies-checkbox flex lg:leading-[clamp(14.93px,1.46vw,28px)] font-w-530', { 'opacity-50': disabled })}>
            
            <div className="">
                <div className="
                flex items-center relative"><input
                type="checkbox"
                onChange={() => setChecked((current) => !current)}
                checked={itemChecked}
                disabled={disabled}
                className="hidden  border-[1px] border-black text-black focus:border-black focus:none focus:ring-offset-0 focus:ring-black focus:ring-opacity-0
                "
            />
            <div className="relative rounded-[3px]
            w-3
            h-3
            mr-2
            lg:w-[clamp(11.38px,1.11vw,21.33px)]
            lg:h-[clamp(11.38px,1.11vw,21.33px)]
            lg:mr-[clamp(5.69px,0.56vw,10.67px)]
            ">
                <span className='bg-white block w-full h-full rounded-[3px] border-[1px] border-black'>
            <svg 
            className='
            absolute top-0 left-0 z-20
            w-full
            h-full
            ' 
            width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1013_37)">
            <path d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0ZM13.707 5.207L6.707 12.207C6.51947 12.3945 6.26516 12.4998 6 12.4998C5.73484 12.4998 5.48053 12.3945 5.293 12.207L2.293 9.207C2.19749 9.11475 2.12131 9.00441 2.0689 8.8824C2.01649 8.7604 1.9889 8.62918 1.98775 8.4964C1.9866 8.36362 2.0119 8.23194 2.06218 8.10905C2.11246 7.98615 2.18671 7.8745 2.28061 7.7806C2.3745 7.68671 2.48615 7.61246 2.60905 7.56218C2.73194 7.5119 2.86362 7.4866 2.9964 7.48775C3.12918 7.4889 3.2604 7.51649 3.3824 7.5689C3.50441 7.62131 3.61475 7.69749 3.707 7.793L6 10.086L12.293 3.793C12.3852 3.69749 12.4956 3.62131 12.6176 3.5689C12.7396 3.51649 12.8708 3.4889 13.0036 3.48775C13.1364 3.4866 13.2681 3.5119 13.391 3.56218C13.5139 3.61246 13.6255 3.68671 13.7194 3.78061C13.8133 3.8745 13.8875 3.98615 13.9378 4.10905C13.9881 4.23194 14.0134 4.36362 14.0123 4.4964C14.0111 4.62918 13.9835 4.7604 13.9311 4.8824C13.8787 5.00441 13.8025 5.11475 13.707 5.207Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_1013_37">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg></span></div> {title}</div>
                <p className="
                mt-2
                lg:mt-[clamp(10.67px,1.04vw,20px)]">{copy}</p>
            </div>
        </label>
    )
}

export default Cookies

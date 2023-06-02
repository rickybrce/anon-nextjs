import React, { useState, useEffect } from 'react'
import Cookies, { CookieState } from '../components/Cookies'
import TagManager from 'react-gtm-module'
import { useRouter } from 'next/dist/client/router';
import { useCookies } from 'react-cookie';
import content from '../../../public/static/locales/en/common.json'

//Set tag manager id
const tagManagerArgs = {
    gtmId: `${process.env.NEXT_PUBLIC_GTM_ID}`,
}
//Set domain
const domain = `${process.env.NEXT_PUBLIC_DOMAIN}`


export type Props = {
    children: any;
}

declare const window: any;


const Layout = ({ children }: Props) => {

    const router = useRouter()
    const [cookiesVisible, setCookiesVisible] = useState(false)
    const [cookies, setCookie] = useCookies(['accept-cookies']);
    const [cookiesAnalytics, setCookieAnalytics] = useCookies(['accept-analytics']);
    const [cookiesMarketing, setCookieMarketing] = useCookies(['accept-marketing']);
    const [noAnalyticsCookies, setNoAnalyticsCookie, removeNoAnalyticsCookie] = useCookies(['no-analytics']);
    const [noMarketingCookies, setNoMarketingCookie, removeNoMarketingCookie] = useCookies(['no-marketing']);

    //const [cookiesVisible, setCookiesVisible] = useState(false)

    useEffect(() => {
        /*const bodyclass = document.querySelector('body');
        bodyclass?.classList.add("overflow-hidden");*/


        if (cookies['accept-cookies'] !== "true") {
            setCookiesVisible(true)
        } else if (cookiesAnalytics['accept-analytics'] !== "true" && noAnalyticsCookies['no-analytics'] !== "true" && true) {
            setCookiesVisible(true)
        } else if (cookiesMarketing['accept-marketing'] !== "true" && noMarketingCookies['no-marketing'] !== "true" && true) {
            setCookiesVisible(true)
        }

        if (cookiesAnalytics['accept-analytics'] === "true") {
            TagManager.initialize(tagManagerArgs)
        }

        document.body.classList.add('md:overflow-auto');

    }, [noMarketingCookies, noAnalyticsCookies, cookiesMarketing, cookiesAnalytics, cookies])

    const handleAcceptance = (state: CookieState) => {
        setCookie('accept-cookies', true, { path: '', domain: domain, maxAge: 15552000 });
        if (state.analytics === true) {
            TagManager.initialize(tagManagerArgs)
            setCookieAnalytics('accept-analytics', true, { path: '', domain: domain, maxAge: 15552000 });
            removeNoAnalyticsCookie('no-analytics', { path: '', domain: domain });
        } else {
            setNoAnalyticsCookie('no-analytics', true, { path: '', domain: domain, maxAge: 2592000 });
        }
        if (state.marketing === true) {
            setCookieMarketing('accept-marketing', true, { path: '', domain: domain, maxAge: 15552000 });
            removeNoMarketingCookie('no-marketing', { path: '', domain: domain });
        } else {
            setNoMarketingCookie('no-marketing', true, { path: '', domain: domain, maxAge: 2592000 });
        }
    }



    return (
        <>
                {children}

            {<Cookies
                visible={cookiesVisible}
                defaultState={{ analytics: cookiesAnalytics['accept-analytics'] ? true : false, marketing: cookiesMarketing['accept-marketing'] ? true : false }}
                onAccept={handleAcceptance}
                acceptCta={router.locale === 'en' ? content.cookies.acceptCta : content.cookies.acceptCta}
                acceptCtaAll={router.locale === 'en' ? content.cookies.acceptCtaAll : content.cookies.acceptCtaAll}
                optionsCta={router.locale === 'en' ? content.cookies.optionsCta : content.cookies.optionsCta}
                copy={router.locale === 'en' ? content.cookies.copy : content.cookies.copy}
                items={router.locale === 'en' ? content.cookies.items : content.cookies.items}
            />}
        </>
    )
}

export default Layout;

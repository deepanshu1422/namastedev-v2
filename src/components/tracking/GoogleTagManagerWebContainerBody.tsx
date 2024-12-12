import Script from 'next/script';
import React, { FC } from 'react';
const GoogleTagManagerWebContainerBody: FC = () => {
    return (
        <>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-KXVR88XN"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                ></iframe>
            </noscript>
        </>
    );
}

export default GoogleTagManagerWebContainerBody;
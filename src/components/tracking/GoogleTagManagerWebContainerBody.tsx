import React, { FC } from 'react';

const GoogleTagManagerWebContainerBody: FC = () => {
    return (
        <noscript>
            <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-P3K58FHB"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
        </noscript>
    );
}

export default GoogleTagManagerWebContainerBody;
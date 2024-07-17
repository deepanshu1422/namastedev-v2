'use client'


import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/audio.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider, Poster, Track } from "@vidstack/react"
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';

import React from 'react'

export default function NewPlayer({ title, ytId }: { title: string, ytId: string }) {
    return (
        <MediaPlayer
            src={`youtube/${ytId}`}
            viewType='video'
            streamType='on-demand'
            logLevel='warn'
            crossOrigin
            playsInline
            title={title}
            poster='https://files.vidstack.io/sprite-fight/poster.webp'
        >
            <MediaProvider>
                <Poster className="vds-poster" />
                {/* {textTracks.map(track => (
            <Track {...track} key={track.src} />
        ))} */}
            </MediaProvider>
            <DefaultVideoLayout
                // thumbnails='https://files.vidstack.io/sprite-fight/thumbnails.vtt'
                icons={defaultLayoutIcons}
            />
        </MediaPlayer>
    )
}

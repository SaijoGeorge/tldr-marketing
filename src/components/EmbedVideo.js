import React from 'react'

import { media } from '../styles/theme'

const EmbedVideo = ({ type, id, src, ratio = '56.25%', cover }) => {
  const url = {
    youtube: 'https://www.youtube.com/embed',
    vimeo: 'https://player.vimeo.com/video',
  }[type]

  return (
    <div
      className="EmbedVideo"
      css={{
        width: '100%',
        height: 0,
        position: 'relative',
        paddingTop: ratio,
        backgroundColor: 'black',
        overflow: 'hidden',
        '> *': {
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          border: 0,
        },
        ...(cover && {
          [media.max._sm]: {
            '&, > *': {
              width: '100%',
              height: '100%',
            },
          },
        }),
      }}
    >
      {type === 'video' ? (
        <video src={src} controls />
      ) : (
        <iframe src={`${url}/${id}`} title="Embeded video" allowFullScreen />
      )}
    </div>
  )
}

export default EmbedVideo

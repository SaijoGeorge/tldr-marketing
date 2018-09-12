import React from 'react'

const EmbedVideo = ({ type, id, src, ratio = '56.25%', cover }) => {
  const url = {
    youtube: 'https://www.youtube.com/embed',
    vimeo: 'https://player.vimeo.com/video',
  }[type]

  return (
    <div
      className="EmbedVideo"
      css={
        cover
          ? {
              '&, > *': {
                width: '100%',
                height: '100%',
              },
              backgroundColor: 'black',
            }
          : {
              width: '100%',
              height: 0,
              position: 'relative',
              paddingTop: ratio,
              backgroundColor: 'black',
              '> *': {
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                border: 0,
              },
            }
      }
    >
      {type === 'video' ? (
        <video src={src} controls crossorigin />
      ) : (
        <iframe src={`${url}/${id}`} title="Embeded video" allowfullscreen />
      )}
    </div>
  )
}

export default EmbedVideo

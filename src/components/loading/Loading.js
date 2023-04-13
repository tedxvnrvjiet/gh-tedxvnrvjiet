import React from 'react'
import ted from '../../assets/TED.mp4'

function Loading() {
  return (
    <div>
          <video style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '-1'
          }} src={ted} className='backVideo' autoPlay playsInline loop muted />
    </div>
  )
}

export default Loading
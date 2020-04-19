import React, { useState, useEffect } from 'react'
import { IconVolume, IconDisc } from '../icons'

import addDots from '../../utils/add-dots'

import './friendfeed.scss'

function FriendFeed({ payload, ...props }) {
  const [content, setContent] = useState(payload)

  useEffect(() => {
    setContent(payload)
  }, [payload])

  return (
    <div className="friendfeed">
      <div className="friendfeed-content">
        <div className="friendfeed-content-top">
          {content.lang === 'tr' ? 'Arkadaş Aktivitesi' : 'Friend Feed'}
        </div>
        <div className="friendfeed-content-bottom">
          <div className="friendfeed-content-bottom-left">
            <img src={content.photo} alt="Profile" />
          </div>
          <div className="friendfeed-content-bottom-right">
            <div className="friendfeed-content-bottom-right-user">
              <div>{addDots(content.name, 14)}</div>
              <IconVolume
                width="16"
                height="16"
                stroke="#9a9a9a"
                className="friendfeed-content-bottom-right-user-icon"
              />
            </div>
            <div className="friendfeed-content-bottom-right-song">{addDots(content.song, 18)}</div>
            <div className="friendfeed-content-bottom-right-artist">
              {addDots(content.artist, 18)}
            </div>
            <div className="friendfeed-content-bottom-right-album">
              <div className="friendfeed-content-bottom-right-album-icon">
                <IconDisc width="16" height="16" stroke="#9a9a9a" />
              </div>
              <div className="friendfeed-content-bottom-right-album-name">
                <span>{addDots(content.album, 12)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendFeed

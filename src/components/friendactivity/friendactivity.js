import React, { useState, useEffect } from 'react'
import { IconVolume, IconDisc } from '../icons'

import { useTranslation } from 'react-i18next'

import addDots from '../../utils/add-dots'

import './friendactivity.scss'

function FriendActivity({ payload, ...props }) {
  const { t } = useTranslation()

  const [content, setContent] = useState(payload)

  useEffect(() => {
    setContent(payload)
  }, [payload])

  return (
    <div className="friendactivity">
      <div className="friendactivity-content">
        <div className="friendactivity-content-top">{t('activity-title')}</div>
        <div className="friendactivity-content-bottom">
          <div className="friendactivity-content-bottom-left">
            <img src={content.photo} alt="Profile" />
          </div>
          <div className="friendactivity-content-bottom-right">
            <div className="friendactivity-content-bottom-right-user">
              <div>{addDots(content.name, 14)}</div>
              <IconVolume
                width="16"
                height="16"
                stroke="#9a9a9a"
                className="friendactivity-content-bottom-right-user-icon"
              />
            </div>
            <div className="friendactivity-content-bottom-right-song">
              {addDots(content.song, 18)}
            </div>
            <div className="friendactivity-content-bottom-right-artist">
              {addDots(content.artist, 18)}
            </div>
            <div className="friendactivity-content-bottom-right-album">
              <div className="friendactivity-content-bottom-right-album-icon">
                <IconDisc width="16" height="16" stroke="#9a9a9a" />
              </div>
              <div className="friendactivity-content-bottom-right-album-name">
                <span>{addDots(content.album, 12)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendActivity

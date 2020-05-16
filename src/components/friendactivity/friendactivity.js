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
            {content.photo ? (
              <img src={content.photo} alt="Profile" />
            ) : (
              <div class="no-photo">
                <svg viewBox="0 0 80 90" width="18" height="20">
                  <path
                    d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z"
                    fill="#b3b3b3"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </div>
            )}
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
              {addDots(content.song, 20)}
            </div>
            <div className="friendactivity-content-bottom-right-artist">
              {addDots(content.artist, 18)}
            </div>
            <div className="friendactivity-content-bottom-right-album">
              <div className="friendactivity-content-bottom-right-album-icon">
                <IconDisc width="16" height="16" stroke="#9a9a9a" />
              </div>
              <div className="friendactivity-content-bottom-right-album-name">
                <span>{addDots(content.album, 13)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FriendActivity

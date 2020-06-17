import React, { useState, useEffect } from 'react'
import FriendActivity from '../friendactivity/'
import ScreenCapture from '../screencapture'
import { TextInput, SelectInput } from '../inputs'
import { PrimaryButton, SecondaryButton } from '../buttons'
import { useTranslation } from 'react-i18next'

import './app.scss'

function App() {
  const browserLanguage = navigator.language || navigator.userLanguage
  let defaultLang = 'en'
  if (browserLanguage.substring(0, 2) === 'tr') {
    defaultLang = 'tr'
  }

  const { t, i18n } = useTranslation()

  const initialState = {
    lang: defaultLang,
    name: 'serhatyuna',
    photo:
      'https://i.scdn.co/image/ab6775700000ee85e5f7ef9aa5aef649cb55f861',
    song: 'Oh Slime - Live',
    artist: 'Fishmans',
    album: '98.12.28 男達の別れ (Live)',
    screenCapture: '',
  }

  const [lang, setLang] = useState(initialState.lang)
  const [name, setName] = useState(initialState.name)
  const [photo, setPhoto] = useState(initialState.photo)
  const [song, setSong] = useState(initialState.song)
  const [artist, setArtist] = useState(initialState.artist)
  const [album, setAlbum] = useState(initialState.album)

  const [screenCapture, setScreenCapture] = useState(initialState.screenCapture)

  const handleScreenCapture = (sc) => {
    document.body.style.overflow = 'scroll'
    setScreenCapture(sc)
  }

  const takeScreenshot = (onStartCapture) => {
    setScreenCapture(initialState.screenCapture)
    setTimeout(() => {
      onStartCapture()
    }, 200)
  }

  const clearAll = () => {
    setName(initialState.name)
    setPhoto(initialState.photo)
    setSong(initialState.song)
    setArtist(initialState.artist)
    setAlbum(initialState.album)
    setScreenCapture(initialState.screenCapture)
  }

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [i18n, lang])

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <div className="container">
          <header>
            <h1>{t('title')}</h1>
          </header>
          <div className="inputs">
            <SelectInput defaultValue="tr" onChange={(e) => setLang(e.target.value)}>
              <label>{t('lang')}</label>
              <option value="tr">Türkçe</option>
              <option value="en">English</option>
            </SelectInput>
            <TextInput
              placeholder="John Doe"
              onChange={(e) => setName(e.target.value)}
              value={name}
            >
              <label>{t('username')}</label>
            </TextInput>
            <TextInput
              placeholder="https://"
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
            >
              <label>{t('ppurl')}</label>
            </TextInput>
            <TextInput
              placeholder="Dream On"
              onChange={(e) => setSong(e.target.value)}
              value={song}
            >
              <label>{t('song')}</label>
            </TextInput>
            <TextInput
              placeholder="Aerosmith"
              onChange={(e) => setArtist(e.target.value)}
              value={artist}
            >
              <label>{t('artist')}</label>
            </TextInput>
            <TextInput
              placeholder="Aerosmith"
              onChange={(e) => setAlbum(e.target.value)}
              value={album}
            >
              <label>{t('album')}</label>
            </TextInput>
            <div className="buttons">
              <PrimaryButton
                onClick={() => takeScreenshot(onStartCapture)}
                className="hide-on-mobile"
              >
                {t('takescreenshot')}
              </PrimaryButton>
              <SecondaryButton onClick={clearAll}>{t('reset')}</SecondaryButton>
              <div className="show-on-mobile">
                <p>{t('mobile-info')}</p>
              </div>
            </div>
          </div>
          <div className="result">
            <img src={screenCapture} alt="" />
          </div>
          <FriendActivity payload={{ lang, name, photo, song, artist, album }} />
          <footer>
            <p>
              developed by <a href="https://github.com/serhatyuna">@serhatyuna</a>
            </p>
          </footer>
        </div>
      )}
    </ScreenCapture>
  )
}

export default App

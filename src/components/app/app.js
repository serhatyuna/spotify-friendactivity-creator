import React, { useState, useEffect } from 'react'
import FriendFeed from '../friendfeed/'
import ScreenCapture from '../screencapture'
import { TextInput, SelectInput } from '../inputs'

import './app.scss'

function App() {
  const [lang, setLang] = useState('en')
  const [name, setName] = useState('serhatyuna')
  const [photo, setPhoto] = useState(
    'https://profile-images.scdn.co/images/userprofile/default/4a35afcfb34fa7b4c14c55683cda8bf0e81960bc',
  )
  const [song, setSong] = useState('Oh Slime - Live')
  const [artist, setArtist] = useState('Fishmans')
  const [album, setAlbum] = useState('98.12.28 男達の別れ (Live)')

  const [screenCapture, setScreenCapture] = useState('')

  const handleScreenCapture = (sc) => {
    document.body.style.overflow = 'scroll'
    setScreenCapture(sc)
  }

  const onChangeLang = (event) => {
    setLang(event.target.value)
  }

  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangePhoto = (event) => {
    setPhoto(event.target.value)
  }

  const onChangeSong = (event) => {
    setSong(event.target.value)
  }

  const onChangeArtist = (event) => {
    setArtist(event.target.value)
  }

  const onChangeAlbum = (event) => {
    setAlbum(event.target.value)
  }

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <div className="container">
          <header>
            <h1>
              Welcome to Spotify Friend Feed Creator{' '}
              <span role="img" aria-label="Smiling Face with Hearts">
                🥰
              </span>
            </h1>
          </header>
          <div className="inputs">
            <SelectInput defaultValue="en" onChange={onChangeLang}>
              <label>Language</label>
              <option value="en">English</option>
              <option value="tr">Türkçe</option>
            </SelectInput>
            <TextInput placeholder="John Doe" onChange={onChangeName} value={name}>
              <label>Username</label>
            </TextInput>
            <TextInput placeholder="https://" onChange={onChangePhoto} value={photo}>
              <label>Profile Photo URL</label>
            </TextInput>
            <TextInput placeholder="Dream On" onChange={onChangeSong} value={song}>
              <label>Song</label>
            </TextInput>
            <TextInput placeholder="Aerosmith" onChange={onChangeArtist} value={artist}>
              <label>Artist</label>
            </TextInput>
            <TextInput placeholder="Aerosmith" onChange={onChangeAlbum} value={album}>
              <label>Album</label>
            </TextInput>
            <button onClick={onStartCapture}>Take Screenshot</button>
            <img src={screenCapture} alt="" />
          </div>
          <FriendFeed payload={{ lang, name, photo, song, artist, album }} />
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

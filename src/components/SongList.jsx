import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewSongForm from './NewSongForm';

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'Everything in its Right Place', id: 1 },
    { title: 'Solitude is Bliss', id: 2 },
    { title: "Oh Sheit it's X", id: 3 }
  ])
  const [age, setAge] = useState(20)
  const addSong = title => {
    setSongs([...songs, {title, id: uuid()}])
  }
  useEffect(() => {
    console.log('useEffect hook ran', songs)
  }, [songs])
  useEffect(() => {
    console.log('useEffect hook ran', age)
  }, [age])
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => ( <li key={song.id}>{song.title}</li> ) )}
      </ul>
      <button onClick={addSong}>Add New Song</button>
      <NewSongForm addSong={addSong}/>
      <button onClick={() => setAge(age + 1)}>Add 1 to Age: {age}</button>
    </div>
  )
}

export default SongList
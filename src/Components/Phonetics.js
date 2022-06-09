import React from 'react';
import './Phonetics.css';

function Phonetics(props) {
  let audioUrl = props.phonetic.audio;
  let audio = new Audio(audioUrl);
  let nationality = audioUrl.slice((audioUrl.length - 6), (audioUrl.length - 4))

  return (
    <li className='Phonetics-item'>
      <strong>{nationality.toLowerCase()}: </strong>
      {"   "}
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="phonetic-audio"
        onClick={(e) => { e.preventDefault(); audio.play() }}
      >
        <i className="fas fa-volume-up"></i>
      </a>
      {"   "}
      <p className='phonetic-text'>{props.phonetic.text}</p>
    </li>
  )
}

export default Phonetics
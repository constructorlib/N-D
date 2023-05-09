import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function RootComponent() {
  // const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  // const [word, setWord] = useState("");
  // const [meaning, setMeaning] = useState("");
  // const [example, setExample] = useState("");
  // const [partOfSpeech, setPartOfSpeech] = useState("");
  // const [phonetic, setPhonetic] = useState("");
  // const [audio, setAudio] = useState("");

  // const handleSearch = () => {
  //   fetch(`${url}${word}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setMeaning(data[0].meanings[0].definitions[0].definition);
  //       setExample(data[0].meanings[0].definitions[0].example || "");
  //       setPartOfSpeech(data[0].meanings[0].partOfSpeech);
  //       setPhonetic(data[0].phonetics[0].text);
  //       setAudio(data[0].phonetics[0].audio);
  //     })
  //     .catch(() => {
  //       setMeaning("Couldn't find the word");
  //       setExample("");
  //       setPartOfSpeech("");
  //       setPhonetic("");
  //       setAudio("");
  //     });
  // };

  const playSound = () => {
    const audioElement = document.getElementById("audio");
    audioElement.setAttribute("src", `https:${audio}`);
    audioElement.play();
  };

  return (
    <div className="loot">
      <audio id="audio"></audio>
      <div className="ctn">
        <input
          type="text"
          placeholder="Type the word here..."
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="result">
        <div className="sample">
          <h3>{word}</h3>
          <button onClick={playSound}>
            <FontAwesomeIcon icon={faVolumeUp} />
          </button>
        </div>
        <div className="details">
          <p>{partOfSpeech}</p>
          <p>/ {phonetic} /</p>
        </div>
        <p className="word-definition">{meaning}</p>
        {example && <p className="word-example">{example}</p>}
      </div>
    </div>
  );
}
ReactDOM.render(<RootComponent />, document.getElementById("root"));

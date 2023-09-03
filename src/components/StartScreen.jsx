import React from "react";
import useSound from "use-sound";
import play from "../assets/play.mp3";

function StartScreen({ setStart }) {
  const [letsPlay] = useSound(play);

  const startGameClickHandle = () => {
    setStart(true);
    letsPlay();
  };

  return (
    <div className="startButton">
      <button onClick={startGameClickHandle}>Start</button>
    </div>
  );
}

export default StartScreen;

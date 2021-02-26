import React from "react";
import ReactDOM from "react-dom";
import App from "./App";


let chirps = [
    {id: 1, username: "xXSlayerXx", content: "I like to call myself a gamer!" },
    {id: 2, username: "pwningNoobs", content: "Eaaaaaasy money!!"},
    {id: 3, username: "JukeBoxHero", content: "stars in my eyes today. 🤩"}
]
ReactDOM.render(<App chirps={chirps}/>, document.getElementById("root"));
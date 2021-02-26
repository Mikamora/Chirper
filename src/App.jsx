import React from "react";

const App = (props) => {
    let entries = props.chirps;
    let chirpPlace = entries.map((entries) =>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{entries.username}</h5>
                <p class="card-text">{entries.content}</p>
            </div>
        </div>
    );

    let click = () => {
        let array1 = {username: document.getElementById("username").value, content:document.getElementById("chirp").value }
        let newArr = [...entries, array1];
        document.getElementById("username").value = "";
        document.getElementById("chirp").value = "";
        console.log(newArr);
        let div = document.createElement("div");
        div.className = "card";
        let h5 = document.createElement("h5");
        let p = document.createElement("p");
        let div2 = document.createElement("div");
        h5.className = "card-title";
        h5.textContent = `${newArr[3].username}`;
        p.className = "card-text";
        p.textContent = `${newArr[3].content}`;
        div2.className = "card-body";
        div.appendChild(div2);
        div2.appendChild(h5);
        div2.appendChild(p);
        document.getElementById("root").appendChild(div);
    }

    return (
        <div>
            <div class="card">
                <div class="card-header">
                    <input  type="text" name="username" id="username" placeholder="username" />
                    <input  class="col-8" type="text" name="chirp" id="chirp" placeholder="What's up?" />
                    <button onClick={click} type="button">chirp!</button>
                </div>
            </div>
            <div>{chirpPlace}</div>
        </div>
    )
}

export default App;
// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React from 'react';
import ReactDOM from 'react-dom';

import socket from "./socket";
import Game from "./components/game";
import Lobby from "./components/lobby";

function readyGame(playerChannel, gameChannel, state) {
    let game = document.getElementById('game');
    ReactDOM.render(<Game playerChannel={playerChannel} channel={gameChannel} state={state} />, game)
}

function readyTable(channel, tableChannel, username) {
    let table = document.getElementById('table');
    ReactDOM.render(<Lobby channel={channel} tableChannel={tableChannel} user={username}/>, table)
}

function start() {
  let game_code = (window.game_code) ? window.game_code : "lobby"

  let playerChannel = socket.channel("player:" + window.user_name, {code: game_code})
  let table = socket.channel("table:" + game_code, {username: window.user_name})

  playerChannel.join()
      .receive("ok", state0 => {
          console.log(game_code + "game joined")
          readyGame(playerChannel, table, state0)
     })
     .receive("error", resp => { console.log("Unable to join game " + game_code, resp) })

  table.join()
    .receive("ok", _ => {
        console.log("table joined")
        readyTable(playerChannel, table, window.user_name)
   })
   .receive("error", resp => { console.log("Unable to join all table", resp) })


}

$(start);

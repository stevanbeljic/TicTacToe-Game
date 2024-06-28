<script setup>
import "../styles/findGame.css"
import { ref } from 'vue';
import gameboard from "../components/gameBoard.vue";


let gameStarted = ref(false);
let createdGame = ref(false);
let gameCode = ref('');

const serverCreateGame = async () => {
    const response = await fetch("http://localhost:3000/game/newgame", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: 'user' })
    });

    if(!response.ok){
        throw new Error(`Unable to create game, ${response.status}`);
    }

    const game = await response.json();
    console.log(`Game ID: ${game.id}`);
    gameCode.value = game.id;
}

const createGame = async () => {
    await serverCreateGame();
    gameStarted.value = true;
    createdGame.value = true;
}

const joinGame = async () => {
    gameStarted.value = true;
    createdGame.value = false;
}
</script>

<template>
    <body class="margin-none background-pretty div-flex-justify-align-center">
        <div v-if="!gameStarted" class="square">
            <h1>Tic-Tac-Toe</h1>
            <p>Made by Stevan Beljic</p>
            <div class="div-flex-justify-align-center">
                <button class="button-rounded" @click="joinGame">Join Game</button>
                <button class="button-rounded" @click="createGame">Create Game</button>
            </div>
        </div>
        <div v-if="gameStarted && createdGame" class="square">
            <gameboard />
        </div>
        <div v-else-if="gameStarted && !createdGame" class="square">
            <form class="div-flex-justify-align-center">
                <input type="number" placeholder="Enter game code">
                <input type="submit" value="Join" class="button-rounded">
            </form>
        </div>
        <div v-if="gameStarted && createdGame">
            <p class="white-background">Join code: {{ gameCode }} </p>
        </div>
    </body>
</template>
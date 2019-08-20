var Room1 = {
    description: "You're standing in a damp stone room. There is an open doorway to your West and a locked door to your East.",
    east: Room3,
    west: Room2
};

var Room2 = {
    description: "You're in a dim stone room. There is an open doorway to your East.",
    east: Room1,
    item: "key"
};

var Room3 = {
    description: "You're outside! You're free!",
    locked: true,
    west: Room1
};

var currentRoom = Room1;
var gameOver = false;
var playerInventory = [];

function changeRoom(room) {
    currentRoom = room;
    describeRoom(currentRoom);
}

function movePlayer(direction) {
    if (!currentRoom.hasOwnProperty(direction)) {
        console.log("You can't go that way.");
    } else if ('locked' in currentRoom[direction]) {
        if (playerInventory.includes('key')) {
            console.log("You unlocked the door with the key!");
            delete currentRoom[direction].locked;
            changeRoom(currentRoom[direction]);
        } else {
            console.log("That door is locked.");
        }
    } else {
        changeRoom(currentRoom[direction]);
    }
}

function describeRoom(room) {
    console.log(room.description);
    if (room.hasOwnProperty('item')) {
        console.log("You see a " + room.item + ".");
    }
}

function takeItem() {
    if (currentRoom.hasOwnProperty('item')) {
        playerInventory.push(currentRoom.item);
        console.log("You collected " + currentRoom.item + ".");
        delete currentRoom.item;
    } else {
        console.log("You can't do that.");
    }
}

function listInventory() {
    if (playerInventory.length === 0) {
        console.log("You have nothing.");
    } else {
        console.log("You have:");
        for (i = 0; i < playerInventory.length; i++) {
            console.log(playerInventory[i]);
        }
    }
}

function gameLoop() {
    while (!gameOver) {
        playerCommand = prompt("What next? Valid commands are east, west, inventory, look, take, and quit");

        if (playerCommand == 'west') {
            movePlayer(playerCommand);
        } else if (playerCommand == 'east') {
            movePlayer(playerCommand)
        } else if (playerCommand == 'inventory') {
            listInventory();
        } else if (playerCommand == "look") {
            describeRoom(currentRoom);
        } else if (playerCommand == "take") {
            takeItem();
        } else if (playerCommand == "quit") {
            gameOver = true;
        } else {
            console.log("That is not a valid command.");
        }
    }
}

describeRoom(currentRoom);
gameLoop();
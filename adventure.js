// A simple JavaScript adventure game. Fetch the key and open the door to freedom!

// Probably the best way to run this is to paste it as a Chrome JavaScript snippet. Google that if you don't know how to create those. JavaScript is admittedly probably the worst language to implement an old-school text adventure in, but when all you have is a hammer…

// We have three rooms, each outlined as objects.

var Room1 = {
    description: "You're standing in a damp stone room. There is an open doorway to your West and a locked door to your East.",
    east: Room3,
    west: Room2
};

// You can easily add your own rooms by following these examples. Name the object Room# and tie it to a direction in another room. You'll also need to add the appropriate navigation command to the gameLoop() function—see the comment below.

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

// We keep track of the room you're in with currentRoom, starting with Room1.
// gameOver tracks the game's state and lets you quit.
// playerInventory is an array that keeps track of your inventory.

var currentRoom = Room1;
var gameOver = false;
var playerInventory = [];

// changeRoom merely changes your current room and describes the new one.

function changeRoom(room) {
    currentRoom = room;
    describeRoom(currentRoom);
}

// Take a given direction, see if you can go that way, and then check if the door is locked. If locked, it checks your inventory for a key. If you have  a key, it deletes the lock from the room's object and lets you enter the room.

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

// This prints the room's description and lists an item in the room.

function describeRoom(room) {
    console.log(room.description);
    if (room.hasOwnProperty('item')) {
        console.log("You see a " + room.item + ".");
    }
}

// Add an item to the player's inventory array and delete it from the room object.

function takeItem() {
    if (currentRoom.hasOwnProperty('item')) {
        playerInventory.push(currentRoom.item);
        console.log("You collected " + currentRoom.item + ".");
        delete currentRoom.item;
    } else {
        console.log("You can't do that.");
    }
}

// List the contents of the player's inventory array in a human-friendly format.

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

// The main game loop, which provides a command prompt and interprets commands to activate the functions defined above.

// The only movement directions in the loop are 'west' and 'east' but you can easily add your own by following the examples, calling the movePlayer function.

function gameLoop() {
    while (!gameOver) {

        playerCommand = prompt("What next? Valid commands are east, west, inventory, look, take, and quit").toLowerCase();

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

// Kick off the game by describing currentRoom (which should be Room1) and initiating the game loop.

describeRoom(currentRoom);
gameLoop();
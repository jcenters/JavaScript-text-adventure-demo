# JavaScript Adventure Demo

When I was a kid, I loved text adventure games like Adventure and Zork. I tried to make my own with languages like Perl and Python, but never managed to succeed. I always told myself that if I could figure it out, I'd be a real programmer. Well, I've been learning JavaScript lately and while I was driving one day, how such a program could work popped into my head. The result is the JavaScript you see here in adventure.js.

So I'm sharing it here on GitHub so other aspiring programmers can study it, learn from it, and modify it to create the text adventure game of their dreams.

## How to Run

Probably the best way is in the Chrome developer console or as a snippet. You also could probably  run it from the command line with Node with the right extension, but vanilla Node doesn't like the prompt() function. JavaScript is admittedly the worst language to write this sort of thing in, but it's what I have.

## Adapt it to Your Own Ends

The code is absurdly documented and should be highly modular. You can add as many rooms, items, locked doors, and other things as you like.

Some things you could do to improve this game:

* Add torch items, torch mechanics, and rooms that are dark and unlit by default.
* Make the item properties for the rooms arrays so a room can contain more than one item.
* Add enemies to fight, as well as fight mechanics and player hitpoints.
* Create an actual win condition for the game so you don't have to enter the "quit" command.
* Create a scoring system of some sort.

Have fun! Let me know if you make anything cool with this.
#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
  {
    message: "Please guess a number b/w 01-10:",
    type: "number",
    name: "userGuessedNumber",
  },
]);

if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations! you guessed right number");
} else {
  console.log("You guessed wrong number");
}

#! /usr/bin/env node 

// Importing inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull welcome message
console.log(chalk.white.bold.bgBlue("\n \t Welcome to codiiingwithhamza - word counter\n"));
console.log("=".repeat(60));

// prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "Input",
        message: "Enter a sentence",
    }
]);

// Trimming the  sentence and splitting it into words based on spaces
let words = answers.sentence.trim().split(" ");

// Analysis of user Input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - word count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));

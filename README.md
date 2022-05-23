# Wordle-React

A Wordle clone made with React.

---

## Requirements

You will need a modern web browser, NodeJS, and NPM to run this project.
To complete the exercises it is recommended that you have an IDE for C# and JavaScript.

### Node

- #### Node installation on Windows

   Go to the [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

```bash
  $ sudo apt install nodejs
  $ sudo apt install npm
```

- #### Other Operating Systems
  
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

```bash
  $ node --version
  v18.1.0

  $ npm --version
  8.8.0
```

If you need to update `npm`, you can do so using `npm`! Cool right? After running the following command, after running relaunch your command line editor.

```bash
  $ npm install npm -g
```

---

## Install

```bash
  $ git clone https://gitlab.com/maximumsnow/wordle-react
  $ cd wordle-react/wordle-API
  $ npm install
```

## Running the project

```bash
  $ cd wordle-react/wordle-API
  $ npm start
```

## How to Play

Guess the **WORDLE** in six tries.

Each guess must consist of 5 letters. Use the keyboard to add letters and hit the enter button to submit.

After each guess, the color of the tiles will change to show how close your guess was to the word.

If the tile is green the letter is in the correct spot.

If the tile is blue the letter is correct but in the wrong spot.

If the tile is grey the letter is not in the wordle.

---

## Exercises

Before working on the following exercises create a git repo and clone it locally. Then move the files from this project to that repo (excluding the .git folder).

### 1. Separate Data from Code

This project contains two folders. Wordle-API (empty) and wordle-UI (NodeJS Project).
The wordle-UI project contains a set of words within the code to be used for the word being guessed. This means that to add/remove/update the words being used a code file must be edited. This is considered bad practice. If we know data is going to be changed it should be located outside the code so it can be altered without touching code files. This exercise consists of multiple parts.

#### Exercise 1: Part 1

Find the words in the code and create a file in wordle-API containing those words.

#### Exercise 1: Part 2

Using C# create an API in the worlde-API folder that returns a random word from the file created in step 1. Remember to create unit tests for your code where possible.

#### Exercise 1: Part 3

Refactor the API created in Part 2 to accept a query string. If the query string key is "test" and value is **true** then do not return a random word. Instead return a specific word that can be used for testing.

#### Exercise 1: Part 4

Refactor the wordle-UI project to contact the API created in Part 2 and use the word provided by the API as the solution to the puzzle.

---

<!-- ### 2. End-to-End Test Automation

The value of test automation has been proven many times. However, automation requires known and expected outcomes. The randomness of the word to be guessed makes automation difficult. Sometimes to make automation easier a way to test the project needs to be programmatically added. This exercise consists of multiple parts.

Note: Exercise 1 should be completed first.

#### Exercise 2: Part 1

Refactor the project from exercise 1 to accept a URL Query String named test. When the query string test exists, the project should use the value of test for the word being guessed. This way test automation can specify a word to be used for testing

#### Exercise 2: Part 2

Using your preferred test automation framework, create end-to-end test automation for the project.

---

### 3. Containerization

Developers can create containers without Docker, but the platform makes it easier, simpler, and safer to build, deploy and manage containers. Docker is essentially a toolkit that enables developers to build, deploy, run, update, and stop containers using simple commands and work-saving automation through a single API.

In this exercise lets pretend you have released your wordle project and it's popularity has exploded. It has become so popular that your word randomizing API created in exercise 1 is dropping connections because it cannot handle all the traffic. To solve this issue you need to containerize your API so DevOps can run more than one instance of the API behind a load balancer.

#### Exercise 3: Part 1

Create a Dockerfile for the API created in Exercise 1. Build the docker container and run it. When completed all tests should pass.

#### Exercise 3: Part 2

Docker Compose provides a way to orchestrate multiple containers that work together.
Build the wordle-react Docker Image. Now that two docker images exist (one for the API and one for wordle) create a docker-compose file that will build and run both.

---

### 4. Enhancing the project

Rarely do we have an opportunity to write code that then does not have to be altered in some way later. New requirements are given or an issue is found. In this case we want to enhance the keypad of the wordle app.

#### Exercise 4: Part 1

Refactor the Keypad to match the layout of the letters on your keyboard.

#### Exercise 4: Part 2

Add the Enter and Backspace keys.

#### Exercise 4: Part 3

Refactor the Keypad to allow a user to click the keys of the keypad and have it work like the user pressed the key on the keyboard. -->

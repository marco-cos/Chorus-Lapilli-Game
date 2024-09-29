# Chorus Lapilli

## Overview
**Chorus Lapilli** is a React-based implementation of a variant of the ancient Roman game **Terni Lapilli** (similar to Tic-Tac-Toe). This project demonstrates my ability to build dynamic, interactive user interfaces using **React**. It also incorporates automated testing with **Selenium** to ensure robust functionality. Project for UCLA CS 35L class. 

The game introduces a unique twist to Tic-Tac-Toe: after placing three pieces, players must move their pieces instead of placing new ones, following specific movement rules.

## Features
- **React-based Frontend**: Built entirely using React components, showcasing proficiency with state, props, and component lifecycle.
- **Turn-based Gameplay**: Players alternate turns to place or move their pieces, with specific rules governing piece movement after the third move.
- **Win Detection**: The game automatically detects when a player has won and prevents further moves.
- **Custom Game Logic**: Includes unique rules for piece movement and behavior when occupying the center square.
- **Automated Testing**: A Python test suite using **Selenium** ensures the app behaves as expected, from board state resets to validating win conditions.

## Tech Stack
- **React**: For building the user interface and managing state.
- **JavaScript (ES6)**: Core logic of the game.
- **CSS**: Custom styling for the game board and UI.
- **Selenium**: Automated testing for validating game logic and UI behavior.
- **Node.js & npm**: Used for setting up the development environment and managing dependencies.

## Installation

### Requirements
- **Node.js** and **npm**
- **Python 3** (for running the Selenium test suite)

### Steps
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/chorus-lapilli.git
   cd chorus-lapilli
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to play the game.

## Testing
This project includes a suite of automated tests using **Selenium** to ensure that the game behaves as expected. These tests cover basic functionality like piece placement, win condition detection, and game state resets.

### Running the Tests
1. Ensure you have **Selenium** installed.
2. Run the tests with the following command:
   ```bash
   python -m unittest discover
   ```

## Project Log
Throughout the development process, I kept detailed logs to document the steps, challenges, and decisions made during the project. These logs can be found in:
- `tic-tac-toe.txt`: Logs the steps taken to build the Tic-Tac-Toe game as a foundation.
- `chorus-lapilli.txt`: A detailed record of the Chorus Lapilli development process, from initial setup to testing and packaging.

## Packaging
To create the production-ready tarball:
1. Run the following command to verify the package contents:
   ```bash
   npm pack --dry-run
   ```

2. Once verified, generate the package:
   ```bash
   npm pack
   ```

This will create the `chorus-lapilli.tgz` file, which contains the complete source code for deployment or distribution.
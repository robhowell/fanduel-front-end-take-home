# FanDuel Front-End Take-Home

Submission by Rob Howell

[fanduel-front-end-take-home.now.sh](https://fanduel-front-end-take-home.now.sh/)

## Overview

A React app that allows users to guess which player has higher FanDuel Points Per Game (FPPG).

## How to run

Go to [fanduel-front-end-take-home.now.sh](https://fanduel-front-end-take-home.now.sh/) or follow installation and development instructions below.

## Installation

- Install the correct version of Node (12.16.3, latest LTS version at time of project development). If you have `nvm` installed, run `nvm use` to install the version specified in `.nvmrc`.
- Run either `yarn` or `npm install`

## Development

- Run `yarn start` or `npm run start` to run the app locally
- Run `yarn storybook` or `npm run storybook` to run Storybook for component development

## Linting

- Run `yarn lint`

## Testing

Unit tests are written using Jest with Enzyme.

- Run `npm test`

## Assumptions

The requirements for this project leave a number of unknowns, so I have used my best judgment and made the following assumptions:

- The app presents two players on screen. The requirements for this project specifies "Present at least 2 players" so I could choose to show more players at once, but showing two players seems like a simpler game that will scale down better to mobile devices.
- Some supplementary information should be shown about each player. The requirements say that players should be shown "with their name and image" but this doesn't seem like enough information to help the user decide which player has the highest FPPG.
- That valid data is returned from the URL provided, including name, salary, FPPG, image and injury data for every player.
- The app be built responsively, and should be fully functional on mobile devices - this is not specified in the requirements.
- A running total of wins and losses in the current game should be shown on screen
- The `salary` specified for each player is in dollars
- No two players' FPPG will ever be equal

## Possible improvements

- Game data should be fully validated prior to the start of the same
- Keep a record of the pairs of shown in a round so that no pair of players is shown twice within a game
- Unit test coverage should be improved
- End to end tests could be added using a tool like Cypress
- Visual regression tests could be added using a tool such as Applitools or Chromatic
- Improve accessibility by reviewing accessibility of all screens using a tool such as aXe, and test app using a screenreader
- Common styling values for fonts, spacing sizes and colours could be extracted into a Styled Components theme
- When a game ends (user has won 10 times), it should be made highlighted more clearly in the UI

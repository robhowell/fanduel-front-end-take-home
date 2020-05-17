# FanDuel Front-End Take-Home

Submission by Rob Howell

[fanduel-front-end-take-home.now.sh](https://fanduel-front-end-take-home.now.sh/)

## Overview

A React app that allows users to guess which player has higher FanDuel Points Per Game (FPPG).

## Assumptions

The requirements for this project leaves a number of unknowns, so I have used my best judgment and made the following assumptions:

- The app presents two players on screen. The requirements for this project specifies "Present at least 2 players" so I could choose to show more players at once, but showing two players seems like a simpler game that will scale down better to mobile devices.
- Some supplementary information should be shown about each player. The requirements say that players should be shown "with their name and image" but this doesn't seem like enough information to help the user decide which player has the highest FPPG.
- The app be built responsively, and should be fully functional on mobile devices - this is not specified in the requirements.
- A running total of wins and losses in the current game should be shown on screen
- The `salary` specified for each player is in dollars
- No two players' FPPG will ever be equal

## Possible improvements

- Improve accessibility by reviewing accessibility of all screens using a tool such as aXe, and testing using a screenreader
- Unit test coverage could be improved
- End to end tests could be added using a tool like Cypress
- Visual regression tests could be added using a tool such as Applitools or Chromatic
- Common styling values for fonts, spacing sizes and colours could be extracted into a Styled Components theme

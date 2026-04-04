---
layout: post
title: "Game Ratings"
---
When designing the game‑rating model, I wrestled with how much control to give users. Some input methods are highly transparent — sliders, percentage allocations, or numeric weights — but they become cumbersome when dozens of variables are involved. Others are simpler — toggles or high/medium/low selectors — yet obscure how each choice affects the underlying formula.

I settled on a middle ground:
- Users allocate percent weightings across four major categories.
- Within each category, they choose high/medium/low importance for individual variables.
- Default values are provided for both category and variable weights, so casual users can skip configuration entirely.

#### Category 1: Game State
The most influential factor — how close the game is and how much time remains.
A third variable, game flow, captures dynamics like ties, lead changes, largest lead, and comeback potential.

#### Category 2: Matchup Quality
How good the matchup looks on paper: team strength, injury impact (measured by prior‑year VORP of injured players), total rest, and optionally offensive and defensive ratings.

#### Category 3: Matchup Context
Narrative and stylistic intrigue — rivalry status, style contrast, total star power (based on the NBA’s official star designation), and whether the game is nationally televised.

#### Category 4: Style of Play
How the teams actually play: diversity of play types, foul rate, pace, ball and player movement (both pace‑adjusted), egalitarian shot distribution, and the Lowe/Mahoney team ratings.

For most variables, a value is computed for each team and averaged across the matchup. All variables are normalized to a common scale, then weighted according to user input. Normalization required estimating the distribution for each variable — sometimes comparing a team’s season‑to‑date performance against all other teams, other times comparing a single game against historical distributions from prior seasons.

**Screenshot of ratings with dropdowns expanded:**
![Ratings](/projects/nba_scoreboard/images/ratings.png)

[Return to main NBA scoreboard page](/nba-scoreboard/)

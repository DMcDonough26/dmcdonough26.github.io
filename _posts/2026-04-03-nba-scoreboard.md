---
layout: post
title: "What's the Best Game on TV Right Now?"
---
## Summary

This streamlit app provides a real-time NBA dashboard that pulls live data from multiple sources and helps fans quickly identify the most watchable game on TV. Users can tune the game rating formula and dive into interactive visuals for any matchup.

## Background
This project started years ago, when I was in grad school and had just moved from New York to Chicago. I bought League Pass so I could keep up with the Knicks, and most nights I’d get home from class, open my laptop to do a little work, and want to throw a game on in the background.

The problem was that the NBA hadn’t staggered tipoff times enough to make full-league viewing easy. The east coast games were closing, the west coast games were tipping off, and I was often left wondering: out of all of these games, **what’s the best game on TV right now?**

Further complicating things was that the answer was always changing, and the NBA had not yet created a RedZone-style product to automatically plug the viewer into the most exciting live action.

Initially this began as a small project to learn web scraping, but over time I wanted this to evolve as an analytics project (data pipeline, UI) and also as a data product. I wanted to be able to let the user provide input into how games are rated, and I wanted to offer what-to-watch “tasting notes” to direct users to the subtle game-within-the-game that might be happening for any matchup they are dropping into.

This version of the project is the evolution of that original idea: a real time dashboard that monitors that night’s slate for you, highlights the most watchable game, and gives you context that enhances the viewing experience.

## Data Pipeline

The app brings together live NBA data, advanced metrics, injuries, rivalries, team logos, and external rankings into a single unified dataset that updates throughout the night. A lightweight cleaning and normalization layer makes all these sources interoperable and ready for the game‑rating model.

[Click here to check out the pipeline deep dive](/projects/nba_scoreboard/pipeline/)

## Game Ratings

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





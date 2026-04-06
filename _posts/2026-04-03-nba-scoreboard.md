---
layout: post
title: "What's the Best Game on TV Right Now?"
permalink: /nba-scoreboard/
---
## Summary

This streamlit app provides a real-time NBA dashboard that pulls live data from multiple sources and helps fans quickly identify the most watchable game on TV. Users can tune the game rating formula and dive into interactive visuals for any matchup.

<img class="zoomable" src="/projects/nba_scoreboard/images/nba_scoreboard_overview.png" alt="Scoreboard Preview">

## Background
This project started years ago, when I was in grad school and had just moved from New York to Chicago. I bought League Pass so I could keep up with the Knicks, and most nights I’d get home from class, open my laptop to do a little work, and want to throw a game on in the background.

The problem was that the NBA hadn’t staggered tipoff times enough to make full-league viewing easy. The east coast games were closing, the west coast games were tipping off, and I was often left wondering: out of all of these games, **what’s the best game on TV right now?**

Further complicating things was that the answer was always changing, and the NBA had not yet created a RedZone-style product to automatically plug the viewer into the most exciting live action.

Initially this began as a small project to learn web scraping, but over time I wanted this to evolve as both an analytics project (data pipeline, UI) and a data product. I wanted to allow the user to provide input on game ratings, and wanted to provide context on style contrasts to illuminate the subtle game-within-the-game that might be happening in any given matchup.

This version of the project is the evolution of that original idea: a real-time dashboard that monitors the scoreboard for you, recommends the best game based on what you love about the league, and gives you context that enhances the viewing experience.

## Data Pipeline

The app brings together live NBA data, advanced metrics, injuries, rivalries, team logos, and external rankings into a single unified dataset that updates throughout the night. A lightweight cleaning and normalization layer makes all these sources interoperable and ready for the game‑rating model.

![Data Pipeline](/projects/nba_scoreboard/images/data pipeline.png)

[Click here to learn more about the pipeline](/projects/nba_scoreboard/pipeline/)

## Game Ratings

The app scores each matchup using a customizable formula that blends game state, matchup quality, narrative context, and style of play. Users control the weighting across these four categories, while the app handles normalization and variable scaling behind the scenes to keep everything comparable.

<img class="zoomable" src="/projects/nba_scoreboard/images/ratings.png" alt="Game Ratings">

[Click here to learn more about the ratings](/projects/nba_scoreboard/ratings/)

## Dashboard Visuals
There are two primary visuals on the dashboard: the scoreboard and the matchup charts.
The scoreboard organizes live, upcoming, and completed games and surfaces information needed to decide whether a matchup is worth watching and how to watch.
For the charts section, after the user select both a game and a side of the ball (e.g., Team A’s offense vs. team B’s defense), four interactive visuals bring context to the game across Dean Oliver’s four factors, style of play, play types, and shot locations.

<img class="zoomable" src="/projects/nba_scoreboard/images/four factors.png" alt="Four Factors">

[Click here to learn more about the visuals](/projects/nba_scoreboard/visuals/)


<script src="/assets/js/zoom.js"></script>




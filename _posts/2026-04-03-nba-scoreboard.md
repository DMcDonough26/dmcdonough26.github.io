---
layout: post
title: "What's the Best Game on TV Right Now?"
permalink: /nba-scoreboard/
---
## Summary

This streamlit app provides a real-time NBA dashboard that pulls live data from multiple sources and helps fans quickly identify the most watchable game on TV. Users can tune the game rating formula and dive into interactive visuals for any matchup.

Check out the live app here: [nbawatch.streamlit.app](https://nbawatch.streamlit.app) <br>
And the GitHub repo here: [nba_scoreboard_2026](https://github.com/DMcDonough26/nba_scoreboard_2026)

#### Screenshot of Scoreboard

<img class="zoomable" src="/projects/nba_scoreboard/images/nba_scoreboard_overview.png" alt="Scoreboard Preview">

#### Screenshot of Play Type Chart

<img class="zoomable" src="/projects/nba_scoreboard/images/play types.png" alt="Play Types Miami">

## Background
This project started years ago, when I was in grad school and had just moved from New York to Chicago. I bought League Pass so I could keep up with the Knicks, and most nights I’d get home from class, open my laptop to do a little work, and want to throw a game on in the background.

The problem was that the NBA hadn’t staggered tipoff times enough to make full-league viewing easy. The east coast games were closing, the west coast games were tipping off, and I was often left wondering: out of all of these games, **what’s the best game on TV right now?**

Further complicating things was that the answer was always changing, and the NBA had not yet created a RedZone-style product to automatically plug the viewer into the most exciting live action.

Initially this began as a small project to learn web scraping, but over time I wanted this to evolve as both an analytics project (data pipeline, UI) and a data product. I wanted to allow the user to provide input on game ratings, and wanted to provide context on style contrasts to illuminate the subtle game-within-the-game that might be happening in any given matchup.

This version of the project is the evolution of that original idea: a real-time dashboard that monitors the scoreboard for you, recommends the best game based on what *you* love about the league, and provides context that enhances the viewing experience.

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

## Architecture
The app is structured to feel fast and responsive while avoiding unnecessary API calls. Rating‑related UI elements render first so caching can begin immediately, and a refresh button clears only the pieces that need updating (timestamp, live scoreboard, injury report). After the initial boot‑up, data is fetched once, cached, and reused across the scoreboard and chart tabs for a clean, predictable execution flow.

Once the app is deployed, this section will expand to cover the deployment architecture and performance considerations.

## Learnings

#### 1. Working with the NBA API

While I’ve used the NBA API before, this project gave me a clearer understanding of its rate limits, data elements, and how information is organized across player, team, and game-level endpoints.

#### 2. Building an App in Streamlit

Before this project, I assumed building anything browser-based (Flask, Django) required a heavy lift. Streamlit changed that. It took time to understand its execution model — especially that the entire script reruns on every UI interaction — but once I wrapped my head around that and leaned into caching, it became a powerful, lightweight way to build interactive apps that I can now use on future projects.

#### 3. Using AI as a Development Partner

This was my first time using AI throughout a full code project, and it proved to be a valuable development partner. It helped with quick syntax lookups, guidance in unfamiliar areas (streamlit, GitHub pages), and occasional tutoring when docs fell short.

I didn’t delegate the entire project and edit the results. Instead, I wanted to remain in control of the architecture and decisions but leverage AI to help speed up learning and unblock me when needed. At times this saved hours, while at other points the traditional path may have been faster, but this experience gave me better appreciation for how and where AI can be most helpful.

#### 4. Standing Up a Site with GitHub Pages

I don’t have a background in web development, so GitHub Pages was an appealing way to publish a site without needing to build a front end from scratch. Relying on Markdown and a lightweight theme let me focus on content rather than HTML/CSS. I’m still interested in improving the site’s appearance and learning more about front‑end development over time, but GitHub Pages made it possible to get something functional online quickly — similar to how Streamlit accelerated app development.

## Next Steps

This project opened up a number of exciting directions to continue building, refining, and expanding the app. Several enhancements are already on the roadmap:
### 1. Deploying the App on Streamlit

The next major milestone is deploying the app so it can be easily accessed by other users. Once deployed, I’ll document the hosting architecture, code modifications, and additional learnings through this process.

### 2. Enhancing the Website

The GitHub Pages site will continue to evolve — improving layout, navigation, and visual polish, and adding more interactive elements to better showcase the app and its underlying analysis.

### 3. Adding a Rotation Visualization

I plan to incorporate a past project that visualizes NBA rotations. Integrating this as an additional chart will give users a clearer sense of substitution patterns, lineup stability, and how teams manage minutes across game flow, particularly for teams they are not watching regularly.

### 4. Reviving Player Clustering & Network Analysis

Another future addition is refreshing earlier work on clustering players using tracking data and visualizing those relationships through network analysis. The goal would be to quickly orient users to the roles and relationships that may take time to understand. It’s almost like the office politics of an NBA offense.

### 5. Expanding Player-Level Data

Most of the current dashboard operates at the team level. Incorporating more analysis and visuals at the player level feels like an unexplored opportunity. I want to let feature enhancements be organic though, so time will tell the best way to add additional player-level information that genuinely enhances the current product.

### 6. Estimating Real Time Remaining Game Duration

A future enhancement to the scoreboard is a predictive model that estimates how much real time is left in a game based on game state (score margin, pace, foul situation, timeouts, etc.). This would be an additional data point to help users decide whether a game is worth tuning into live.

### 7. Waterfall Attribution of Score Margin

This chart would leverage live box score data to decompose the lead into the four factors in a sequential manner. It would help the user understand why a particular team is ahead: is it the quantity of scoring chances (enabled by not turning the ball over and getting offensive rebounds) or is the quality of those chances (by how often they get to the line and how efficiently they score from the field)?

## Acknowledegments

To be completed

<script src="/assets/js/zoom.js"></script>




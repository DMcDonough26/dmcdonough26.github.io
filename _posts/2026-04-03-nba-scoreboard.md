---
layout: post
title: "What's the Best NBA Game on TV Right Now?"
permalink: /nba-scoreboard/
---
## Summary

This Streamlit app provides a real-time NBA dashboard that pulls live data from multiple sources and helps fans quickly identify the most watchable game on TV. Users can tune the game-rating formula and dive into interactive visuals for any matchup.

Web app: [nbawatch.streamlit.app](https://nbawatch.streamlit.app) <br>
GitHub repo: [nba_scoreboard_2026](https://github.com/DMcDonough26/nba_scoreboard_2026)

#### Screenshot of Scoreboard

<img class="zoomable" src="/projects/nba_scoreboard/images/nba_scoreboard_overview.png" alt="Scoreboard Preview">

#### Screenshot of Play Type Chart

<img class="zoomable" src="/projects/nba_scoreboard/images/play types.png" alt="Play Types Miami">

## Background
This project started years ago, when I was in grad school and had just moved from New York to Chicago. I bought NBA League Pass so I could keep up with the Knicks, and most nights I’d get home from class, open my laptop to do a little work, and want to throw a game on in the background.

The problem was that the NBA hadn’t staggered tipoff times enough to make full-league viewing easy. The East Coast games were closing, the West Coast games were tipping off, and I was often left wondering: Out of all of these games, **what’s the best game on TV right now?**

Further complicating things was that the answer was always changing — and the NBA had not yet created an NFL RedZone-style product to automatically plug the viewer into the most exciting live action.

Initially this began as a small project to learn web scraping, but over time I wanted this to evolve as both an analytics project (data pipeline, UI) and a data product. I wanted to allow the user to provide input on game ratings, and wanted to provide context on style contrasts to illuminate the subtle game-within-the-game that might be happening in any given matchup.

This version of the project is the evolution of that original idea: A real-time dashboard that monitors the scoreboard for you, recommends the best game based on what *you* love about the league, and provides context that enhances the viewing experience.

## Data Pipeline

The app brings together live NBA data, advanced metrics, injuries, team logos, rivalries, and external rankings into a single unified dataset that updates throughout the night. A lightweight cleaning and normalization layer makes all these sources interoperable and ready for the game‑rating model.

![Data Pipeline](/projects/nba_scoreboard/images/data pipeline.png)

[Click here to learn more about the pipeline.](/projects/nba_scoreboard/pipeline/)

## Game Ratings

The app scores each matchup using a customizable formula that blends game state, matchup quality, narrative context, and style of play. Users control the weighting across these four categories, while the app handles normalization and variable scaling behind the scenes to keep everything comparable.

<img class="zoomable" src="/projects/nba_scoreboard/images/ratings.png" alt="Game Ratings">

[Click here to learn more about the ratings.](/projects/nba_scoreboard/ratings/)

## Dashboard Visuals
There are two primary visuals on the dashboard: The scoreboard and the matchup charts.
The scoreboard organizes live, upcoming, and completed games and surfaces information needed to decide whether a matchup is worth watching and how to watch.
For the charts section, after the user selects both a game and a side of the ball (e.g., the Nuggets' offense vs. the Spurs' defense), four interactive visuals bring context to the game across [Dean Oliver’s four factors (as explained by Ben Falk)](https://cleaningtheglass.com/stats/guide/league_four_factors), style of play, play types, and shot locations.

<img class="zoomable" src="/projects/nba_scoreboard/images/four factors.png" alt="Four Factors">

[Click here to learn more about the visuals.](/projects/nba_scoreboard/visuals/)

## Architecture
The app architecture prioritizes speed and stability: UI renders first, data is cached efficiently, and refreshes update only what’s needed for a seamless live experience.

![Architecture](/projects/nba_scoreboard/images/architecture.png)

[Click here to learn more about the architecture.](/projects/nba_scoreboard/architecture/)


## Learnings

#### 1. Working with the NBA API

While I’ve used the NBA API before, this project gave me a clearer understanding of its rate limits, data elements, and how information is organized across player, team, and game-level endpoints.

#### 2. Building an App in Streamlit

Before this project, I assumed building anything browser-based (Flask, Django) required a heavy lift. Streamlit changed that. It took time to understand its execution model — especially that the entire script reruns on every UI interaction — but once I wrapped my head around that and leaned into caching, it became a powerful, lightweight way to build interactive apps that I can now use on future projects.

#### 3. Using AI as a Development Partner

This was my first time using AI throughout a full code project, and it proved to be a valuable development partner. It helped with quick syntax lookups, guidance in unfamiliar areas (Streamlit, GitHub pages), and occasional tutoring when docs fell short.

I didn’t delegate the entire project and edit the results. Instead, I wanted to remain in control of the architecture and decisions, but leverage AI to help speed up learning and unblock obstacles. At times, this saved hours, while at other points the traditional path may have been faster, but overall this experience gave me better appreciation for how and where AI can be most helpful.

#### 4. Standing Up a Site with GitHub Pages

I don’t have a background in web development, so GitHub Pages was an appealing way to publish a site without needing to build a front end from scratch. Relying on Markdown and a lightweight theme let me focus on content rather than HTML/CSS. I’m still interested in improving the site’s appearance and learning more about front‑end development, but GitHub Pages made it possible to get something functional online quickly — similar to how Streamlit accelerated app development.

## Next Steps

This project opened up a number of exciting directions to continue building, refining, and expanding the app. Several enhancements are already on the roadmap:
#### 1. Enhancing the Website

I will continue to evolve the GitHub Pages site — improving layout, navigation, and visual polish, and adding more interactive elements to better showcase the app and its underlying analysis.

#### 2. Adding a Rotation Visualization

I plan to incorporate a past project that visualizes NBA rotations. Integrating this as an additional chart will give users a clearer sense of substitution patterns, lineup stability, and how teams manage minutes across game flow, which will be particularly helpful for teams they don’t watch regularly.

#### 3. Reviving Player Clustering & Network Analysis

Another future addition is refreshing earlier work on clustering players using tracking data and visualizing those relationships through network analysis. The goal would be to quickly orient users to the roles and relationships that may take time to understand. It’s almost like the office politics of an NBA offense.

#### 4. Estimating Real Time Remaining Game Duration

We've all turned on a game *near* the end and thought (or been asked by our spouses): "How much longer is this *really* going to take?" A future enhancement to the scoreboard would be a predictive model that estimates how much real time is left in a game based on game state (score margin, pace, foul situation, timeouts, etc.). This would be an additional data point to help users decide whether a game is worth tuning into live.

#### 5. Win Probabilities

Similar to the time-remaining feature, a live win probability for each game (either scraped or built from a model) would add context to the game selection decision.

#### 6. Waterfall Attribution of Score Margin

This chart would leverage live-box-score data to decompose the lead into the four factors in a sequential manner. It would help the user understand why a particular team is ahead: Is it the quantity of scoring chances (enabled by not turning the ball over and getting offensive rebounds) or is it the quality of those chances (enabled by how often they get to the line and how efficiently they score from the field)?

Perhaps this could even have a pre-tipoff version as well, or one that visualizes how teams are performing relative to expectation in these areas (building on the current four factors chart).

#### 7. Expanding Player-Level Data

Most of the current dashboard operates at the team level. Incorporating more analysis and visuals at the player level feels like an unexplored opportunity. I want to let feature enhancements be organic though, so time will tell the best way to add additional player-level information that genuinely enhances the current product.

## Acknowledgements

This project was influenced by a number of people and resources I’ve learned from over the years. I’m grateful to my teammate George Kolokotronis who served as a mentor and sounding board throughout development. I also want to acknowledge [Swar Patel](https://github.com/swar) for building the nba_api package, Basketball Reference for their indispensable data, SportsLogos.net for maintaining the logo library used here, and [Remy Lambert](https://www.reddit.com/r/nba/comments/11fe4za/oc_polling_the_nba_subreddits_2023_results/) for his work in compiling the rivalry data set. My thinking about basketball has been influenced by [Zach Lowe](https://www.theringer.com/creator/zach-lowe), [Ben Falk](https://cleaningtheglass.com/about/), [Todd Whitehead](https://x.com/CrumpledJumper), and [Nate Silver](https://x.com/NateSilver538), whose work has shaped how I understand the game and how I think about presenting it.

<script src="/assets/js/zoom.js"></script>




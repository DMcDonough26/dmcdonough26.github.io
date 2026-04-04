---
layout: post
title: "What's the Best Game on TV Right Now?"
---
## Summary

This streamlit app provides a real-time NBA dashboard that pulls live data from multiple sources and helps fans quickly identify the most watchable game on TV. Users can tune the game rating formula and dive into interactive visuals for any matchup.

## Background
This project started years ago, when I was in grad school and had just moved from New York to Chicago. I bought League Pass so I could keep up with the Knicks, and most nights I’d get home from class, open my laptop to do a little work, and want to throw a game on in the background.

The problem was that the NBA hadn’t staggered tipoff times enough to make full-league viewing easy. The east coast games were closing, the west coast games were tipping off, and I was often left wondering: out of all of these games, **what’s the best game on TV right now?**

Further complicating things was that the answer was always changing, and the NBA had not yet created a RedZone-style product to automatically plug the viewer into the most exciting live content.

Initially this began as a small project to teach myself web scraping, but over time I wanted this to evolve as an analytics project (data pipeline, UI) and also as a data product. I wanted to be able to let the user provide input into how games are rated, and I wanted to offer what-to-watch “tasting notes” to direct users to the game-within-the-game that might be happening for any matchup they are dropping into.

This version of the project is the evolution of that original idea: a real time dashboard that monitors that night’s slate for you, highlights the most watchable game, and gives you context that enhances the viewing experience.

## Data Pipeline

To support real‑time game ratings and matchup insights, the app pulls together data from a number of sources. I originally built this using web scraping, but eventually migrated to the NBA Stats API for reliability and structure. The current pipeline pulls from ten different endpoints across both live and static data, and layers in several external datasets to enrich the analysis.

Beyond the core NBA data, I also included: a [fan‑surveyed rivalry dataset from Reddit](https://www.reddit.com/r/nba/comments/11fe4za/oc_polling_the_nba_subreddits_2023_results/), Zach Lowe and Rob Mahoney’s League Pass rankings (transcribed from their podcast episode), [team logos from a sports media site](https://www.sportslogos.net/teams/list_by_league/6/National-Basketball-Association-Logos/NBA-Logos/), and injury reports, advanced metrics, and awards data from [Basketball Reference](https://www.basketball-reference.com/).

Because each source uses its own naming conventions, identifiers, and formats, the pipeline includes a set of translation dictionaries and lightweight cleaning steps (date formatting, text normalization, etc.) to make everything interoperable. From there, the data goes through a series of transformations: joins across sources, aggregations, pace adjustments, and normalization so that different metrics can be compared on the same scale.
The result is a unified dataset that updates continuously throughout the night and feeds both the game‑rating model and the interactive visuals in the app.






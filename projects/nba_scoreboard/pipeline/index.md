---
layout: page
title: "Data Pipeline"
---

To support real‑time game ratings and matchup insights, the app pulls together data from a number of sources. My first version of this project scraped scoreboard data off the web, but I’ve migrated over to the [NBA API package](https://github.com/swar/nba_api) — an amazing community‑maintained Python wrapper around the NBA’s murky internal API. It’s a great resource for fans: well‑structured, actively supported, and easier/more reliable than scraping HTML. The pipeline for this project pulls from ten different endpoints spanning live box scores, advanced stats, betting odds, and player‑tracking data (play types, shot locations, and movement‑based metrics).

Basketball Reference is also an important complementary source. It’s extremely rich, very scrapable, and has some data that the NBA API does not yet provide. I still rely on it for the daily injury report, and since I had already built a bridge between Basketball Reference and the NBA API, it made sense to consolidate additional player‑level data on advanced metrics and awards from there as well.

Beyond the core NBA data, the pipeline also includes a [fan‑surveyed rivalry dataset from Reddit](https://www.reddit.com/r/nba/comments/11fe4za/oc_polling_the_nba_subreddits_2023_results/), Zach Lowe and Rob Mahoney’s League Pass rankings (transcribed from their podcast), and [team logos from sportslogos.net](https://www.sportslogos.net/teams/list_by_league/6/National-Basketball-Association-Logos/NBA-Logos/).
Because each source uses its own naming conventions, identifiers, and formats, the pipeline includes a set of translation dictionaries and lightweight cleaning steps (date formatting, text normalization, etc.) to make everything interoperable. Once standardized, the data flows through a series of transformations — joins across sources, aggregations, pace adjustments, and normalization — so that different metrics can be merged together and compared on the same scale.

The pipeline is designed to be a considerate data consumer. I pull everything up front, recycle as much as possible, and cache aggressively given Streamlit’s auto-refresh architecture. Some NBA API endpoints can be slow, and the league does throttle requests, so avoiding unnecessary repulls is important both for performance and for staying within rate limits. I’ve added exception handling around the more fragile components (especially the odds API), and will likely expand this before deployment to ensure the app remains stable even when upstream data is spotty.

The result is a unified dataset that updates continuously throughout the night and feeds both the game‑rating model and the interactive visuals in the app.

![Data Pipeline](/projects/nba_scoreboard/images/data pipeline.png)
[Return to main NBA scoreboard page](/nba-scoreboard/)

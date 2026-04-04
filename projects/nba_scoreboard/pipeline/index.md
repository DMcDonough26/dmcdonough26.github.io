---
layout: page
title: "Data Pipeline"
---

To support real‑time game ratings and matchup insights, the app pulls together data from a number of sources. I originally built this using web scraping, but eventually migrated to the [NBA Stats API](https://github.com/swar/nba_api) for reliability and structure. The current pipeline pulls from ten different endpoints across both live and static data, and layers in several external datasets to enrich the analysis.

Beyond the core NBA data, I also included: a [fan‑surveyed rivalry dataset from Reddit](https://www.reddit.com/r/nba/comments/11fe4za/oc_polling_the_nba_subreddits_2023_results/), Zach Lowe and Rob Mahoney’s League Pass rankings (transcribed from their podcast episode), [team logos from a sports media site](https://www.sportslogos.net/teams/list_by_league/6/National-Basketball-Association-Logos/NBA-Logos/), and injury reports, advanced metrics, and awards data from [Basketball Reference](https://www.basketball-reference.com/).

Because each source uses its own naming conventions, identifiers, and formats, the pipeline includes a set of translation dictionaries and lightweight cleaning steps (date formatting, text normalization, etc.) to make everything interoperable. From there, the data goes through a series of transformations: joins across sources, aggregations, pace adjustments, and normalization so that different metrics can be compared on the same scale.
The result is a unified dataset that updates continuously throughout the night and feeds both the game‑rating model and the interactive visuals in the app.
![Data Pipeline](/projects/nba_scoreboard/images/data pipeline.png)

[Return to main NBA scoreboard page](../../../2024/04/03/nba-scoreboard/)


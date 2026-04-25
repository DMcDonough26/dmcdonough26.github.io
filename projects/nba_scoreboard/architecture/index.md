---
layout: page
title: "Architecture"
---

The app is structured to feel fast and responsive while avoiding unnecessary API calls. Rating-related UI elements render first so caching can begin immediately, and a refresh button clears only the pieces that need updating (timestamp, live scoreboard, injury report, odds). After the initial boot up, data is fetched once, cached, and reused across the scoreboard and chart tabs for a clean, predictable execution flow.

Building this architecture required solving several challenges that surfaced during deployment. Streamlit’s cache is global across users, which meant I needed to shorten the cache and auto refresh the app during live game play, to ensure that new visitors always receive fresh data. Additionally, I added a 30 second refresh cooldown to prevent users from spamming the API, and implemented exception handling for edge cases like days with no NBA games or partial upstream outages.

Running on Streamlit Cloud introduced its own constraints. Cloud IPs face stricter rate limits than local development, so the pipeline had to be more conservative with the timing of API calls. Timezone differences between my local machine (Central Time) and the cloud environment (UTC) also required explicit normalization to avoid mismatches in game day logic. Finally, dependency management became part of the architecture itself: Some packages needed to be pinned to specific versions for reproducibility, while others had to remain flexible to match Streamlit’s supported environment.

![Architecture](/projects/nba_scoreboard/images/architecture.png)
[Return to the main summary page.](/nba-scoreboard/)

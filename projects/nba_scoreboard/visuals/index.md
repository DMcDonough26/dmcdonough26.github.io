---
layout: page
title: "Dashboard Visuals"
---
#### Scoreboard
<img class="zoomable" src="/projects/nba_scoreboard/images/nba_scoreboard_overview.png" alt="Scoreboard Preview">

At its core, a scoreboard should be able to tell you, well, the score. Better yet, who is playing, what time it’s on, and where can you watch. A few other things are added to help the user decide whether to tune in: the game rating, whether the game is a rivalry, how good the teams are (expressed as how many games they are on-pace to win out of the full 82-game season), and which players have been ruled out of the game.

As a design choice, logos are used instead of team names, with heavy emphasis on millennial nostalgia and bringing back the fun logos we had in the 90s. Along these lines, the dashboard leverages the Spurs’ fiesta color palette, with the game ratings ranging from fuschia (worst) to teal (best) and the charts leverage orange for offense and gray for defense.

While streamlit is an incredily powerful tool for standing up an app like this quickly, it does have its constraints from a formatting standpoint, and some of the underwhelming aspects of the design (lack of centering of values and column headers, lack of background pictures) were an accepted tradeoff.

#### 1. Four Factors Lollipop Chart
<img class="zoomable" src="/projects/nba_scoreboard/images/four factors.png" alt="Four Factors">

After the user selects a game and a side of the ball, they can dive deeper on four areas of the game. The first chart gives a breakdown of Dean Oliver’s four factors: the four terminal outcomes of a basketball play (a turnover, a trip to the free throw line, a field goal attempt, or an offensive rebound) that together represent comprehensive determinants of success in a game (all else equal, if you’re ahead on any one of these you’re going to win the game).

The lollipop chart was chosen to make it easy to compare just the two teams in the matchup while retaining visual context for where each team sits relative to the rest of the league. Most interesting are the areas where both teams thrive (such as free throw rate in the example above). Denver and San Antonio are great teams and rely on getting/not giving up free throws respectively for their success. It’s impossible for both to maintain their usual high standard on free throws, so an interesting game-within-the-game is keeping an eye on who wins that battle.

#### 2. Style‑of‑Play Scatter / Beeswarm
<img class="zoomable" src="/projects/nba_scoreboard/images/style.png" alt="Style">

This chart illustrates the variables within the style category of the ratings with a visual similar to a bee swarm chart. The example above illustrates not just how fast Miami has been playing, but also how deliberately they have bucked the at times monotonous trend of spread pick and roll. Instead, they've revamped their offense, drawing inspiration form last season’s Memphis team, which focused on dribble-drive penetration, kickouts, and cuts. Play diversity is calculated as the sum of the squared differences of each team's frequency of running each play type compared to the league average frequency for that play type.

#### 3. Play Type Frequency & Efficiency
<img class="zoomable" src="/projects/nba_scoreboard/images/play types.png" alt="Play Types Miami">

The chart above carries over our example with Miami, and actually made me realize I needed to expand my Y-axis range for just how extreme Miami’s distaste for (and inefficiency with) the pick and roll has become. A play type at the center of this chart is run with league-average frequency and efficiency. Plays to the left are less frequent, and plays to the bottom are less efficient. For Miami, you can see them running ball screens less (handoff and pick and roll) and moving more towards that Memphis offense (iso and spotup).

The second chart below features the #1 offense of the Denver Nuggets. What jumps off the page is breadth of efficiency, which most prominently stems from playing through Jokic in the post whether he passes to a teammate (via handoff, split actions, or cuts) or puts the ball up himself.
<img class="zoomable" src="/projects/nba_scoreboard/images/play types nuggets.png" alt="Play Types Denver">

#### 4. Shot Location Distributions
<img class="zoomable" src="/projects/nba_scoreboard/images/shot chart.png" alt="Shot Chart">

Much of NBA defense comes down to influencing where opponents shoot, not just whether those shots go in. This chart highlights that chess match by separating shot frequency (left) from shot efficiency (right), giving a clearer view of both what offenses try to generate and what defenses try to take away.

In the example above, the Pelicans–Jazz matchup creates an interesting contrast. New Orleans leads the league in getting to the rim, while Utah is one of the best teams at preventing rim attempts. Even more unusual: the Pelicans are among the least efficient finishers at the rim, and the Jazz allow some of the highest efficiency on those same shots. That combination suggests a real stylistic tension — one worth watching to see whether the Pelicans can impose their preferred shot profile or whether the Jazz can steer them into less valuable looks.

Note: Offense is scaled so that #1 means you get the most of a shot type/are the most efficient at it. Defense is scaled so that #1 means you give up the least of a shot type and give up the lowest efficiency.

[Return to main NBA scoreboard page](/nba-scoreboard/)

<script src="/assets/js/zoom.js"></script>

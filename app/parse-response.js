const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl
  .on('line', line => processWeek(JSON.parse(line)));

function processWeek(week) {
  week.page
    .map(game => {
      return {
        home: {
          id: game.homeTeam.id,
          name: game.homeTeam.profileToken,
          customName: `${game.homeTeam.location} ${game.homeTeam.name}`,
          location: game.homeTeam.location,
          score: game.score.homeScore,
          scoreByPeriod: game.score.homeScoreByPeriod,
        },
        away: {
          id: game.awayTeam.id,
          name: game.awayTeam.profileToken,
          customName: `${game.awayTeam.location} ${game.awayTeam.name}`,
          location: game.awayTeam.location,
          score: game.score.awayScore,
          scoreByPeriod: game.score.awayScoreByPeriod,
        },
        meta: {
          neutral: game.isNeutralSite,
          id: game.id,
          date: game.utcDate,
        }
      }
    })
    .map(line => (console.log(line), line))
}
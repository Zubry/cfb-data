const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl
  .on('line', line => processWeek(JSON.parse(line)));

function processWeek(week) {
  console.log(week);
}
// An array of objects
let roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}
];
 
// Create a custom function to return players who made the team
function madeCut(player) {
  // return player.madeTeam == true;
  // A more concise way to express a boolean conditional
  return player.madeTeam;
}

// Call the custom function with filter()
let playersOnTeam = roster.filter(madeCut);

// Display the results
console.log(playersOnTeam);

// Determine how many players made the cut
let numberOfPlayers = playersOnTeam.length;

// Display the results
console.log(`${numberOfPlayers} players made the team.`);
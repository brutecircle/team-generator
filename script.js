// random team 
const team = [ "Talent", "Talen", "alen", "Tlen", "Ten", 
        "Tale", "Taln", "lent", "ant", "Talet" ,"john", "Sara", "Tom"];

// number of people in each team array / teams 

let numberOfPeopleInTeams = 3;
// randomize the team array 
let randomize = team.sort(() => Math.random() - 0.5);

function genArray(arr, count) {
    // initialize it to a new empty Array
  let newArray = [];
  for (i = 0; i < arr.length; i += count) {
      maxTeamMember = arr.slice(i, i + count);
      newArray.push(maxTeamMember);
    }
  return newArray;
}
let result = genArray(randomize, numberOfPeopleInTeams);
console.log(result); //team names 
console.log(result.length) //number of teams ge
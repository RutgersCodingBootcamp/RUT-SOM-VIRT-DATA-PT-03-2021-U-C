let theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

console.log(theStagesOfJS)

// Using the old school iterative way
let newArray = [];

for (let i = 0; i < theStagesOfJS.length; i++){
    newArray.push(`more ${theStagesOfJS[i]}`);
}
console.log(newArray);

// Using the forEach method
let newFEArray = [];

theStagesOfJS.forEach(function (item){
    newFEArray.push(`more ${item}`);
});
console.log(newFEArray);
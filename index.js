const superbowRecords = [
    {year: 2018, result: "W" },
    {year: 2019, result: "L"},
    {year: 2020, result: "L"},
    {year:2021, result:"W"},
]
//Above is the Array of objects 




function superbowlWin(resultsArray){ 
 let winnningResult = resultsArray.find(result => result.result == "W");

 return winnningResult ? winnningResult.year : undefined ;

}

let winningYear = superbowlWin(superbowlResults)
console.log(winningYear);


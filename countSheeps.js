// Function that count number of sheep which are present with true means present
const countSheeps=(sheep)=> sheep.reduce((accum,current)=>current==true?accum+=1: accum,0)

console.log(countSheeps([true,null,undefined,true,false])); // Output: 2

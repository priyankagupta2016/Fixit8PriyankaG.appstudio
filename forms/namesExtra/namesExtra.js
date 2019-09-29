// 2. Extra XP Option B: Print out each o f the  names using a for loop to cycle through the array starting at the end and moving to the front
let name = ["Bob", "Janet", "Tom", "Bob", "Randy", "Elizabeth", "Kim", "Nancy"]
function rName(name){
  name.reverse()
  return name
  }
  let rname = rName(name)
  
for (i=0; i<rname.length; i++)
  console.log(rname[1])
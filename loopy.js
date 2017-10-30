
/*
var num = 100;
for (i = num; i <= 200; i++){
  if (i % 3 === 0 && i % 4 === 0) {
    console.log("LoopyLighthouse");
  }
  else if (i % 3 === 0){
    console.log("Loopy");
  } else if (i % 4 === 0){
    console.log("Lighthouse");
  } else
  console.log(i);
}
*/


function loopyLighthouse(range, multiples, words) {
  var i;
  for (i =  arguments[0][0]; i <= arguments[0][1]; i++) {
    if (i % 2 === 0 && i % 5 === 0){
      console.log(arguments[2][0] + arguments[2][1]);
    }
    else if (i % 2 === 0) {
      console.log(arguments[2][0]);
    } else if (i % 5 === 0) {
      console.log(arguments[2][1]);
    } else {
      console.log(i);
    }
  }
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

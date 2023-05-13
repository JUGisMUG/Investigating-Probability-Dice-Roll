const arr = ["tails", "head"];

function idk(j) {
  let hh = 0;
  let tt = 0;
  let th = 0;

  for (let i = 0; i < j; i++) {
    let str1 = arr[Math.floor(Math.random() * 2)];
    let str2 = arr[Math.floor(Math.random() * 2)];
    if (str1 == str2) {
      if (str1 == "head") {
        hh++;
      } else {
        tt++;
      }
    } else {
      th++;
    }
  }
  return { tt, hh, th }
}

console.log(idk(100));
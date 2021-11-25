var fs = require("fs"); //fs는 파일 입출력해주는 아이
var data = fs.readFileSync('input.txt'); //데이터의 파일을 읽는거

console.log(data.toString());
console.log("Program finished");
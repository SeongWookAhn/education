var fs = require("fs");

fs.readFile('input.txt', function(error, data) { //이게 비동기 콜백이고 첫번째 파라미터는 항상 에러  그다음은 읽은 데이터
    if(error) return console.error(err); //if문 한줄로 쓸 수 있음

    console.log(data.toString());
});

console.log("Finished program");
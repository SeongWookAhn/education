function gugudan() {
  let res = '';
  for (i = 2; i <= 9; i++) {
      console.log(`${i}단`);
      for (j = 1; j <= 9; j++) {
          if(j > 1) {
              res +='  '
          }
          console.log(`${i}*${j} = ${(i*j)} `);
          res += (`${i}*${j} = ${(i*j)}`);
      }
      res += '\n'
  }
  console.log(res);
}

gugudan();
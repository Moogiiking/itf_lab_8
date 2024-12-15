const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const baishingiin_dawhar = 9;  
const niit_orts = 3; 
const dawhriin_ailuud = 4; 
const ortsnii_ailuud = dawhriin_ailuud * baishingiin_dawhar; 

function calculateApartmentDetails(toot) {
  const tootiin_orts = Math.ceil(toot / ortsnii_ailuud);
  const tootiin_bairlal = toot - (ortsnii_ailuud * (tootiin_orts - 1));
  const tootiin_dawhar = Math.ceil(tootiin_bairlal / dawhriin_ailuud);
  const haalga = tootiin_bairlal % dawhriin_ailuud === 0 ? dawhriin_ailuud : tootiin_bairlal % dawhriin_ailuud;

  return { orts: tootiin_orts, dawhar: tootiin_dawhar, haalga: haalga };
}

rl.question('Тоотоо оруулна уу: ', (too) => {
  const toot = parseInt(too);

  const { orts, dawhar, haalga } = calculateApartmentDetails(toot);

  console.log(`${toot} тоот - ${orts} орцны ${dawhar} давхрын ${haalga}-р хаалга`);

  rl.close();
});

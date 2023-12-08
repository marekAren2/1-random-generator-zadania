

function getRandomInt(min, max) {
  // od 1 -100
// return Math.floor(Math.random()*100) +1;
// od 0-100
// return Math.floor(Math.random()*101);

  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInt(0, characters.length - 1);
    result += characters.charAt(randomIndex);
  }
  return result;
}
// test zapisu function ES5 a strzałkowa ES6 w node moduły test: OK
// function generateRandomIntArray(min, max, length) {
const generateRandomIntArray = (min, max, length) => {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomInt(min, max));
  }
  return randomArray;
}
// w randomGenerator export
module.exports = {
  getRandomInt,
  generateRandomString,
  generateRandomIntArray,
};

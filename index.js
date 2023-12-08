// import w index.js
const randomGenerator = require('./randomGenerator');

// Przykłady użycia funkcji
const randomInt = randomGenerator.getRandomInt(1, 100);
console.log('Losowa liczba całkowita:', randomInt);

const randomString = randomGenerator.generateRandomString(4);
console.log('Losowy ciąg znaków:', randomString);

const randomIntArray = randomGenerator.generateRandomIntArray(1, 100, 3);
console.log('Tablica losowych liczb całkowitych:', randomIntArray);


/* Opis

Wykorzystując wiedzę z Node.js i JavaScript stwórz moduł, który będzie miał następujące funkcjonalności:

1. Funkcję generującą losową liczbę całkowitą z wybranego przedziału - minimalna i maksymalna wartość przedziału ma być przekazywana jako parametry przy wywołaniu funkcji
2. Funkcję generującą losowy ciąg znaków alfanumerycznych (małe litery, wielkie litery, cyfry) - jako parametr funkcji należy podać ilość znaków z jakiego ma się składać wygenerowany napis
3. Funkcję generującą tablicę losowych liczb całkowitych - minimalna i maksymalna wartość przedziału z jakiego mają być liczby oraz długość tablicy mają być przekazywane jako parametry przy wywołaniu funkcji

Importuj moduł do pliku index.js i wywołaj wszystkie funkcje.

Podeślij linka do repozytorium Twojego projektu na GitHub! */




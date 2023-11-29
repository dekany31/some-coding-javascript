//3 bankszámla változó objektum

const account_1 = {
  id: "1",
  name: "John Doe",
  balance: "100000",
  transactions: [
    {
      amount: "5000",
      isSucsessful: true,
      type: "withdraw",
      date: "10-29-2021"
    },
    {
      amount: "20000",
      isSucsessful: true,
      type: "deposit",
      date: "10-27-2021"
    }
  ]
};

const account_2 = {
  id: "2",
  name: "Jane Black",
  balance: "300000",
  transactions: [
    {
      amount: "30000",
      isSucsessful: false,
      type: "withdraw",
      date: "10-29-2021"
    },
    {
      amount: "120000",
      isSucsessful: true,
      type: "deposit",
      date: "10-20-2021"
    },
    {
      amount: "25000",
      isSucsessful: true,
      type: "withdraw",
      date: "10-15-2021"
    }
  ]
};

const account_3 = {
  id: "3",
  name: "Tom Johns",
  balance: "3000000",
  transactions: [
    {
      amount: "100000",
      isSucsessful: false,
      type: "withdraw",
      date: "10-29-2021"
    },
    {
      amount: "7500000",
      isSucsessful: true,
      type: "deposit",
      date: "10-25-2021"
    },
    {
      amount: "280000",
      isSucsessful: true,
      type: "deposit",
      date: "10-09-2021"
    },
    {
      amount: "45000",
      isSucsessful: false,
      type: "deposit",
      date: "10-01-2021"
    },
    {
      amount: "500000",
      isSucsessful: true,
      type: "deposit",
      date: "10-01-2021"
    }
  ]
};

//a függvény keresi a legnagyobb betét,deposit dátumát az egyes bankszámlákban
function getDateOfHighestDeposit(account) {//paramétere account, ezt megadjuk a meghívásánál
  let dateOfHighest = null;
  let amountOfHighest = 0;

  if (account && account.transactions) {//ha léteznek
    for (const transaction of account.transactions) {//végigmegy a tranzakciókon
      //console.log(account.transactions);
      let isRelevant = transaction.isSucsessful && transaction.type === "deposit";//keresési feltételek

      if (isRelevant && transaction.amount > amountOfHighest) {
        amountOfHighest = transaction.amount;//megkeresi, kiválasztja a legnagyobbat
        dateOfHighest = transaction.date;
      }

    }
    return dateOfHighest;//a függvény visszaadja a dátumot
  }
}
//függvénymeghívások, kiírásuk a dátumoknak
console.log(getDateOfHighestDeposit(account_1));
console.log("account_2" + getDateOfHighestDeposit(account_2));
console.log(getDateOfHighestDeposit(account_3));

//100 doors - 100-szor végigmegyünk, nyitogatjuk-zárjuk, 1.-mindent, 2.-minden másodikat, 3.-minden harmadikat, 100.-csak az utolsót

let doors = [];//üres tömb

//létrehozzuk az ajtókat a tömbben, mind csukva
for (let i = 0; i <= 100; i++) {
  doors.push({ isOpen: false, doorNumber: i });
};

for (let i = 1; i <= 100; i++) {//0-val nem oszthatunk
  for (const door of doors) {//végig megyünk az ajtókon

    let shouldToggle = door.doorNumber % i === 0;//mod operátor(a maradék 0) körökben kiválasztott ajtók pl. minden második, minden ötödik stb.

    if (shouldToggle) {
      door.isOpen = !door.isOpen; //megváltozik a nyitás állapota
    }
  }
};

for (let i = 0; i < doors.length; i++) {//végigmegyünk a tömbbön
  if (doors[i].isOpen) {
    console.log(doors[i].doorNumber); //kiiratjuk csak a nyitottak számát
  }
};

//Word filter
const sentence1 = "Holy Moly, this is frickin good!";
const sentence2 = "My Honey, did you mean that?";
const sentence3 = "Everyone saw this super movie yesterday.";
const sentence4 = "Today’s task was difficult for many people.";
const sentence5 = "Whole team was programing all night.";

function cleanse(sentence, words) {
  let wordsOfSentence = sentence.split(/[“,.:;-?!’+" "]/,); //elválasztja ezek mentén is
  let result = "";

  console.log("wordsOfSentence " + wordsOfSentence);

  for (const wordOfSentence of wordsOfSentence) {
    let isCleanWord = true;

    for (const word of words) {
      if (wordOfSentence.toUpperCase() === word.toUpperCase()) {
        isCleanWord = false;
      }
    };
    if (isCleanWord) {
      result += wordOfSentence + " ";
    } else {
      result += "****" + " ";
    }
  }
  return result;
};

console.log(cleanse(sentence1, ['moly', 'frickin']));
console.log(cleanse(sentence2, ['honey', 'that', 'you']));
console.log(cleanse(sentence3, ['super']));
console.log(cleanse(sentence4, ['was', 'people']));


const friends = ["плаття", "джинси", "футболка", "спідниця"];
let string = "";
for (let friend of friends) {
  string += friend + ",";
}
console.log(string);
const striing = friends.join(",");
console.log(striing);

const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];

const cardToRemowe = "Карточка-3";
cards.splice(1, 2);
console.log(cards);

const cardToInsert = "Карточка-6";
cards.splice(3, 0, "карточка 6", "карточка 7");
console.log(cards);

const cardToUpdate = "Карточка 4";
cards.splice(5, 2);
console.log(cards);

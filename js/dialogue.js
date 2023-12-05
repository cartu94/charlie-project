const textDescription = document.getElementById("text-desc");
const optionButtons = document.getElementById("choice-container");


window.showTextNode = function (textNodeIndex) {
  console.log(textNodeIndex);
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  textDescription.innerText = textNode.text;
  optionButtons.innerHTML = "";
  textNode.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option.text;
    button.addEventListener("click", () => showTextNode(option.nextText));
    optionButtons.appendChild(button);
  });
}

const textNodes = [
  {
    id: 1,
    text: "testo spazio 1",
    options: [
      {
        text: "option 1 play",
        nextText: 2,
      },
      {
        text: "Leave the game",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "test azione 2",
    options: [
      {
        text: "option azione 1 ",
        nextText: 3,
      },
      {
        text: " option azione 2",
        nextText: 3,
      },
      {
        text: "torna capo",
        nextText: 3,
      },
    ],
  },
  {
    id: 3,
    text: "testo azione 3",
    options: [
      {
        text: "option azione 1",
        nextText: 4,
      },
      {
        text: "option azione 2",
        nextText: 5,
      },
      {
        text: "option azione 3",
        nextText: 2,
      },
    ],
  },
];

export default showTextNode;
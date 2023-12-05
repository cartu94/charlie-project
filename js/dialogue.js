const textDescription = document.getElementById("text-desc");
const optionButtons = document.getElementById("choice-container");

window.showTextNode = function (textNodeIndex, act) {
  console.log(textNodeIndex);
  const textNode = act.find((textNode) => textNode.id === textNodeIndex);
  textDescription.innerText = textNode.text;
  optionButtons.innerHTML = "";
  console.log(act.options)
  textNode.options.forEach((option) => {
    if(option.type === "button") {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () => window.showTextNode(option.nextText, act));
      optionButtons.appendChild(button);
    } else if(option.type === "quiz") {
      const quiz = document.createElement("input");
      quiz.type = "text";
      quiz.id = "quiz";
      quiz.placeholder = "Risposta";
      optionButtons.appendChild(quiz);
      const button = document.createElement("button");
      button.innerText = "Invia";
      button.addEventListener("click", () => {
        const quizValue = document.getElementById("quiz").value;
        if(quizValue.toLowerCase() === option.answer) {
          window.showTextNode(option.nextText, act);
        } else {
          const error = document.createElement("p");
          error.innerText = "Risposta errata, riprova";
          optionButtons.appendChild(error);
        }
      });
      optionButtons.appendChild(button);
    }
  });
};

export const act1 = [
  {
    id: 1,
    text: "Il tuo viaggio inizia nel Bosco Antico, mentre lo attraversi scopri che i suoi guardiani sono creature magiche legate alla natura stessa. Devi guadagnarti il loro rispetto attraverso prove di saggezza. Lungo il percorso, incontri una guida magica, un anziano druido che conosce la leggenda del Cuore di Lumaria. Accanto al druido noti una pergamena con sopra scritto \"Ferula\", potrebbe servirti in futuro quindi te lo appunti. Mentre ti interroghi sul significato di cio che è scritto sulla pergamena, egli ti offre consigli e incarichi per dimostrare il tuo impegno verso la magia della natura. L'anziano druido ti guida verso tre diverse strade da percorrere per arrivare al primo indizio che ti permettera' di trovare il magico artefatto del Cuore Di Lumaria:",
    options: [
      {
        type: "button",
        text: "Strada 1",
        nextText: 2,
      },
      {
        type: "button",
        text: "Strada 2",
        nextText: 3,
      },
      {
        type: "button",
        text: "Strada 3",
        nextText: 4,
      },
    ],
  },
  {
    id: 2,
    text: "Imboccando la prima strada, incontri una tribù di creature magiche che definiscono il bosco la loro casa. Ti offrono una prospettiva unica sulla magia della natura e ti chiedono di dimostrare la tua buona volontà risolvendo una disputa tra di loro. La tua scelta influenzerà la tua reputazione tra queste creature e potrebbe rivelare indizi cruciali sulla posizione del Cuore di Lumaria.  Le creature magiche ti pongono un indovinello per testare la tua saggezza, solo rispondendo in modo corretto si fideranno del tuo giudizio:\n\n\"Ha un letto ma non dorme, ha una bocca ma non mangia. Cos'è?\"",
    options: [
      {
        type: "quiz",
        answer: "fiume",
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
export const act2 = [
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
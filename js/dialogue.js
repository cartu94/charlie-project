import router from "./router.js";
const textDescription = document.getElementById("text-desc");
const optionButtons = document.getElementById("choice-container");

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const tribeIndex = random(0, 3);
const tribe = [
  "tribù del fuoco",
  "tribù dell'acqua",
  "tribù della terra",
  "tribù del vento",
];
window.showTextNode = function (textNodeIndex, act) {
  console.log(typeof textNodeIndex);
  if (textNodeIndex.toString().includes("route")) {
    router(textNodeIndex.split(" ")[1]);
  }
  const textNode = act.find((textNode) => textNode.id === textNodeIndex);
  textDescription.innerText = textNode.text;
  optionButtons.innerHTML = "";
  console.log(act.options);
  textNode.options.forEach((option) => {
    if (option.type === "button") {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.addEventListener("click", () =>
        window.showTextNode(option.nextText, act)
      );
      optionButtons.appendChild(button);
    } else if (option.type === "quiz") {
      const quiz = document.createElement("input");
      quiz.type = "text";
      quiz.id = "quiz";
      quiz.placeholder = "Risposta";
      optionButtons.appendChild(quiz);
      const button = document.createElement("button");
      button.innerText = "Invia";
      button.addEventListener("click", () => {
        const quizValue = document.getElementById("quiz").value;
        if (quizValue.toLowerCase() === option.answer) {
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
let numTrial = 0;
export const act1 = [
  {
    id: 1,
    text: "Il tuo viaggio inizia nel Bosco Antico, mentre lo attraversi scopri che i suoi guardiani sono creature magiche legate alla natura stessa. Devi guadagnarti il loro rispetto attraverso prove di saggezza. Lungo il percorso, incontri una guida magica, un anziano druido che conosce la leggenda del Cuore di Lumaria. Accanto al druido noti una pergamena con sopra scritto \"Ferula\", potrebbe servirti in futuro quindi te lo appunti. Mentre ti interroghi sul significato di cio che è scritto sulla pergamena, egli ti offre consigli e incarichi per dimostrare il tuo impegno verso la magia della natura. L'anziano druido ti guida verso tre diverse strade da percorrere per arrivare al primo indizio che ti permettera' di trovare il magico artefatto del Cuore Di Lumaria:",
    options: [
      {
        type: "button", ok: true,
        text: "Strada 1",
        nextText: 2,
      },
      {
        type: "button", ok: true,
        text: "Strada 2",
        nextText: 3,
      },
      {
        type: "button", ok: true,
        text: "Strada 3",
        nextText: 4,
      },
    ],
  },
  {
    id: 2,
    text: 'Imboccando la prima strada, incontri una tribù di creature magiche che definiscono il bosco la loro casa. Ti offrono una prospettiva unica sulla magia della natura e ti chiedono di dimostrare la tua buona volontà risolvendo una disputa tra di loro. La tua scelta influenzerà la tua reputazione tra queste creature e potrebbe rivelare indizi cruciali sulla posizione del Cuore di Lumaria.  Le creature magiche ti pongono un indovinello per testare la tua saggezza, solo rispondendo in modo corretto si fideranno del tuo giudizio:\n\n"Ha un letto ma non dorme, ha una bocca ma non mangia. Cos\'è?"',
    options: [
      {
        type: "quiz",
        answer: "fiume",
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text: "Imboccando la seconda strada, incontri un druido anziano simile a colui che ti ha indirizzato verso la scelta. Il druido ti propone un test: dimostrare il tuo rispetto per la natura e la magia curando un albero malato usando le tue abilità magiche. Il successo potrebbe farti guadagnare la fiducia dei guardiani del  bosco, mentre il fallimento potrebbe portare a sfide maggiori nel proseguo dell'avventura. \n\n Inserisci il nome della magia curativa che era nella pergamena del druido",
    options: [
      {
        type: "quiz",
        answer: "ferula",
        nextText: 5,
      },
    ],
  },
  {
    id: 4,
    text: 'Esplorando la terza strada, trovi una seconda pergamena nascosta che contiene un messaggio criptico. Decifrando il messaggio, scopri che è una richiesta di aiuto da parte di uno spirito magico intrappolato nelle profondità del bosco. Salvare questo spirito richiede la risoluzione di un indovinello.\n\n"Ha un cappello, ma non è un signore. Ha un letto, ma non è un dormiente. Cosa sto descrivendo?" ',
    options: [
      {
        type: "quiz",
        answer: "fungo",
        nextText: 5,
      },
    ],
  },
  {
    id: 5,
    text: "Finito l'enigma ti si avvicina il druido che ti consegna il Bastone di Zephyrion, non ti è ancora chiaro come utilizzarlo ma l'anziano ti ha assicurato che nel momento del bisogno ti aiuterá a ritrovare la via.",
    options: [
      {
        type: "button", ok: true,
        text: "Continua",
        nextText: "route act_2",
      },
    ],
  },
];
export const act2 = [
  {
    id: 1,
    text:
      "Il tuo viaggio ti porta al Villaggio degli Elementi, dove incontri quattro tribù diverse che custodiscono le chiavi per sbloccare la magia che protegge il Cuore di Lumaria. Ogni tribù è legata a un elemento (fuoco, acqua, terra, aria) e ti pone alla prova con prove magiche per dimostrare la tua connessione con l'elemento.Ti si avvicina il rappresentante della " +
      tribe[tribeIndex] +
      " che ti pone davanti a una prova:",
    options: [
      {
        type: "button", ok: true,
        text: "Continua",
        nextText: (numTrial = tribeIndex + 2),
      },
    ],
  },
  {
    id: 2,
    text: "Tribù del Fuoco: Prova della Fiamma Ardente\n La tribù del Fuoco ti accoglie con entusiasmo. La loro prova consiste nel dimostrare il controllo sulla fiamma. Ti conducono in una grotta dove una fiamma magica danza liberamente. La tua sfida è manipolare la fiamma in modi creativi senza bruciare nulla. Potresti dover creare figure danzanti, farle cambiare colore o trasformarle in piccoli animali di fuoco. La tribù osserva con attenzione la tua padronanza sulla magia del fuoco. \n La prova verrà completata solo nel caso in cui il numero rollato sia maggiore di 1",
    options: [
      {
        type: "button", ok: true,
        text: "Roll",
        nextText: "route act_3",
      },
    ],
  },
  {
    id: 3,
    text: "Tribù dell'Acqua: Prova della Fonte Cristallina\nGli abitanti della tribù dell'Acqua ti portano a una sorgente magica. La tua prova consiste nel manipolare l'acqua per creare una scultura cristallina. Devi dare vita all'acqua, farla fluire come se fosse viva, e formare un'opera d'arte che rifletta la tua connessione con questo elemento. La tribù giudica la tua creatività e la tua capacità di intuire il movimento fluido dell'acqua.",
    options: [
      {
        type: "button", ok: true,
        text: "Roll",
        nextText: "route act_3",
      },
    ],
  },
  {
    id: 4,
    text: "Tribù della Terra: Prova del Giardino Rigoglioso\na tribù della Terra ti conduce in un giardino incantato. La tua prova è quella di far fiorire rapidamente un giardino desertico. Con le tue abilità magiche legate alla terra, devi far crescere fiori, alberi e arbusti in modo armonioso. La tribù osserva la tua capacità di comprendere e rispettare il ciclo della natura, dimostrando la tua connessione con la terra.",
    options: [
      {
        type: "button", ok: true,
        text: "Roll",
        nextText: "route act_3",
      },
    ],
  },
  {
    id: 5,
    text: "Tribù dell'Aria: Prova della Tempesta Controllata\nLa tribù dell'Aria ti porta in cima a una montagna ventosa. La tua prova consiste nel creare e controllare una piccola tempesta. Devi orchestrare il vento, le nuvole e la pioggia in modo equilibrato e armonioso. La tribù valuta la tua capacità di adattarti alle varie dinamiche dell'elemento dell'aria, dimostrando così la tua connessione con questa forza impetuosa.",
    options: [
      {
        type: "button", ok: true,
        text: "Roll",
        nextText: "route act_3",
      },
    ],
  },
  {
    id: 6,
    text: "Superata la prova ti viene data la chiave degli elementi.",
    options: [
      {
        type: "button", ok: true,
        text: "Continua",
        nextText: "route act_3",
      },
    ],
  },
];

export const act3 = [
  {
    id: 1,
    text:
      "Atto 3: La Città dei Labirinti\nDopo aver ottenuto la chiave degli elementi, raggiungi la misteriosa Città dei Labirinti, dove il Cuore di Lumaria è nascosto all'interno di un intricato labirinto magico. Entra nel labirinto e risolvi enigmi mentre cerchi di raggiungere la sala in cui è contenuto l'artefatto.",
    options: [
      {
        type: "button", ok: true,
        text: "Continua",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Enigma: Le porte della giornata\nAvanzando alla cieca nel labirinto ti trovi di fronte a una sala con all'interno tre porte. Ciascuna porta è contrassegnata da un simbolo magico: una stella, una luna e un sole. Un messaggio inciso sulla parete recita: \"Scegli con saggezza, solo la porta giusta ti condurrà avanti.\" Noti una luce provenire dal Bastone di Zephyrion sulla tua schiena, delle parole incise su di esso si illuminano: \"Quella che illumina la notte è la chiave per il tuo cammino.\"Dovrai selezionare la porta giusta basandoti sul messaggio per continuare il tuo viaggio all'interno del labirinto.",
    options: [
      {
        type: "button", ok: false,
        text: "Stella",
      },
      {
        type: "button", ok: true,
        text: "Luna",
        nextText: 3, //come gestisco gli errori?
      },
      {
        type: "button", ok: false,
        text: "Sole",
      },
    ],
  },
  {
    id: 3,
    text: "Enigma: Le Statue Parlanti\nProseguendo per il labirinto ti trovi in una stanza circondata da quattro statue di creature magiche: un drago, un pesce,un colibri' e una lucertola. Un messaggio inciso sulla parete recita: \"Solo una di queste creature dice la verità sul cammino da seguire. Le altre mentono. Scegli saggiamente.\"In quel momento la chiave degli elementi si illumina e punta verso la creatura che più si adatta alla tribù della saggezza, quella del fuoco" ,
    options: [
      {
        type: "button", ok: true,
        text: "Drago",
        nextText: "route act_ending",
      },
      {
        type: "button", ok: false,
        text: "Pesce",
      },
      {
        type: "button", ok: false,
        text: "Colibrì",
      },
      {
        type: "button", ok: false,
        text: "Lucertola",
      },
    ],
  },
];

export const ending = [
  {
    id: 1,
    text:
      "Dopo aver superato la prova delle Statue Parlanti arrivi in un enorme stanza con al centro un altare, un cono di luce si alza nel soffitto e penetra l'oscurita' della notte che incombe sul mondo esterno al labirinto, su questo altare si erge proprio l'artefatto obbiettivo della tua missione: il Cuore Di Lumaria.\nTi avvicini all'altare, prendi l'artefatto e una scossa improvvisa fa tremare l'intero labirinto, noti una porta davanti a te che prima non c'era, ti ci fiondi per scongiurare il crollo del labirinto sulle tue fragili ossa e la apri, complimenti! Hai superato tutte le prove e sei uscito indenne dal labirinto col Cuore Di Lumaria, grazie alle tue prodezze il regno potra' tornare a prosperare.",
    options: [
      {
        type: "button", ok: true,
        text: "Continua",
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Grazie per aver giocato al nostro gioco, speriamo vi sia piaciuto, per provare le altre scelte siete pregati di rigiocare l'avventura.",
    options: [
      {
        type: "button", ok: true,
        text: "Ricomincia",
        nextText: "route home",
      },
    ],
  },
];
export default showTextNode;

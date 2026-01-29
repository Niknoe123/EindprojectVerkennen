
const vragen = [
    "Waarmee bouw je de basis van je hut?",
    "Welke tag gebruik je om een bericht in het zand te schrijven",
    "Hoe geef je je hut kleur?",
    "Welke CSS-eigenschap maakt het eiland zonnig (achtergrondkleur)?",
    "Welke taal laat de boot bewegen?",
    "Hoe schrijf je een JavaScript-comment om je plan te verbergen?",
    "Welke HTML-tag gebruik je om op de boot te klikken?",
    "Hoe selecteer je de boot met id boat in CSS?",
    "Welke functie waarschuwt voor een storm?",
    "Welke score heb je nodig om te ontsnappen?"    

];

const Opties= [
    ["Css", "Javascript", "Html", "Python"],
    ["<p>", "<div>", "<span>", "<h1>"],
    ["Html", "Css", "Javascript", "PHP"],
    ["Color", "border", "background-color", "font-style"],
    ["HTML", "CSS", "Javascript", "SQL"],
    ["<!-- -->", "//plan", "# plan", "** plan **"],
    ["<click>", "<a>", "<Button>", "<form>"],
    [".boat", "#boat", "boat", "*boat"],
    ["console.log()", "alert()", "prompt()", "warn()"],
    ["2 punten", "4 punten", "6 punten", "10 punten"]
];

const antwoord = [
    "C",
    "A",
    "B",
    "C",
    "C",
    "B",
    "C",
    "B",
    "B",
    "C"
];

let currentQuestion = 0;
let score = 0;

console.log("Vragen", vragen);
console.log("Antwoorden:", Opties);
console.log("Juiste antwoorden:", antwoord);
console.log("Huidige vraag:", currentQuestion);
console.log("Score:", score);









/*
    Snack 1
        Creare un array di oggetti:
            Ogni oggetto descriverà una bici da corsa con le 
                seguenti proprietà: nome e peso.
            Stampare a schermo la bici con peso minore utilizzando
                destructuring e template literal
*/



//creato array di objects
const biciclette = [
    {
        nome:'Atala',
        peso: 10
    },

    {
        nome:'Cipollini',
        peso: 3
    },

    {
        nome:'Pinarello',
        peso: 8
    }
];



//ciclo for per ciclare ogni oggetto e creare
let biciLeggera = biciclette[0];
for(i = 0; i < biciclette.length; i++){
    let bici = biciclette[i];
    if(bici.peso < biciLeggera.peso){
        biciLeggera = bici;
    }
}
const {nome,peso} = biciLeggera;
console.log(`la bici piû leggera é la ${nome} e pesa ${peso}`)


//estrapoliamo 3 variabili con il deconstruct usando un ciclo

// const pesiBici = biciclette.map((object) => {
//     return object.peso;
// });
// console.log(pesiBici);

//uso spread per "aprire" pesiBici e con Math.min verifico quale sia il piu piccolo
// console.log(Math.min(...pesiBici));



/*
    Snack2
        Creare un array di oggetti di squadre di calcio.
            Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
            Nome sarà l’unica proprietà da compilare, le altre
                saranno tutte settate a 0.
            Generare numeri random al posto degli 0 nelle
                proprietà: Punti fatti e falli subiti.
            Infine usando la destrutturazione creiamo un nuovo 
                array i cui elementi contengono solo nomi e falli 
                subiti e stampiamo tutto in console.
*/

const squadre = [
    {
        nome:'juve',
        punti: 0,
        falli: 0
    },

    {
        nome:'inter',
        punti: 0,
        falli: 0
    }
];


let risultati = [];
squadre.forEach((element, index)=>{
    element.punti = randomNumberGen(10);
    element.falli = randomNumberGen(5);
    const {nome,falli} = element;
    risultati.push(nome,falli);
    // console.log(`la squadra ${nome} ha subito ${falli} falli!`);
});
console.log(risultati);


//funzioni
function randomNumberGen(max){
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}


/*
    BONUS
    Snack 3
        Scrivere una funzione che accetti tre argomenti, un
            array e due numeri (a più piccolo di b).
        La funzione ritornerà un nuovo array con i valori che
            hanno la posizione compresa tra i due numeri.
        Usiamo i nuovi metodi degli array foreach o filter.
*/

const gelati = ['fragola', 'pistacchio', 'liquirizia', 'limone', 'cioccolato'];
let gelatiScelti = [];

gelati.forEach((element) =>{
    element = fascia(gelati, 1, 3);
    gelatiScelti = element;
});

console.log(gelatiScelti);


// console.log(fascia(gelati, 1, 3));

//funzione bonus
function fascia(array, startIndex, endIndex){
    let newArray = [];

    while(startIndex != endIndex){
        newArray.push(array[startIndex]);
        startIndex++;
    }
    newArray.push(array[endIndex]);

    return newArray;

}
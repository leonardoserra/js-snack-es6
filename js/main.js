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


//forEach per ciclare tutti gli objects

biciclette.forEach((element, index) => {
    const {nome, peso} = element;
    let dati =[nome,peso];
    if(dati[1] == element[index]['peso']){
        dati = [nome, peso];
        console.log(...dati);
    }else{

        // console.log(...dati);
    }
    // console.log(...dati);
    
});

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
    BONUS
    Snack 3
        Scrivere una funzione che accetti tre argomenti, un
            array e due numeri (a più piccolo di b).
        La funzione ritornerà un nuovo array con i valori che
            hanno la posizione compresa tra i due numeri.
        Usiamo i nuovi metodi degli array foreach o filter.
*/




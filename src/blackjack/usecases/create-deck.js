
import _ from "underscore";


/**
 * Esta Funcion Crea un Nuevo Deck
 * @param {Array<String>} tiposDeCarta 
 * @param {Array<String>} tiposEspeciales 
 * @returns  {Array<String>} Retorna un Nuevo Deck
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta ===0 ) 
        throw new Error("tipoDeCarta es Obligatorio!!" ) 

    let deck=[];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
  
    return deck;
}


// import default crearDeck;
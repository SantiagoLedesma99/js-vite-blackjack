
import { pedirCarta, valorCarta, crearCartaHTML} from "./";

/**
 *  Turno de la Computadora
 * @param {Number} puntosMinimos Puntos que necesita la computadora para ganar
 * @param {Array <String>} deck 
 * @param {HTMLElement} puntosHTML elemento html para mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elemento html para mostrar las cartas 
 */



export const turnoComputadora = ( puntosMinimos, puntosHTML,divCartasComputadora, deck ) => {

    if ( !puntosMinimos ) throw new Error ("Puntos Minimos son Necesarios")
    if ( !deck ) throw new Error (" Deck son Necesarios")
    if ( !puntosHTML ) throw new Error (" elemento Html es necesario")

    let puntosComputadora =0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        
        const imgCarta = crearCartaHTML (carta);
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

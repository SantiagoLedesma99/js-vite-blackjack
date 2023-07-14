
/**
 * 
 * @param {String} carta
 * @returns {HTMLImageElement} regresa la Imagen de la Carta
 */

export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error("Se necesita Carta");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    

    return imgCarta

};



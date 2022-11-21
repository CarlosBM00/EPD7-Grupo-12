///////////////////////////////////////////////////////////////
// VARIABLES GLOBALES
// GLOBAL VARIABLES
///////////////////////////////////////////////////////////////
// Variable numérica usada para almacenar el número de jugadores de la partida.
// Numeric variable used to store the number of players in the game.
var numeroJugadores = 0;
// Vector que contiene vectores de dos posiciones con la informacion de los jugadores: nombre y puntuacion
// Array containing two-position arrays with the players' information: name and score.
// Ejemplo/Example: infoJugadores [["Carlos",100],["Jose Antonio",100],["Alberto",100]]
var infoJugadores = [];
// Variable numérica usada para almacenar el índice del jugador actual dentro de la matriz infoJugadores.
// Numeric variable used to store the index of the current player within the infoPlayers array.
var jugadorActual = 0;
// Vector que contiene vectores de 3 posiciones con: frase, pista y puntuacion a sumar al jugador que resuelva el panel. Por cada partida se seleccionará solamente un elemento de este vector.
// Ver funcion inicializaParametros(), donde se inicializa esta variable.
// Array containing 3 position arrays with: phrase, hint and score to be added to the player who solves the panel. For each game only one element of this vector will be selected.
// See function initializaParametros(), where this variable is initialized.
var contenidosDisponibles = [];
// Variable usada para almacenar el elemento del vector contenidosDisponibles que se ha seleccionado para la partida en curso. Se tratara de un vector de 3 posiciones: Frase, pista y puntuacion.
// Variable used to store the element of the contenidosDisponibles array that has been selected for the current game. This will be an array of 3 positions: Phrase, hint and punctuation.
// Ejemplo / Example: ["LE HARE UNA OFERTA QUE NO PODRA RECHAZAR", "Marlon Brando - El padrino", 1500]
var contenidoSeleccionado;
// Variable usada para almacenar el contenido mostrado en el panel, comenzará mostrando guiones y, una vez resuelto, será igual a la frase del contenido seleccionado.
// Variable used to store the content displayed in the panel, it will start displaying dashes and, once resolved, will be equal to the phrase of the selected content (contenidoSeleccionado).
var contenidoEnPanel = "";
// Vector que contiene las posibles opciones al tirar la ruleta. Consta de varios valores numéricos, junto a dos valores de tipo cadena ("Pierde turno" y "Quiebra").
// Ver funcion inicializaParametros(), donde se inicializa esta variable.
// Array containing the possible options when spinning the roulette wheel. It consists of several numeric values, along with two string values ("Pierde turno" y "Quiebra").
// See function initializaParametros(), where this variable is initialised.
var opcionesRuleta = [];
// Constantes para identificar las dos opciones "especiales" de la ruleta (no suman puntos)
// Constants to identify the two "special" roulette options (they don't add points)
const PIERDE_TURNO = "Pierde turno"; // El usuario pierde el turno -- The player loses his/her turn.
const QUIEBRA = "Quiebra"; // El usuario pierde el turno y su puntuacion se ve reducida a 0 -- The player loses his/her turn and points.
// Variable usada para almacenar la última opción que ha sido seleccionada al tirar la ruleta.
// Variable used to store the last option that was selected when the roulette wheel was spinned.
 var opcionActualRuleta=0;

///////////////////////////////////////////////////////////////
// FUNCIONES Javascript
// Javascript Functions
///////////////////////////////////////////////////////////////

// Inicializar parametros del juego
// Initialize game parameters
function inicializaParametros(){
  // Inicializar frases
  // Initialize phrases
  contenidosDisponibles.push(["FRANCAMENTE, QUERIDA, ME IMPORTA UN BLEDO", "Clark Gable - Lo que el viento se llevó", 2000]);
  contenidosDisponibles.push(["LE HARE UNA OFERTA QUE NO PODRA RECHAZAR", "Marlon Brando - El padrino", 1500]);
  contenidosDisponibles.push(["TOTO, TENGO EL PRESENTIMIENTO DE QUE YA NO ESTAMOS EN KANSAS", "Judy Garland - El mago de Oz", 2000]);
  contenidosDisponibles.push(["\u00A1ME ENCANTA EL OLOR DEL NAPALM POR LA MA\u00D1ANA!", "Robert Duvall - Apocalypse Now", 2500]);
  contenidosDisponibles.push(["EL MATERIAL DEL QUE ESTAN HECHOS LOS SUE\u00D1OS", "Humphrey Bogart - El halcón maltés", 1500]);
  contenidosDisponibles.push(["LOUIS, CREO QUE ESTE ES EL INICIO DE UNA HERMOSA AMISTAD", "Humphrey Bogart - Casablanca", 2000]);
  contenidosDisponibles.push(["QUE LA FUERZA TE ACOMPA\u00D1E", "Harrison Ford - Star Wars: Episodio IV, Una nueva esperanza", 1000]);
  contenidosDisponibles.push(["MAMA SIEMPRE DECIA QUE LA VIDA ERA COMO UNA CAJA DE CHOCOLATES. NUNCA SABES QUE TE VA A TOCAR", "Tom Hanks - Forrest Gump", 3000]);
  contenidosDisponibles.push(["HOUSTON, TENEMOS UN PROBLEMA", "Tom Hanks: Apollo 13", 1000]);
  contenidosDisponibles.push(["LA CODICIA, POR FALTA DE UNA MEJOR PALABRA, ES BUENA", "Michael Douglas - Wall Street", 2500]);

  // Inicializar ruleta
  // Initialize roulette
  opcionesRuleta = [PIERDE_TURNO, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 25, 25, 25, 25, 25, 25, 25, 25, 50, 50, 50, 50, 75, 75, 100, QUIEBRA];
}

// Resto de funciones disponibles (Código ofuscado): escogeContenido(), iniciarTurno(), cambiarJugador(), reiniciarPartida, muestraMensajeError(texto) y muestraMensajeAcierto(texto)
// Rest of available functions (obfuscated code):  escogeContenido(), iniciarTurno(), cambiarJugador(), reiniciarPartida, muestraMensajeError(texto) and muestraMensajeAcierto(texto)
(function(_0x5736c5,_0x19ff06){const _0x2e1a9d=_0x6266,_0x2d963b=_0x5736c5();while(!![]){try{const _0x51488e=-parseInt(_0x2e1a9d(0xea))/0x1*(-parseInt(_0x2e1a9d(0xfb))/0x2)+-parseInt(_0x2e1a9d(0xf0))/0x3*(-parseInt(_0x2e1a9d(0xef))/0x4)+-parseInt(_0x2e1a9d(0xff))/0x5*(parseInt(_0x2e1a9d(0xf9))/0x6)+parseInt(_0x2e1a9d(0xfd))/0x7+parseInt(_0x2e1a9d(0x106))/0x8*(-parseInt(_0x2e1a9d(0xed))/0x9)+parseInt(_0x2e1a9d(0xec))/0xa+-parseInt(_0x2e1a9d(0xf7))/0xb*(parseInt(_0x2e1a9d(0xf4))/0xc);if(_0x51488e===_0x19ff06)break;else _0x2d963b['push'](_0x2d963b['shift']());}catch(_0x590d18){_0x2d963b['push'](_0x2d963b['shift']());}}}(_0x1ada,0xb4f45));function escogeContenido(){const _0x3f28e1=_0x6266;let _0x2bc2e8=(Math['random']()*(contenidosDisponibles[_0x3f28e1(0xf2)]-0x1))['toFixed'](0x0);contenidoSeleccionado=contenidosDisponibles[_0x2bc2e8],console[_0x3f28e1(0x107)](_0x2bc2e8+'\x20'+contenidoSeleccionado);}function iniciarTurno(){const _0x302411=_0x6266;document[_0x302411(0xee)](_0x302411(0x105))[_0x302411(0xfc)]=infoJugadores[jugadorActual][0x0]+'\x20('+infoJugadores[jugadorActual][0x1]+_0x302411(0x101),document[_0x302411(0xee)](_0x302411(0xf5))[_0x302411(0xf3)]=![],document[_0x302411(0xee)]('accionLetras')[_0x302411(0x104)][_0x302411(0xeb)]('oculto');}function cambiarJugador(){const _0x1bc6d3=_0x6266;jugadorActual<infoJugadores[_0x1bc6d3(0xf2)]-0x1?jugadorActual=jugadorActual+0x1:jugadorActual=0x0,iniciarTurno();}function reiniciarPartida(){const _0x584f76=_0x6266;document[_0x584f76(0xee)]('resumenPartida')[_0x584f76(0x104)][_0x584f76(0xeb)](_0x584f76(0xfa));for(let _0x5ed9df of document[_0x584f76(0xee)](_0x584f76(0xf6))['childNodes']){_0x5ed9df[_0x584f76(0xf3)]=![];}muestraMensaje(null,null),document[_0x584f76(0xee)](_0x584f76(0xf1))[_0x584f76(0xfc)]='';let _0x11eb45=document[_0x584f76(0xee)](_0x584f76(0x103));while(_0x11eb45['firstChild']){_0x11eb45[_0x584f76(0xf8)](_0x11eb45[_0x584f76(0x102)]);}iniciarPartida();}function _0x1ada(){const _0x706e3d=['12lkJhRJ','1246998yNvnIs','resultadoRuleta','length','disabled','25788wHBPzR','girarRuleta','letrasDisponibles','8591hpPpSW','removeChild','144894iuPscF','oculto','2011234UeNGUw','textContent','10375225FxwAvi','msgError','265UbDiKW','mensaje','\x20puntos)','firstChild','ranking','classList','turnoJugador','1608xiIgBg','log','1lPEKCh','add','1875740mGhbXx','9981AGvIDg','getElementById'];_0x1ada=function(){return _0x706e3d;};return _0x1ada();}function muestraMensajeError(_0x419d33){const _0xb29390=_0x6266;muestraMensaje(_0x419d33,_0xb29390(0xfe));}function _0x6266(_0x4380c8,_0x598e01){const _0x1adaed=_0x1ada();return _0x6266=function(_0x626673,_0x3e4f65){_0x626673=_0x626673-0xea;let _0x172f0d=_0x1adaed[_0x626673];return _0x172f0d;},_0x6266(_0x4380c8,_0x598e01);}function muestraMensajeAcierto(_0x4aca22){muestraMensaje(_0x4aca22,'msgAcierto');}function muestraMensaje(_0x1c3230,_0x384d8f){const _0x674438=_0x6266;document[_0x674438(0xee)]('mensaje')[_0x674438(0xfc)]=_0x1c3230,document['getElementById'](_0x674438(0x100))['className']=_0x384d8f;}

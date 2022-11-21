// Mostrar campos para información de jugadores
// Display fields for player information
function muestraFormularioJugadores() {
  // Almacena el numero de jugadores en variable global numeroJugadores
  // Stores the number of players in global variable numeroJugadores


  console.log("Numero de jugadores seleccionado: "+numeroJugadores);
  //console.log("Number of players selected: "+numeroJugadores)

  // Eliminar los campos para la informacion de usuarios que pudiera haber previamente
  // Remove fields for user information that may have previously been there


  // Insertar los campos para la informacion de usuarios
  // Insert fields for user information


  // Si el numero de jugadores es mayor que cero, habilite el boton con id iniciaPartida
  // If the number of players is greater than zero, enable the button with id iniciaPartida.


}

// Carga la informacion del formulario e inicia la partida
// Load the information from the form and start the game
function cargarInfoJugadores(){
  // Carga la informacion de todos los jugadores en el vector infoJugadores
  // Load the information of all players in the infoJugadores array


  console.log("Informacion de jugadores cargada: "+infoJugadores)
  iniciarPartida();
}

// Genera la frase para el panel, la informa en el panel e indica la pista y el valor en el botón resolver. Tras esto oculta el panel de configuracion de la partida y muestra el panel de partida.
// Generates the phrase for the panel, reports it to the panel and indicates the hint and value in the resolver button. After that it hides the game configuration panel and shows the game panel.
function iniciarPartida(){
  // Inicia el primer jugador, jugadorActual, al valor 0
  // Start the first player, jugadorActual, at value 0


  // Escoge al azar la frase para el panel
  // Randomly chooses the phrase for the panel
  escogeContenido();

  // Indica el contenido inicial de contenidoEnPanel (La frase, reemplazando cualquier letra mayuscula, salvo la Ñ, por _ ), y asigne su contenido al elemento con id panel
  // Specifies the initial contents of contenidoEnPanel (The phrase, replacing any capital letters, except Ñ, with _ ), and assigns its contents to the element with panel id


  // Indica la pista al elemento con id pista
  // Specifies the track to the element with pista id


  // Indica el valor del panel al elemento con id valorPanel
  // Specifies the value of the panel to the element with id valorPanel


  // Oculta panel configurarPartida
  // Hides panel configurarPartida


  // Muestra panel partida
  // Displays the start panel


  // Por ultimo, inicia el turno, en este caso para el primer jugador
  // Finally, start the turn, in this case for the first player.
  iniciarTurno();
}

// Gira la ruleta y obtiene un valor al azar
// Spin the roulette wheel and get a random value
function giraRuleta() {
  // Deshabilita boton ruleta para no volver a tirar en este turno
  // Disable ruleta button to not spin again this turn


  // Escoja de forma aleatoria un elemento del vector opcionesRuleta y almacénelo en opcionActualRuleta
  // Randomly pick an element from the opcionesRuleta vector and store it in opcionActualRuleta


  // Muestra la opcion obtenida de la ruleta (opcionActualRuleta) en el elemento con id resultadoRuleta
  // Show the option obtained from the roulette (opcionActualRuleta) in the element with id resultadoRuleta


  // Si opcionActualRuleta es QUIEBRA
  // If opcionActualRuleta is QUIEBRA
      // Asigna la puntuación del jugador actual a cero
      // Set the current player's score to zero


      // Muestre mensaje de error, usando muestraMensajeError(), indicando quiebra y el jugador con su puntuacion actual
      // Display an error message, using muestraMensajeError(), indicating quiebra and the player's current score


      // Llame a la función cambiarJugador()
      // Call the cambiarJugador() function


  // Si no, si opcionActualRuleta es PIERDE_TURNO
  // Otherwise, if opcionActualRuleta is PIERDE_TURNO
      // Muestre mensaje de error, usando muestraMensajeError(), indicando que pierde su turno
      // Display an error message, using muestraMensajeError(), indicating that player loses the turn


      // llame a la función cambiarJugador()
      // Call cambiarJugador() function


  // Si no
  // Otherwise
      // Muestre mensaje de acierto, usando muestraMensajeAcierto(), indicando el jugador actual y el valor de opcionActualRuleta por el que juega
      // Display a success message, using muestraMensajeAcierto(), indicating the current player and the value of opcionActualRuleta to play for.


      // Haga visible el elemento con id accionLetras (elimine la clase CSS oculto para lograr esto)
      // Make element with id accionLetras visible (remove the oculto CSS class to achieve this)


}

// Trata de descubrir una letra, de existir en el panel, la descubre y puntua, de no existir cambia de jugador
// Try to discover a letter, if it exists in the panel, discover it and score, if it doesn't exist change player
function descubreLetra(btnLetra){
  // Deshabilita el botón de la letra que ha sido pulsada
  // Disable the button for the letter that has been pressed


  // Obtenga el contenido de texto de éste, y almacenela en una variable local llamada letra
  // Get the text content of it, which will correspond to the letter pressed and store it in a local variable called letra


  console.log("Letra pulsada: "+letra); 

  // Si la frase del panel (primera posición del vector contenidoSeleccionado) no contiene esta letra
  // If the panel phrase (first position of the contenidoSeleccionado vector) doesn't contain this letter
      // Muestre un mensaje de error indicando que la letra no está en la frase
      // Display an error message indicating that the letter is not in the phrase


      // Y llame a la función cambiarJugador()
      // And call the cambiarJugador() function.


  // En caso de que la letra esté contenida en la frase a resolver
  // In case the letter is contained in the phrase to solve for
      // Asigne la letra seleccionada en cada una de las posiciones en la variable contenidoEnPanel, cambiándola por el guión que corresponda, y cuente cuántas veces aparece (repeticiones de la letra).
      // Assign the selected letter to each of the positions in the contenidoEnPanel variable, changing it to the appropriate hyphen, and count how many times it appears (repetitions of the letter).


      // Muestre el contenido de la variable contenidoEnPanel en  el elemento con id panel
      // Display the contents of the contenidoEnPanel variable in the element with the id panel


      // Tras esto, multiplique la opción que obtuvo al tirar la ruleta (almacenada previamente en opcionActualRuleta) por el número de repeticiones de la letra
      // After that, multiply the option you got by throwing the roulette (previously stored in opcionActualRuleta) by the number of repetitions of the letter


      // Súmele el valor obtenido a la puntuación del jugador actual.
      // Add the value obtained to the current player's score.


      // Por último, llame a la función compruebaPanelResuelto().
      // Finally, call the function compruebaPanelResuelto().


}

// Comprueba si se ha resuelto el panel, en cuyo caso finaliza la partida mostrando el resultado de la misma, en caso contrario vuelve a iniciar el turno
// Check if the panel has been resolved, in which case end the game by displaying the game result, otherwise restart the turn.
function compruebaPanelResuelto(){

  // Si el valor de contenidoEnPanel igual al del vector contenidoSeleccionado en su prinmera posicion:
  // If the value of contenidoEnPanel equals the value of the contenidoSeleccionado vector in its first position:
      // Oculte el elemento con id accionLetras (añada la clase oculto para ello)
      // Hide the element with id accionLetras (add the oculto class for this).


      // Sume el valor de resolver el panel (tercera posición del vector contenidoSeleccionado) a la puntuación del jugador actual
      // Add the value of resolving the panel (third position of the vector contenidoSeleccionado) to the current player's score.


      // Muestre un mensaje de acierto indicando el nombre del jugador que ha resuelto el panel
      // Display a success message indicating the name of the player who solved the panel.


      // Por último llame a la función muestraResultadoPartida()
      // Finally call the function muestraResultadoPartida()


  // Si no
  // Otherwise,
      // Llame a la función iniciarTurno, para de este modo volver a iniciar el turno para el mismo jugador
      // Call the function iniciarTurno, to restart the turn for the same player


}

// Muestra el resultado de la partida, a modo de ranking, del jugador con mejor al jugador con peor puntuación
// Display the result of the game, as a ranking, from the highest to the lowest scoring player
function muestraResultadoPartida(){
  // Mostramos  el nodo resumen partida
  // Show the game summary node


  // Ordene el vector infoJugadores por la puntuación que ha obtenido cada jugador (segundo campo del vector)
  // Sort the infoJugadores vector by the score obtained by each player (second field of the vector)


  // Muestre el contenido del vector infoJugadores en el orden obtenido asignándo cada posición del vector, en el formato <nombre> : <puntuación>, como elementos de tipo LI al nodo OL con id ranking
  // Display the contents of the infoJugadores vector in the order obtained by assigning each position of the vector, in the format <name> : <score>, as elements of type LI to the OL node with id ranking


}

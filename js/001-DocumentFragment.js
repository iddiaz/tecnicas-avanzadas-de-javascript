//=================================================
// DOCUMENTFRAGMENT 
// Ideal para insertar granes cantidades de elementos
// al Dom, sin tener que estar accediendo constantemente
// al docuemnto y por lo tanto mejora la velocidad y
// rendimiento de la página
//=================================================

     //=================================================
     //Uso de DocumentFragment para intertar grandes cantidades
     // de elementos al DOM
     //=================================================

     var elems = [
       document.createElement('hr'),
       text( document.createElement('b'), 'Links;' ),
       document.createTextNode(' '),
       text(document.createElement('a'), 'Link A'),
       document.createTextNode(' ! '),
       text(document.createElement('a'), 'Link B'),
       document.createTextNode(' | '),
       text( document.createElement('a'), 'Link C')       
     ];

     function text(node, txt ){
       node.appendChild( document.createTextNode(txt))
       return node;
     }

     /**
      * Recorre el array e inserta los elementos en el 
      * documento, es poco óptimo hacerlo asi.
      */
     var div = document.getElementsByTagName('div');
     for( var i = 0; i< div.length; i++ ){
        for( var e = 0; e < elems.length; e++){
          div[i].appendChild( elems[e].cloneNode(true));
        }
     }

      //=================================================
     //DocumentFragment uso, es más óptimo y recomendable
     //=================================================

     var div = document.getElementsByTagName('section');

     var fragment =document.createDocumentFragment();
     console.log(fragment);

     //genera los elementos en memoria
     for( var e=0; e < elems.length; e++){
       fragment.appendChild(elems[e]);
     }

     for(var i = 0; i < div.length; i++) {
       div[i].appendChild( fragment.cloneNode(true));
     }





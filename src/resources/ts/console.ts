// outdir: ../../../resources/js/

let divConsole = document.getElementById('console'),        // Elemento de la consola
    firstText = 'Miguelmo@home:~$ ';                        // Texto inicial

function createNewLine(toInsert: string) {
    let newSpan = document.createElement('span');
    newSpan.textContent = toInsert || '';
    divConsole.appendChild(newSpan);
    return newSpan;
};


//LÓGICA DEL CODIGO
createNewLine(firstText);
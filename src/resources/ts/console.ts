let divConsole = document.getElementById('console'),        // Elemento de la consola
    firstText = 'Miguelmo@home:~$ ',
    actualSpan: HTMLSpanElement,
    textToWrite: string, index = 0;

let createNewLine = (toInsert: string) => {
    let newSpan = document.createElement('span');
    newSpan.textContent = toInsert || '';
    divConsole.appendChild(newSpan);
    actualSpan = newSpan;
    return newSpan;
};

let writeText = (text: string) => {
    textToWrite = text;
    let promise = new Promise(resolve => {
        let i, time = 300;
        for (i = 0; i < textToWrite.length; i++) {
            setTimeout(() => {
                actualSpan.textContent += textToWrite[index];
                index++;
            }, i * time);
        }
        setTimeout(() => {
            index = 0;
            resolve();
        }, i * time);
    });
    return promise;
};


//LÓGICA DEL CODIGO
createNewLine(firstText);
createNewLine(firstText);
writeText('hola').then(() => {
    console.log('fin');
});
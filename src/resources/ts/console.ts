let divConsole = document.getElementById('console'),        // Elemento de la consola
    firstText = 'Miguelmo@home:~$ ',
    actualParagraph: HTMLParagraphElement,
    textToWrite: string, index = 0;

let newLine = () => {
    let newSpan = document.createElement('p');
    newSpan.textContent = firstText || '';
    divConsole.appendChild(newSpan);
    divConsole.scrollTop = divConsole.scrollHeight;
    actualParagraph = newSpan;
    return newSpan;
};

let writeText = (text: string, time?: number) => {
    textToWrite = text;
    if (text.includes('@')) {

    }
    let promise = new Promise(resolve => {
        // incrementScroll();
        let i, milliseconds = time || 10;
        for (i = 0; i < textToWrite.length; i++) {
            setTimeout(() => {
                actualParagraph.textContent += textToWrite[index];
                index++;
                divConsole.scrollTop = divConsole.scrollHeight;
            }, i * milliseconds);
        }
        setTimeout(() => {
            index = 0;
            resolve();
        }, i * milliseconds);
    });
    return promise;
};

let setScroll = () => {

    divConsole.scrollTop = divConsole.scrollHeight;
}

//LÓGICA DEL CODIGO
newLine();
writeText('Bienvenid@ a mi web').then(() => {
    newLine();
    writeText('Datos personales:').then(() => {
        newLine();
        writeText('Sant Vicent del Raspeig, Comunidad Valenciana, España.', 30).then(() => {
            newLine();
            writeText('miguelmoyaortega@hotmail.com', 30).then(() => {
                newLine();
                writeText('github.com/miguelmoya1 isofocus.es', 30).then(() => {
                    newLine();
                    //     writeText('Datos:').then(() => {
                    //         newLine();
                    //     });
                });
            });
        });
    });
});

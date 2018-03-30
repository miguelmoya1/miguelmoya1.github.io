let divConsole = document.getElementById('console'), // Elemento de la consola
firstText = 'Miguelmo@home:~$ ', actualParagraph, actualInput, textToWrite, index = 0;
let newLine = (contenteditable = false) => {
    let divContainer = document.createElement('div');
    let newP = document.createElement('p');
    let initial = document.createElement('span');
    divContainer.className = 'line';
    initial.textContent = firstText;
    divContainer.appendChild(initial);
    divContainer.appendChild(newP);
    divConsole.appendChild(divContainer);
    setScroll();
    if (contenteditable)
        newP.setAttribute('contenteditable', '');
    if (contenteditable)
        newP.setAttribute('autofocus', '');
    actualParagraph = newP;
    return newP;
};
let writeText = (text, link = false, time) => {
    textToWrite = text;
    let promise = new Promise(resolve => {
        let i, milliseconds = time || 50;
        for (i = 0; i < textToWrite.length; i++) {
            setTimeout(() => {
                actualParagraph.textContent += textToWrite[index];
                index++;
                setScroll();
            }, i * milliseconds);
        }
        setTimeout(() => {
            if (link) {
                actualParagraph.textContent = '';
                let textArray = text.split(' ');
                textArray.forEach(link => {
                    let a = document.createElement('a');
                    if (link.includes('@'))
                        a.href = 'mailTo:';
                    else
                        a.href = 'https://';
                    a.href += link;
                    actualParagraph.appendChild(a);
                    a.textContent = link;
                    let separator = document.createElement('span');
                    separator.textContent = ' ';
                    actualParagraph.appendChild(separator);
                });
            }
            index = 0;
            resolve();
        }, i * milliseconds);
    });
    return promise;
};
let setScroll = () => {
    divConsole.scrollTop = divConsole.scrollHeight;
};
//LÓGICA DEL CODIGO
newLine();
writeText('Bienvenid@ a mi web').then(() => {
    newLine();
    writeText('Datos personales:').then(() => {
        newLine();
        writeText('Sant Vicent del Raspeig, Comunidad Valenciana, España.', false, 30).then(() => {
            newLine();
            writeText('miguelmoyaortega@hotmail.com', true, 30).then(() => {
                newLine();
                writeText('github.com/miguelmoya1 isofocus.es', true, 30).then(() => {
                    newLine(true);
                });
            });
        });
    });
});

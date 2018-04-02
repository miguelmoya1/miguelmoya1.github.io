let divConsole = document.getElementById('console'),
    firstText = 'Miguelmo@home:~$ ',
    actualParagraph, textToWrite, index = 0;
divConsole.addEventListener('click', () => {
    if (actualParagraph)
        actualParagraph.focus();
});
let newLine = (contenteditable = false, initial = true) => {
    let divContainer = document.createElement('div');
    let newP = document.createElement('p');
    divContainer.className = 'line';
    actualParagraph = newP;
    if (contenteditable) {
        let initial = document.createElement('span');
        initial.textContent = initial ? firstText : '';
        divContainer.appendChild(initial);
        newP.setAttribute('contenteditable', '');
        newP.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.keyCode === 13) analiceText();
        });
    } else
        newP.textContent = initial ? firstText : '';
    divContainer.appendChild(newP);
    divConsole.appendChild(divContainer);
    setScroll();
    if (contenteditable)
        actualParagraph.focus();
};
let analiceText = () => {
    actualParagraph.removeAttribute('contenteditable');
    if (actualParagraph.textContent.trim().toLocaleLowerCase() === 'contacto' ||
        actualParagraph.textContent.trim().toLocaleLowerCase() === 'contactos' ||
        actualParagraph.textContent.trim().toLocaleLowerCase() === 'contactar') {
        newLine(false, false);
        writeText('miguelmoyaortega@gmail.com', 10, true).then(() => newLine(true));
    } else if (actualParagraph.textContent.trim().toLocaleLowerCase() === 'info' ||
        actualParagraph.textContent.trim().toLocaleLowerCase() === 'informacion') {
        newLine(false, false);
        writeText('Nombre: Miguel Moya Ortega', 10).then(() => {
            newLine(false, false);
            writeText('Sant Vicent del Raspeig, Comunidad Valenciana, España', 10).then(() => {
                newLine(false, false);
                writeText('Desarrollador web en Bitapp', 10).then(() => {
                    newLine(true);
                });
            });
        });
    } else if (actualParagraph.textContent.trim().toLocaleLowerCase() === 'proyectos' ||
        actualParagraph.textContent.trim().toLocaleLowerCase() === 'proyecto') {
        newLine(false, false);
        writeText('https://isofocus.es/', 20).then(() => newLine(true));
    } else if (actualParagraph.textContent.trim().toLocaleLowerCase() === '/help') {
        newLine();
        writeText('Comandos disponibles: contacto, proyectos, info', 20).then(() => newLine(true));
    } else if (actualParagraph.textContent.trim().toLocaleLowerCase() === 'exit') {
        window.open('', '_self', '');
        window.close();
    } else {
        newLine();
        writeText('Commando no encontrado... ', 20).then(() => newLine(true));
    }
};
let writeText = (text, time, link = false) => {
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
newLine();
writeText('Bienvenid@').then(() => {
    newLine();
    writeText('Escribe el comando o /help para ver la lista de comandos posibles. ', 30).then(() => {
        newLine(true);
    });
});
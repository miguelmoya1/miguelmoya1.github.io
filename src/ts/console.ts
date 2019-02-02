let divConsole = document.getElementById('console'),
    firstText = 'Miguelmo@home:~$ ',
    actualParagraph: HTMLParagraphElement,
    textToWrite: string,
    index = 0;

divConsole.addEventListener('click', () => {
    if (actualParagraph) actualParagraph.focus();
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
    } else newP.textContent = initial ? firstText : '';
    divContainer.appendChild(newP);
    divConsole.appendChild(divContainer);
    setScroll();
    if (contenteditable) actualParagraph.focus();
};

let analiceText = async () => {
    actualParagraph.removeAttribute('contenteditable');
    switch (actualParagraph.textContent.trim().toLocaleLowerCase()) {
        case 'contacto':
        case 'contactos':
        case 'contactar':
            newLine(false, false);
            await writeText('miguelmoyaortega@gmail.com', 10, true);
            newLine(true);
            break;

        case 'info':
        case 'informacion':
            newLine(false, false);
            await writeText('Nombre: Miguel Moya Ortega', 10);
            newLine(false, false);
            await writeText('Sant Vicent del Raspeig, Alicante, España', 10);
            newLine(false, false);
            await writeText('Desarrollador web en Bitapp', 10);
            newLine(true);
            break;

        case 'proyectos':
        case 'proyecto':
            newLine(false, false);
            await writeText('https://isofocus.es/', 20)
            newLine(true);
            break;

        case '/help':
            newLine();
            await writeText('Comandos disponibles: contacto, proyectos, info', 20);
            newLine(true);
            break;

        case 'exit':
            window.open('', '_self', '');
            window.close();
            break;

        default:
            newLine();
            await writeText('Commando no encontrado...', 20)
            newLine(true);
            break;
    }
};

let writeText = (text: string, time?: number, link = false) => {
    textToWrite = text;
    let promise = new Promise(resolve => {
        let i: number, milliseconds = time || 50;
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
                    if (link.includes('@')) a.href = 'mailTo:';
                    else a.href = 'https://';
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
}


newLine();
writeText('Bienvenid@').then(async () => {
    newLine();
    await writeText('Escribe el comando o /help para ver la lista de comandos posibles.', 30);
    newLine(true);
});

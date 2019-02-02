var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let divConsole = document.getElementById('console'), firstText = 'Miguelmo@home:~$ ', actualParagraph, textToWrite, index = 0;
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
            if (e.key === 'Enter' || e.keyCode === 13)
                analiceText();
        });
    }
    else
        newP.textContent = initial ? firstText : '';
    divContainer.appendChild(newP);
    divConsole.appendChild(divContainer);
    setScroll();
    if (contenteditable)
        actualParagraph.focus();
};
let analiceText = () => __awaiter(this, void 0, void 0, function* () {
    actualParagraph.removeAttribute('contenteditable');
    switch (actualParagraph.textContent.trim().toLocaleLowerCase()) {
        case 'contacto':
        case 'contactos':
        case 'contactar':
            newLine(false, false);
            yield writeText('miguelmoyaortega@gmail.com', 10, true);
            newLine(true);
            break;
        case 'info':
        case 'informacion':
            newLine(false, false);
            yield writeText('Nombre: Miguel Moya Ortega', 10);
            newLine(false, false);
            yield writeText('Sant Vicent del Raspeig, Alicante, España', 10);
            newLine(false, false);
            yield writeText('Desarrollador web en Bitapp', 10);
            newLine(true);
            break;
        case 'proyectos':
        case 'proyecto':
            newLine(false, false);
            yield writeText('https://isofocus.es/', 20);
            newLine(true);
            break;
        case '/help':
            newLine();
            yield writeText('Comandos disponibles: contacto, proyectos, info', 20);
            newLine(true);
            break;
        case 'exit':
            window.open('', '_self', '');
            window.close();
            break;
        default:
            newLine();
            yield writeText('Commando no encontrado...', 20);
            newLine(true);
            break;
    }
});
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
writeText('Bienvenid@').then(() => __awaiter(this, void 0, void 0, function* () {
    newLine();
    yield writeText('Escribe el comando o /help para ver la lista de comandos posibles.', 30);
    newLine(true);
}));

let divConsole = document.getElementById('console'), // Elemento de la consola
firstText = 'Miguelmo@home:~$ ', actualSpan, textToWrite, index = 0;
let newLine = () => {
    let newSpan = document.createElement('span');
    newSpan.textContent = firstText || '';
    divConsole.appendChild(newSpan);
    actualSpan = newSpan;
    return newSpan;
};
let writeText = (text, time) => {
    textToWrite = text;
    let promise = new Promise(resolve => {
        let i, milliseconds = time || 50;
        for (i = 0; i < textToWrite.length; i++) {
            setTimeout(() => {
                actualSpan.textContent += textToWrite[index];
                index++;
            }, i * milliseconds);
        }
        setTimeout(() => {
            index = 0;
            resolve();
        }, i * milliseconds);
    });
    return promise;
};
//LÓGICA DEL CODIGO
newLine();
writeText('Bienvenid@ a mi web').then(() => {
    newLine();
    writeText('Datos:').then(() => {
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

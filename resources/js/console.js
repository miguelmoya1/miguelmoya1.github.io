var divConsole = document.getElementById('console'), firstText = 'Miguelmo@home:~$ ';
function createNewLine(toInsert) {
    var newSpan = document.createElement('span');
    newSpan.textContent = toInsert || '';
    divConsole.appendChild(newSpan);
    return newSpan;
}
;
createNewLine(firstText);

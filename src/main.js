const { ipcRenderer } = require('electron')

function OpenTab(el, id){
    var mainOptions = document.getElementById("mainOptions");
    var main = document.getElementById("main");

    for(let i = 0; i < mainOptions.children.length; i++){
    mainOptions.children[i].style.backgroundColor = "#598392";
    mainOptions.children[i].style.color = "#01161E";
    }

    for(let i = 0; i < main.children.length; i++){
    main.children[i].style.display = "none";
    }
    
    el.style.backgroundColor = "#01161E";
    el.style.color = "#EFF6E0";
    main.children[id].style.display = "block";
}

function AddToList(){
    var listText = document.getElementById("listText");
    var listBody = document.getElementById("listBody");

    if(listText.value.trim() == "")
    return;

    listBody.insertAdjacentHTML('beforeend', `
        <div class="listQuestion"><div class="listQuestionName">${listText.value}</div><div class="listRemoveButton" onclick="RemoveFromList(this)"><span>-</span></div></div>
    `);

    listText.value = "";
}

function RemoveFromList(el){
    el.parentElement.remove()
}

var alwaysOnTop = false;
function AlwaysOnTop(el){
    alwaysOnTop = !alwaysOnTop;

    el.style.color = (alwaysOnTop) ? "#01161E" : "#598392";

    ipcRenderer.send('alwaysOnTop', alwaysOnTop);
}

function Minimize(){
    ipcRenderer.send('minimize');
}

function Close(){
    ipcRenderer.send('close');
}
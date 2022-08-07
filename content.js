//only make the menu appear when a claim code is selected
document.addEventListener("mousedown", function(event){
    var selection = window.getSelection().toString();
    if(selection.match(/^\s*[a-zA-Z0-9]{4}-[a-zA-Z0-9]{6}-[a-zA-Z0-9]{4}\s*$/)) {
        chrome.runtime.sendMessage({cmd: "create_menu"});
    } else {
        chrome.runtime.sendMessage({cmd: "delete_menu"});
    }
}, true); 

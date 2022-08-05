document.addEventListener("mousedown", function(event){
    var selection = window.getSelection().toString();
    if(selection.match(/^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{6}-[a-zA-Z0-9]{4}$/)) {
        chrome.runtime.sendMessage({cmd: "create_menu"});
    } else {
        chrome.runtime.sendMessage({cmd: "delete_menu"});
    }
}, true); 
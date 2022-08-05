chrome.runtime.onMessage.addListener(function(request) {
    if(request.cmd == "create_menu") {
        chrome.contextMenus.removeAll(function() {
            chrome.contextMenus.create({
                "id": "1",
                "title" : "Redeem Amazon code: %s",
                "contexts" : ["selection"]
            });
        });
    } else if(request.cmd == "delete_menu") {
        chrome.contextMenus.removeAll();
    }
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function generateOnclick(info){
    //console.log("https://www.amazon.com/gc/redeem?code="+ info.selectionText +"&skipReveal=true");
    chrome.tabs.create({url : "https://www.amazon.com/gc/redeem?code="+ info.selectionText +"&skipReveal=true"});
} )

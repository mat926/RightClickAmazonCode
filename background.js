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
chrome.contextMenus.onClicked.addListener( function generateOnclick(info){
    // //console.log("https://www.amazon.com/gc/redeem?code="+ info.selectionText +"&skipReveal=true");
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    //     chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
    //       console.log(response.farewell);
    //     });
    //   });
    chrome.tabs.create({url: 'http://google.de'}, function (tab) {  //inject content script
    console.info("the tab is: " + tab.id)
        chrome.tabs.sendMessage(tab.id, {greeting: "hello"});  //send message to content script
    
});


})

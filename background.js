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
chrome.contextMenus.onClicked.addListener((info) => {
    chrome.tabs.create({
        url: "https://www.amazon.com/gc/redeem"}, function(tab) {
        chrome.scripting.executeScript({target: {tabId: tab.id}, args: [extractClaimCode(info.selectionText)],
            func: (code)=> {
                document.getElementById("gc-redemption-input").value=code
            }
        });
      });
})

function extractClaimCode(text) {
    const pattern = /[a-zA-Z0-9]{4}-[a-zA-Z0-9]{6}-[a-zA-Z0-9]{4}/
    let match = text.match(pattern);
    return match !== null ? match[0] : null;
}

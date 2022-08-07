

document.addEventListener("mousedown", function(event){
    //alert("hello world");
    var selection = window.getSelection().toString();
    if(selection.match(/^[a-zA-Z0-9]{4}-[a-zA-Z0-9]{6}-[a-zA-Z0-9]{4}$/)) {
        chrome.runtime.sendMessage({cmd: "create_menu"});
    } else {
        chrome.runtime.sendMessage({cmd: "delete_menu"});
    }
}, true); 

document.addEventListener("DOMContentLoaded", (event) => {
//alert("DOMContentLoaded")
})

 chrome.runtime.onMessage.addListener(function(request,sender, sendResponse){
    alert("received")
    console.log("received")
    document.getElementById('sb_form_q').value="hello world";
    //     console.log(sender.tab ?
//         "from a content script:" + sender.tab.url :
//         "from the extension");
//    // chrome.tabs.create({url : "https://www.google.com"});
//     alert("dd")
 })
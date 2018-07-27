var menuItem  = {
  "id"  : "createko",
  "title"  : "Create Ko",
  "contexts"  : ["selection"]
};

chrome.contextMenus.create(menuItem);

function fixedEncodeURI(str){
  return encodeURI(str).replace(/%5B/g,'[').replace(/%5B/g,']'); 
}

chrome.contextMenus.onClicked.addListener(function(clickData){
  if(clickData.menuItemId == 'createko' && clickData.selectionText) {
       chrome.tabs.create({url:'options.html?data='+ clickData.selectionText });
  }
});


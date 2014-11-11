chrome.browserAction.onClicked.addListener(function(activeTab) {
	if (activeTab.url.search(/^http[s]?:\/\//) == 0)
		chrome.tabs.create({ url: "https://web.archive.org/save/" + activeTab.url });
});

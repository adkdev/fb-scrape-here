function scrape(info, tab) {
	// console = chrome.extension.getBackgroundPage().console;
	// console.log(info.pageUrl);
	chrome.tabs.create({
		url: "https://developers.facebook.com/tools/debug/og/object/?q=" + encodeURIComponent(info.pageUrl),
	})
}

chrome.contextMenus.create({
	title: "Scrape this page",
	contexts: ["all"], 
	onclick: scrape,
});
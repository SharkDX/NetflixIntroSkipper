
const runScript = () => {
	window.setInterval(handle_click, 2000);
	//document.getElementsByClassName("tabbed-primary-navigation")[0].addEventListener("click", handle_click);
}

chrome.runtime.onConnect.addListener(runScript());

function handle_click()
{
	collection = document.getElementsByClassName("skip-credits");

	if (collection.length > 0)
	{
		console.log("Found it!!");
		skipBtn = collection[0];
		skipBtn.children[0].click();

		setTimeout(play_if_paused, 1000);

	}
}

function play_if_paused()
{
	playCollection = document.getElementsByClassName("button-nfplayerPlay");
	if (playCollection.length > 0)
	{
		console.log("Play");
		playCollection[0].click()
	}
}
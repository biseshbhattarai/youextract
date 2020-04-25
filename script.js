//Hello people from update brach
chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
    alert(getdata(url));
    new_url = getdata(url);
    const Http = new XMLHttpRequest();
	const url_='http://127.0.0.1:5000/'+new_url+'/';
	Http.open("GET", url_);
	Http.send();
	Http.onreadystatechange = (e) => {
  		console.log(Http.responseText)
  	}
});

function getdata(url){
	return url.split('=')[1];
}

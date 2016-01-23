//12. Write a JavaScript program to get the website URL (loading page).
function getUrl() {
	console.log(document.location.href) // get full url e.g http://example.com/galery/img.jpg
    console.log(document.location.origin) // get only origin e.g. http://example.com
    console.log(document.location.host) // get host e.g.  example.com
}

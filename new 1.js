/* GET parameter from the URL */

var url_string = "http://www.example.com/about?from=hcp"; //window.location.href
var url = new URL(url_string);
var c = url.searchParams.get("from");
console.log(c);

if(c == hcp){
document.cookie = 	"name = hcp";
}

-------------------------------------------------------------------------------------------------------------
/* Check cookie in the browser */

var cookies = document.cookie
    .split(';')
    .map(cookie=>cookie.split('='))
    .reduce((accumulator, [key, value]) =>
        ({...accumulator, [key.trim()]: decodeURIComponent(value)}),
            {});
			

---------------------------------------------------------------------------------------------------------------
			
if(cookies.name == hcp){
display:none;

} 


--------------------
var links = document.querySelectorAll("a");
for (var i = 0; i < links.length; i++) {
  var link = links[i].getAttribute("href");
  
  if(link =="https://www.google.com/"){
	  
	link.setAttribute('href','https://www.replace.com/')
	
  }
  else{
  console.log(link);}
}



-------------------------------------------------------------
	
	 var tagName = document.querySelectorAll("a[href^='https://www.w3schools.com/js/']");
    for (var values of tagName.values()) {
        values.style.display = 'none'

    }

	
	--------------------------------------------------






var links = document.querySelector('a[href="https://www.google.com/"]');
if(links){
links.setAttribute('href','https://www.replace.com/')
}
console.log(links);

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

------------------------------------------------------------------------------------------------------------------
<html>


<body>
    <div>
        <a href="https://www.naukri.com/mnjuser/homepage">AAAAAA</a>
        <a href="https://www.w3schools.com/js/">BBBBBB</a>
        <a href="https://www.google.com/">CCCCCC</a>
        <a href="https://www.w3schools.com/js/">DDDDDD</a>
        <form action="https://www.google.com/">Submit 1</form>
        <button type="submit">Submit 4</button>

        <button type="submit">Submit 5</button>
        <form action="https://www.w3schools.com/js/">Submit 2</form>
        <form action="https://www.naukri.com/mnjuser/homepage">Submit 3</form>



    </div>
</body>
<script>
    /* Hide "a" href links */
    /*  var tagName = document.querySelectorAll("a[href ='https://www.w3schools.com/js/']");
     console.log(tagName);
     for (var values of tagName.values()) {
         values.style.display = 'none'
}
  */

    /* var tagName = document.querySelectorAll("a[href^='https://www.w3schools.com/js/'],form[action^='https://www.w3schools.com/js/']")
        .forEach(node => node.style.display = 'none'); */

    var button = document.querySelectorAll("button[type^='submit']");
    var form = document.querySelectorAll("form[action^='https://www.w3schools.com/js/']")
    for (var values of button.values());
    for (var forms of form.values());

    if (values.type == "submit" && forms.action == "https://www.w3schools.com/js/") {
        values.forEach(node => node.style.display = 'none');
        console.log("DONE");
    }






</script>
<!-- To hide the element ,It must be anchor tag & specific link -->

</html>
	
----------------------------------------------------------------------------------------------------------------

  
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

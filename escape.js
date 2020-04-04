function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('testeeeeeeeeeeeeeeeee');
    }
  };
  xhttp.open("GET", "https://timestamilnews.com/amp/newsAnalysis/95", true);
  xhttp.send();
}
loadDoc();

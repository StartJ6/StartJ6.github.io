function searchQuery(event){
    if (event.keyCode != 13){
        return;
    }
    var query = document.getElementById("search-bar").value;
    query = query.replace("+", "%2B");
    query = query.split(" ");
    query = query.join("+");
    console.log(query);
    window.location.assign("https://duckduckgo.com/?t=ffab&q="+ query);
}

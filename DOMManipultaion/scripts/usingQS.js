var lita = document.querySelectorAll("li");
for (var i = 0; i < lita.length; i++) {
    if (i%2===0) {
        lita[i].className = "even";
    }
    else {
        lita[i].className = "odd";
    }
    
}
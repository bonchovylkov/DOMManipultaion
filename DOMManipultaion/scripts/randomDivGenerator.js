function onGenerateBoxesButtonClick() {
    var contentDiv = document.getElementById("content");
     maxWidth = 1100 ;
     maxHeight = 550;
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    var divsNumber = (document.getElementById("number").value | 0) || 5;
    var dfrag = document.createDocumentFragment();
    for (var i = 0; i < divsNumber; i++) {
        var divElement = makeRandomDiv();
        dfrag.appendChild(divElement);
    }
    contentDiv.appendChild(dfrag);
}
function makeRandomDiv() {
    var divElement = document.createElement("div");
    divElement.style.width = ((Math.random() * 100) | 20)+"px";
    divElement.style.height = ((Math.random() * 100) | 20) + "px";
    divElement.style.borderRadius = ((Math.random() * 25) | 5) + "px";
    divElement.style.borderWidth = ((Math.random() * 20) | 1) + "px";
    divElement.style.backgroundColor = makeRandomColor();
    divElement.style.borderColor = makeRandomColor();
    divElement.style.color = makeRandomColor();
    divElement.style.position = "absolute";
    var topPos = parseInt(Math.random() * (maxHeight - 40));
    divElement.style.top = topPos + "px";
    var topLeft = parseInt(Math.random() * (maxWidth - 40));
    divElement.style.left = topLeft + "px";
    divElement.appendChild(createStronElement());
    return divElement;
}
function makeRandomColor() {
    var red = ((Math.random() * 256) | 0);
    var green = ((Math.random() * 256) | 0);
    var blue = ((Math.random() * 256) | 0);
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function createStronElement() {
    var strongElement = document.createElement("strong");
    strongElement.innerText = "div";
    return strongElement;
}
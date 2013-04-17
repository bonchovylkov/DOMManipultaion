function readTheWords() {
    var wordsAsString = document.getElementById("textarea").value;
    var separatedWords = wordsAsString.split(",");
    for (var i = 0; i < separatedWords.length; i++) {
        separatedWords[i] = separatedWords[i].trim();
    }
    separatedWords.sort();
    createTheCloud(separatedWords);
}
function createTheCloud(separatedWords) {
    var contentDiv = document.getElementById("content");
    while (contentDiv.firstChild) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
    var countWordsAppearance = [];
    for (var i = 0; i < separatedWords.length; i+=countAppearances) {
        var countAppearances = 1;
        var index = i+1;
        while (index<separatedWords.length && separatedWords[i]===separatedWords[index]) {
            countAppearances++;
            index++;
        }
        countWordsAppearance.push({ key: separatedWords[i], count: countAppearances })
    }

    var stepOfreduction = fontSizeAlgoritm(countWordsAppearance, 30);
    var minCountWords=getMinCountWord(countWordsAppearance);
    var maxCountWords=getMaxCountWord(countWordsAppearance);
    for (var i = 0; i <countWordsAppearance.length; i++) {
        var paragraphElement = document.createElement("p");
        paragraphElement.innerText = countWordsAppearance[i].key;
        paragraphElement.style.position = "absolute";
        paragraphElement.style.color = makeRandomColor();
        paragraphElement.style.left = ((Math.random() * 1000) | 100) + "px";
        paragraphElement.style.left = ((Math.random() * 320) | 60) + "px";
        if (countWordsAppearance[i].count===minCountWords) {
            paragraphElement.style.fontSize = 20 + "px";
        }
        else if (countWordsAppearance[i].count === maxCountWords) {
            paragraphElement.style.fontSize = 50 + "px";
        }
        else {
            paragraphElement.style.fontSize = (countWordsAppearance[i].count * stepOfreduction) + "px";
        }
        contentDiv.appendChild(paragraphElement);
    }

}
function makeRandomColor() {
    var red = ((Math.random() * 256) | 0);
    var green = ((Math.random() * 256) | 0);
    var blue = ((Math.random() * 256) | 0);
    return "rgb(" + red + "," + green + "," + blue + ")";
}
function fontSizeAlgoritm(countWordsAppearance, maxFontSize) {
    var maxAppearances =getMaxCountWord(countWordsAppearance) ;
    var minApperances = getMinCountWord(countWordsAppearance);
    var timesBigger = maxAppearances / minApperances;
    var stepOfreduction = maxFontSize / timesBigger;
    return stepOfreduction;
}
function getMaxCountWord(countWordsAppearance){
    var maxAppearances = 0;
    for (var i = 0; i < countWordsAppearance.length; i++) {
        if (countWordsAppearance[i].count>maxAppearances) {
            maxAppearances = countWordsAppearance[i].count;
        }
    }
    return maxAppearances;
}
function getMinCountWord(countWordsAppearance){
    var minApperances = 99999999;
    for (var i = 0; i < countWordsAppearance.length; i++) {
         if (countWordsAppearance[i].count<minApperances) {
            minApperances = countWordsAppearance[i].count;
        }
    }
    return minApperances;
}
String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, ''); };
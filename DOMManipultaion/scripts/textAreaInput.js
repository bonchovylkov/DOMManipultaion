function setTheFontColor(){
   
    var color = document.getElementById("fontColor").value;
    var textarea=document.getElementsByTagName("textarea")[0];
    textarea.style.color=color;

}
function setThebackgroundColor() {
    color = document.getElementById("backgroundColor").value;
    var textarea = document.getElementsByTagName("textarea")[0];
    textarea.style.backgroundColor = color;
}
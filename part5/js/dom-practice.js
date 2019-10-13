/*eslint-env browser*/

//STEP 1
function showAlert()
{
    window.alert("I have been clicked");
}

//STEP 2
var btnDOMElement = document.getElementById("btnDomElement");
btnDOMElement.onclick = function(e)
{
    "use strict";
    window.alert("I have been clicked");
}
//STEP 3
var btnDOMElement = document.getElementById("btnEventListener");
btnDOMElement.addEventListener("click",showAlert);
//STEP 4
btnDOMElement.addEventListener("click", function(e){
    window.alert("I have been clicked");
});
//STEP 5
window.addEventListener("load", function(){
    var btnDOMElement = document.getElementById("btnEventListener");
    btnDOMElement.addEventListener("click", function(e){
        window.alert("I have been clicked");
    });
}, false);

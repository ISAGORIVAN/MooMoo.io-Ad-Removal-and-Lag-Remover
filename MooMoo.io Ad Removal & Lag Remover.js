// ==UserScript==
// @name         MooMoo.io Ad Removal and Lag Remover (Work In Progress)
// @version      v1.6
// @description  Removes ads in MooMoo.io. Fixes bugs that AdBlocker won't catch. This script is not backdoored and will never be. Please give feedback and tell us if this works. This also blurs the pixel a little to make your game run smoother.
// @author       Morpehus and Ivan
// @match        *://*.moomoo.io/*
// @namespace    https://www.youtube.com/ivansucksatgaming
// @namespace    https://www.youtube.com/channel/UCKYi6q-dq2yiNdEHPuJRMxw
// ==/UserScript==
document.querySelectorAll("#adCard, #pre-content-container").forEach(function(a){
a.remove();
});
document.getElementsByClassName("menuCard")[4].remove();
document.getElementsByClassName("menuCard")[2].remove();
window.devicePixelRatio = 0.8;
var clearIframes = setInterval(function(){
    for (var i = 0; i < document.getElementsByTagName("iframe").length; i++){
    document.getElementsByTagName("iframe")[i].remove();
    }
if(document.getElementsByTagName("iframe").length === 0){
clearInterval(clearIframes);
}
}, 50);
$("#moomooio_728x90_home").parent().css({display: "none"});
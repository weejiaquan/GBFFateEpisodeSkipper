// ==UserScript==
// @name         GBF Fate Episode Assist
// @namespace    http://arisu.ml
// @version      1
// @description  No time for pressing skip and back to fate episode
// @author       Lychwee
// @match        http://game.granbluefantasy.jp/
// @grant        none
// ==/UserScript==

window.onload = function(){
check1();
setTimeout(check2,2000);
}
function check1(){
    if(document.location.href.includes("http://game.granbluefantasy.jp/#quest/scene/")){
        location.replace("http://game.granbluefantasy.jp/#result/quest/");
    }
}
function check2(){
    if(document.location.href.includes("http://game.granbluefantasy.jp/#result/quest/")){
        location.replace("http://game.granbluefantasy.jp/#quest/fate");
    }
}

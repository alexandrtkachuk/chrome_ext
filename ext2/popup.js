elem.onclick = function() {


    var script = 'test();';

    chrome.tabs.executeScript({
        code: script
    });



    //*/

    //alert($( "#yoyo" ).html());

    //$( "#yoyo" ).html( "Next Step..." );
    //location.href = 'http://ya.ua/';
    //window.location.href = "http://stackoverflow.com";
    //*/



};


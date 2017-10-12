elem.onclick = function() {


    var script = 'console.log("maybe done");';

    chrome.tabs.executeScript({
        code: script
    });




    //alert('Temp');

    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
    var jqxhr = $.get( "http://192.168.56.100/test.php", function() {
        alert( "success" );
    })
        .done(function() {
            alert( "second success" );
        })
        .fail(function() {
            alert( "error" );
        })
        .always(function() {
            alert( "finished" );
        });

// Perform other work here ...

// Set another completion function for the request above
    jqxhr.always(function() {
        alert( "second finished" );
    });
    //location.href = 'http://ya.ua/';
    //window.location.href = "http://stackoverflow.com";
    //*/



};



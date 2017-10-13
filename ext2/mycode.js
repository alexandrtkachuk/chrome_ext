

function test() {
    console.log('test run');

    //$( "#yoyo" ).html( "Next Step..." );


    //*$.get( "http://localhost:8000/", function( data ) {

        //alert( "Load was performed." );

        //console.log(data.me);
    //});
    /*
    //console.log(document.body);
    var temp = document.body.innerHTML;
    //console.log(temp)
    //console.log(atob(temp))
    //var zz = 234;
    $.post( "http://localhost:8000/", { name: "John", time: "2pm", body: temp})
        .done(function( data ) {
            console.log(data);
            console.log('done');
        });

    */
    chrome.socket.create("tcp", null, function(createInfo) {
        alert(createInfo.socketId);
        theSocketId = createInfo.socketId;
        chrome.socket.connect(theSocketId, "www.yahoo.com", 80, function(result) {
            alert(result);
            if (result === 0) {
                chrome.socket.read(theSocketId, 1000, function(readInfo) {
                    alert(readInfo.resultCode);
                });
            }
        });
    });
}

function test2() {

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = 'fdsfsd'; // Implemented elsewhere.
    xhr.open("GET", 'http://localhost:8000/', true);
    xhr.send();
}
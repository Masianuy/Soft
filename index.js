// fetch("list.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
//       .then((res) => res.json())
//       .then((data) => console.log(data));

// var requestURL = 'https://github.com/Masianuy/Soft/blob/main/list.json';
// console.log(requestURL.responseText);

function loadJSON(callback) {

    const xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'list.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {

            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        }
    }
    xobj.send(null);

}

// Call to function with anonymous callback
loadJSON(function(response) {
    // Do Something with the response e.g.
    //jsonresponse = JSON.parse(response);

    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(loadJSON);

});

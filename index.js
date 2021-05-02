let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        
        let output = "";
        for (let i=0; i<myArr.length; i++) {
            output += '<li>' + myArr[i].name + '</li>';
//             console.log(myArr[i].name);
        }
        document.getElementById("demo").innerHTML = output;
    }
};
xmlhttp.open("GET", "list.json", true);
xmlhttp.send();

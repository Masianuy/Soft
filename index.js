var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        for (let i=0; i<myArr.length; i++) {
            console.log(myArr[i].name);
//             document.getElementById("demo").innerHTML = myArr[i].name;
        }
//         document.getElementById("demo").innerHTML = myArr['1'].name;
    }
};
xmlhttp.open("GET", "list.json", true);
xmlhttp.send();

// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         var myArr = JSON.parse(this.responseText);
//         document.getElementById("demo").innerHTML = myArr[name];
//     }
// };
// xmlhttp.open("GET", "list.json", true);
// console.log(xmlhttp);
// xmlhttp.send();

var requestURL = 'https://github.com/Masianuy/Soft/blob/main/list.json';
console.log(requestURL.responseText);

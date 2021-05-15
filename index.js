

randomString();
function randomString() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
    let lenString = 5;
    let randomstring = '';
    for (let i=0; i<lenString; i++) {
        let rnum = Math.floor(Math.random() * characters.length);
        randomstring += '<option>' + characters.substring(rnum, rnum+1) + '</option>';
    } 
    document.getElementById("randomfield").innerHTML = randomstring;
}

const listLetters = document.getElementById('randomfield');
const letter = listLetters.querySelectorAll('option');
const ul = document.getElementById("demo");


let request = new XMLHttpRequest();
    request.open("GET", "list.json", true);
      request.onload = function () {
      let users = JSON.parse(this.response);
      let output = '';
      for (var i = 0; i < users.length; i++) {
        output += '<li>' + users[i].name +  '</li>'
      }
      document.getElementById('demo').innerHTML = output;
    }
    request.send();

listLetters.addEventListener('click', e => {
    const target = e.target;

        let targetInner = target.innerHTML;
        function startJson () {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const myArr = JSON.parse(this.responseText);
                    delLi();
                    function delLi() {
                        let lit = document.querySelectorAll('li');
                        for (let i = 0; i<lit.length; i++) {
                            lit[i].classList.add('hide');
                        }
                    };
                    for (let i=0; i<myArr.length; i++) {
                        if (myArr[i].name[0] == targetInner) {
                            let li = document.createElement('li');
                            li.innerText = myArr[i].name;
                            ul.appendChild(li);
                        }  else if (myArr[i].name[0] =! targetInner) {
                            let span = document.createElement('span');
                            span.innerText = 'Error';
                            ul.appendChild(span);
                        };
                    };
                }
            };
            xmlhttp.open("GET", "list.json", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send();
        }
        
        startJson ();
    
});

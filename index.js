

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

        delLi();
        function delLi() {
            let lit = document.querySelectorAll('li');
            for (let i = 0; i<lit.length; i++) {
                lit[i].classList.add('hide');
            }
        };
const listLetters = document.getElementById('randomfield');
const letter = listLetters.querySelectorAll('option');
const ul = document.getElementById("demo");


let request = new XMLHttpRequest();
    request.open("GET", "list.json", true);
      request.onload = function () {
      let users = JSON.parse(this.response);
      let output = '';
      listLetters.addEventListener('click', e => {
        const target = e.target;
        let targetInner = target.innerHTML;
        for (let i=0; i<users.length; i++) {
            if (users[i].name[0] == targetInner) {
                output += '<li>' + users[i].name +  '</li>'
              }
              document.getElementById('demo').innerHTML = output;
            } 
        })
    }
    request.send();

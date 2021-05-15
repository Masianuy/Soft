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
      listLetters.addEventListener('click', e => {
        const target = e.target;
        let targetInner = target.innerHTML;
        for (let i=0; i<users.length; i++) {
            if (users[i].name[0] == targetInner) {
                let li = document.createElement('li');
                li.innerText = users[i].name;
                ul.appendChild(li);
            }
//             document.getElementById('demo').innerHTML = output;
        }
      })
    }
    request.send();

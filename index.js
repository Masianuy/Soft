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

listLetters.addEventListener('click', e => {
    const target = e.target;
    if(target.matches('option')) {
        removeActiveElement();
        target.classList.add('activ');

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
                        if (myArr[i].name[0] === targetInner) {
                            let ul = document.getElementById("demo");
                            let li = document.createElement('li');
                            li.innerText = myArr[i].name;
                            ul.appendChild(li);
                        } else if (myArr[i].name[0] ==! targetInner) {
                            console.log('errrr');
                        }
                    };
                } 
            };
            xmlhttp.open("GET", "list.json", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send();
        }
        
        startJson ();
    }
});
const removeActiveElement = () => {
    letter.forEach(elem => elem.classList.remove('activ'));
} 

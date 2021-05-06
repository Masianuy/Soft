
    
randomString();
function randomString() {
            //define a variable consisting alphabets in small and capital letter
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
            
            //specify the length for the new string
    let lenString = 5;
    let randomstring = '';

            //loop to select a new character in each iteration
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
console.log(target);
    if(target.matches('option')) {
        removeActiveElement();
        target.classList.add('activ'); 

        let targetInner = target.innerHTML;
        function startJson () {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const myArr = JSON.parse(this.responseText);
        
                    for (let i=0; i<myArr.length; i++) {
                        if (myArr[i].name.substr(0,1) === targetInner) {
                            let li = document.createElement('li');
                            li.innerText = myArr[i].name;
                            document.getElementById("demo").appendChild(li);
                        } 
                    };
                }
            };
            xmlhttp.open("GET", "list.json", true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xmlhttp.send();
        }
        
        startJson (this.innerHTML);
    }
});
const removeActiveElement = () => {
    letter.forEach(elem => elem.classList.remove('activ'));
} 

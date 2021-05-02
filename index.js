
    
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
        randomstring += '<li>' + characters.substring(rnum, rnum+1) + '</li>';
    } 
    document.getElementById("randomfield").innerHTML = randomstring;
}

const listLetters = document.getElementById('randomfield');
const letter = listLetters.querySelectorAll('li');

listLetters.addEventListener('click', e => {
    const target = e.target;

    if(target.matches('li')) {
        removeActiveElement();
        target.classList.add('activ'); 
        let targetInner = target.innerHTML;
        function     {
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    const myArr = JSON.parse(this.responseText);
        
                    // console.dir(myArr);
                    myArr.forEach(element => {
        
                        if (element.name.slice[0,1] == targetInner) {
                            let span = document.createElement('span');
                            span.innerText = element.name;
                            document.body.appendChild(span);
                            document.body.appendChild(document.createElement('br'));
                            console.log(liActive);
                        }
                    });
        
                    // myArr.array.forEach(element => {
                    //     let span=document.createElement('span');
                    //     span.innerText=element.name;
                    //     document.body.appendChild(span);
                    //     document.body.appendChild(document.createElement('br'));
                    // });
                    // let output = "";
                    // for (let i=0; i<myArr.length; i++) {
                    //     output += '<li>' + myArr[i].name + '</li>';
                    // }
                    // document.getElementById("demo").innerHTML = output;
                }
            };
            xmlhttp.open("GET", "list.json", true);
            xmlhttp.send();
        }
        }
        startJson ()
    });
const removeActiveElement = () => {
    letter.forEach(elem => elem.classList.remove('activ'));
} 

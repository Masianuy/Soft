let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let myArr = JSON.parse(this.responseText);
        let output = "";
        for (let i=0; i<myArr.length; i++) {
            output += '<li>' + myArr[i].name + '</li>';
        }
        document.getElementById("demo").innerHTML = output;
    }
};
xmlhttp.open("GET", "list.json", true);
xmlhttp.send();

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

             //display the generated string 
	document.getElementById("randomfield").innerHTML = randomstring;
}


const listLetters = document.getElementById('randomfield');
const letter = listLetters.querySelectorAll('#randomfield li');

console.log(letter);

listLetters.addEventListener('click', e => {
    const target = e.target;

    if(target.matches('#randomfield li')) {
        target.str.includes("R");
    //    removeActiveElement();
    //    target.classList.add('positions-active'); 
    }
});

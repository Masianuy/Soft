fetch("list.json", { mode: "no-cors" }) // disable CORS because path does not contain http(s)
      .then((res) => res.json())
      .then((data) => console.log(data));

// var requestURL = 'https://github.com/Masianuy/Soft/blob/main/list.json';
// console.log(requestURL.responseText);

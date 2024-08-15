// console.log(window.document);

// -------------selectors----------

// id

let heading = document.getElementById("heading");
console.log(heading);

// get data
// console.log(heading.innerText);
// console.log(heading.innerHTML);

//set data

// heading.innerText = "hello aman";
// heading.innerHTML = "hello aman <button>button</button>"
// console.log(heading.id);
// heading.id = "head";





// let x = "2" + 2 + "2";
// let x2 = "2" + 2 - "2";
// console.log(x);
// console.log(typeof x);
// console.log(x2);
// console.log(typeof x2);





// class
let className = document.getElementsByClassName("para");
// console.log(className);
console.log(heading.className);
// heading.className = "red";
console.log(heading.classList);

//add class
heading.classList.add("masoom");

//remove class
heading.classList.remove("para");

//toggle effect
heading.classList.toggle("para");

// inline styling
// console.log(heading.style);
heading.style.backgroundColor = "blue";
heading.style.color = "#fff";

heading.style.height = '100px';
heading.style.width = '100px';
heading.style.textAlign = "center";

//to remove element
heading.remove()



// element/tagname


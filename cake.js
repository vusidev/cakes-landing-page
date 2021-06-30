

//create nav
const nav = document.createElement("nav");
//create ul
const ul = document.createElement("ul");
ul.className = "navBar";
ul.id = "navBar";
//create li
let l1 = document.createElement("li");
l1.innerHTML = '<a href="index.html">Home</a>';
let l2 = document.createElement("li");
l2.innerHTML = '<a href="product.html">Product</a>';
let l3 = document.createElement("li");
l3.innerHTML = '<a href="about.html">About</a>';
let l4 = document.createElement("li");
l4.innerHTML = '<a href="contact.html">Contact</a>';
//append all element to the container
ul.appendChild(l1);
ul.appendChild(l2);
ul.appendChild(l3);
ul.appendChild(l4);
nav.appendChild(ul);
document.querySelector("body").appendChild(nav);


//create img
const img = document.createElement("img");
img.src = "back.jpeg";
document.querySelector("body").appendChild(img);

//create h1
const h1 = document.createElement("h1");
h1.className = "title";
h1.id = "title";
h1.innerHTML = "<u>Tiyies Cakes</u>";
document.querySelector("body").appendChild(h1);

 
//create p 
const s = document.createElement("p");
s.className = "slogan";
s.id = "slogan";
s.innerHTML = "<span>Simply</span> <b>Sweet.</b>";
document.querySelector("body").appendChild(s);

//create p 
const p = document.createElement("p");
p.className = "parag";
p.id = "parag";
p.innerHTML = "Different types of cakes each have their own set of ingredients and baking methods, and yield a unique flavor, come in so many shapes and sizes.";
document.querySelector("body").appendChild(p);

//create button
const btn = document.createElement("button");
btn.className = "btn";
btn.id = "btn";
btn.innerHTML = '<a href="more.html">Read More</a>';
document.querySelector("body").appendChild(btn);
 
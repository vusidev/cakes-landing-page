
const body = document.querySelector("body");
body.style.textAlign = "center";


//create h1
const h1 = document.createElement("h1");
h1.className = "title";
h1.id = "title";
h1.innerHTML = "Get in touch";
//style h1
h1.style.color = "black";
h1.style.fontSize = "26px";
h1.style.fontFamily = "sansSerif";
h1.style.marginTop = "20px";
document.querySelector("body").appendChild(h1);


//create h2
const h2 = document.createElement("h2");
h2.className = "subtitle";
h2.id = "subtitle";
h2.innerHTML = "Contact Number ";
//style h2
h2.style.color = "black";
h2.style.fontSize = "26px";
h2.style.fontFamily = "sansSerif";
h2.style.marginTop = "50px";
document.querySelector("body").appendChild(h2);


//create p
const h = document.createElement("p");
h.className = "number";
h.id = "number";
h.innerHTML = "0814047269<br>";
//style p
h.style.color = "black";
h.style.fontSize = "18px";
h.style.fontFamily = "sansSerif";
h.style.marginTop = "20px";
document.querySelector("body").appendChild(h);



//create h2
const t = document.createElement("h2");
t.className = "subtitle";
t.id = "subtitle";
t.innerHTML = "Email Address";
//style h2
t.style.color = "black";
t.style.fontSize = "26px";
t.style.fontFamily = "sansSerif";
t.style.marginTop = "20px";
document.querySelector("body").appendChild(t);



//create p
const e = document.createElement("p");
e.className = "email";
e.id = "email";
e.innerHTML = "matildatiyani@gmail.com<br>";
//style p
e.style.color = "black";
e.style.fontSize = "18px";
e.style.fontFamily = "sansSerif";
e.style.marginTop = "20px";
document.querySelector("body").appendChild(e);



//create h2
const l = document.createElement("h2");
l.className = "loca";
l.id = "loca";
l.innerHTML = "Location";
//style h2
l.style.color = "black";
l.style.fontSize = "26px";
l.style.fontFamily = "sansSerif";
l.style.marginTop = "20px";
document.querySelector("body").appendChild(l);


//create p
const loc = document.createElement("p");
loc.className = "loc";
loc.id = "loc";
loc.innerHTML = "Limpompo,<br> Giyani, <br>Dzingidzingi village<br><br>";
//style p
loc.style.color = "black";
loc.style.fontSize = "18px";
loc.style.fontFamily = "sansSerif";
loc.style.marginTop = "20px";
document.querySelector("body").appendChild(loc);

const hr = document.createElement("hr");
hr.style.border = "2px solid chocolate";
hr.style.width = "100%";
hr.style.float = "left";
hr.style.marginTop = "0px";
document.querySelector("body").appendChild(hr);


const div = document.createElement("div");
div.className = "pic";
div.id = "pic";
//create img
const imge = document.createElement("img");
imge.src = "footer.jpeg";
//style img
imge.style.width = "98%";
imge.style.height = "150px";
imge.style.borderBottomLeftRadius =  "50%";
imge.style.borderTopRightRadius = "50%";
div.appendChild(imge);
document.querySelector("body").appendChild(div);


const f = document.createElement("h2");
f.className = "footer";
f.id = "footer";
f.innerHTML = "Tiyies Cakes 2019 ©";
f.style.color = "black";
f.style.position = "relative";
f.style.top = "-80px";
f.style.fontSize = "17px";
f.style.fontFamily = "sansSerif";
document.getElementById("pic").appendChild(f);



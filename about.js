const body = document.querySelector("body");
body.style.textAlign = "center";


//create h1
const h1 = document.createElement("h1");
h1.className = "about";
h1.id = "about";
h1.innerHTML = "About Tiyies Cake<br><br>";
//style h1
h1.style.color = "black";
h1.style.fontSize = "30px";
h1.style.fontFamily = "sansSerif";
h1.style.marginTop = "20px";
document.querySelector("body").appendChild(h1);


//create p
const d = document.createElement("p");
d.className = "description";
d.id = "description";
d.innerHTML = "Been selling homemade cakes from home.Soon enough I started getting orders.Im a baker becouse i love the way cookies makes us all smile.I bake to delight your tastes, each and everyday i wake to fullfill your tastes.<br><br>";

//style p
d.style.color = "black";
d.style.fontFamily = "sansSerif";
d.style.fontSize = "18px";
d.style.marginRight = "10px";
d.style.marginLeft = "10px";
document.querySelector("body").appendChild(d);

//create img
const img = document.createElement("img");
img.src = "tiyani.jpg";
//style img
img.style.width = "280px";
img.style.height = "350px";
img.style.borderRadius =  "8px";
img.style.float = "center";
document.querySelector("body").appendChild(img);

//create hr
const hr = document.createElement("hr");
hr.style.border = "2px solid chocolate";
hr.style.width = "100%";
hr.style.float = "left";
hr.style.marginTop = "70px";
document.querySelector("body").appendChild(hr);

//create div
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

const h2 = document.createElement("h2");
h2.className = "footer";
h2.id = "footer";
h2.innerHTML = "Tiyies Cakes 2019 ©";
h2.style.color = "black";
h2.style.position = "relative";
h2.style.top = "-80px";
h2.style.fontSize = "17px";
h2.style.fontFamily = "sansSerif";
document.getElementById("pic").appendChild(h2);


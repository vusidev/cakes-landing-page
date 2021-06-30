const body = document.querySelector("body");
body.style.textAlign = "center";

const d = document.createElement("p");
d.className = "description";
d.id = "description";
d.innerHTML = "The bakery offers a broad range of freshly prepared baked products at all time during business operation.I offer Biscuits.Cookies.Birthday cakes.Cupcakes.Muffins baby shower cakes n many more.";

//style d
d.style.color = "black";
d.style.fontFamily = "sansSerif";
d.style.fontSize = "18px";
d.style.marginRight = "10px";
d.style.marginLeft = "10px";
d.style.marginTop = "20px";
document.querySelector("body").appendChild(d);
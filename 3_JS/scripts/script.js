//alert("AS esu JS faile")

console.log("AS esu konsoleje!");

document.write("As esu dokumente!");

var kintamojoPavadinimas = "kazkoks testas";
console.log(kintamojoPavadinimas);

var masyvas = ["Vardas", 23, true, null];
//masyvas.pop();
//masyvas.push("nauja reiksme");
masyvas.unshift(50);

console.log(masyvas);

var profile = {
    firstName: "Dmitrij", 
    lastName: "Balakajev",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }, 
    changeName: function(newFirstName) {
this.firstName = newFirstName;
    }
}

profile.changeName("Tadik");
console.log(profile.fullName());


var paragraph = document.createElement("p");
paragraph.innerText = "Tekstas idetas i elementa su JS."

document.body.prepend(paragraph);
  

//console.log(outro);



var button1 = document.querySelector("#change-p-color");

button1.addEventListener("click", function() {
var outro =document.querySelector("div.outro p");

if (outro.style.color == "red"){
    outro.style.color = "black";
} else {
    outro.style.color = "red";
}
});

document.addEventListener("keyup", function(event) {
    console.log(event.keyCode);
});

var button2 = document.querySelector("#change-img");
var i = 151;
button2.addEventListener("click", function(){



    var image = document.querySelector("div.gallery img");
    image.setAttribute("src", "https://picsum.photos/seed/" + Math.random() + "/150");
});

var images = document.querySelectorAll("div.gallery img");
 for (var j = 0; j< images.length; j++) {
     images[j].addEventListener("click", function(event) {

event.target.setAttribute("src", "https://picsum.photos/seed/" + Math.random() + "/150");
     });
 }


//console.log(masyvas.length);
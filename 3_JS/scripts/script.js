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



//console.log(masyvas.length);
let div = document.createElement("div");
div.innerHTML="I ahave inserted <b> by ushant "
div.setAttribute("class", "created");
document.querySelector(".container").append(div)
document.querySelector(".container").before(div)
document.querySelector(".container").after(div)

let cont =document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin","<b> i am under the water please help me here too much raining")

console.log(document.querySelector(".container").classList);
console.log(document.querySelector(".container").className);
console.log(document.querySelector(".container").classList.add("Ushant"));
console.log(document.querySelector(".container").classList.remove("Ushant"));
console.log(document.querySelector(".container").classList.toggle("Ushant"));
console.log(document.querySelector(".container").classList.toggle("red"));




// document.querySelector(".box").outerHTML
// '<div class="box">Hey i am a box </div>'
// document.querySelector(".box").tagName
// 'DIV'
// document.querySelector(".box").tagName
// 'DIV'
// document.querySelector(".box").nodeName
// 'DIV'
// document.querySelector(".box").textContent
// 'Hey i am a box '
// document.querySelector(".box").hidden
// false

// document.querySelector(".box").innerHTML="Hey i am ushant"
// 'Hey i am ushant'

// document.querySelector(".box").hasAttribute("style")
// true

// document.querySelector(".box").getAttribute("style")
// 'display: flex;'

// document.querySelector(".box").hasAttribute("style","display:inline")
// true

// document.querySelector(".box").removeAttribute("style")
// undefined

// document.querySelector(".box").dataset
// DOMStringMap { createdby: 'ushant' }

// document.querySelector(".box").dataset
// DOMStringMap { createdby: 'ushant', conceptby: 'arya' }


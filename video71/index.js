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

document.querySelector(".box").innerHTML="Hey i am ushant"
'Hey i am ushant'

document.querySelector(".box").hasAttribute("style")
true

document.querySelector(".box").getAttribute("style")
'display: flex;'

document.querySelector(".box").hasAttribute("style","display:inline")
true

document.querySelector(".box").removeAttribute("style")
undefined


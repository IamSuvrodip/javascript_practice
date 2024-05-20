/*
document.getElementById('title')
<h1 class=​"heading" id=​"title">​DOM LEARNING​</h1>​
document.getElementById('title').id
'title'
document.getElementById('title').class
undefined
document.getElementById('title').className
'heading'
document.getElementById('title').getAttribute
ƒ getAttribute() { [native code] }
document.getElementById('title').getAttribute('id')
'title'
document.getElementById('title').getAttribute('class')
'heading'
document.getElementById('title').getAttribute('className')
null
document.getElementById('title').setAttribute('class','test')
undefined
document.getElementById('title').getAttribute('class')
'test
*/
/*const title = document.getElementById('title')
undefined
title
<h1 class=​"heading" id=​"title">​DOM LEARNING​</h1>​
title.style.backgroundColor = 'green'
'green'
title.style.padding = "15px"
'15px'
title.style.borderRadius = "10px"
'10px'
title.textContent
'DOM LEARNING'
title.innerHTML
'DOM LEARNING'
title.innerText
'DOM LEARNING'.
title.innerText
'DOM LEARNING'
title.textContent
'\n        DOM LEARNING Youtube\n 

title.innerHTML
'\n        DOM LEARNING <span style="display: none">Youtube</span>\n      '
document.getElementsByClassName('heading')
HTMLCollection [h1#title.heading, title: h1#title.heading]

document.querySelector('p')
document.querySelector('#title')
<h1 class=​"heading" id=​"title">​…​</h1>​
document.querySelector('.heading')
document.querySelector('ul')
<ul>​…​</ul>​<li>​…​</li>​::marker​"one"</li>​<li>​…​</li>​<li>​…​</li>​</ul>​
const myul = document.querySelector('ul')
undefined
myul.querySelector('li')
<li>​…​</li>​
const turnGreen = myul.querySelector('li')
undefined
document.querySelector('input[type="password"]')


document.querySelectorAll('p')
turnGreen.style.backgroundColor = "green"
'green'
turnGreen.style.padding = "10px"
'10px'
turnGreen.style.borderRadius = "6px"
'6px
turnGreen.innerText
'one'
turnGreen.innerText = "Five"
'Five
const mylist = document.querySelectorAll('li')
undefined
mylist
NodeList(3) [li, li, li]
mylist[0].style.color = "green"
'green'
const myH1 = document.querySelectorAll('h1')
undefined
myH1
NodeList [h1#title.heading]
myH1[0].style.color = "green"
'green'
mylist.forEach(function (l) {
    l.style.backgroundColor = "pink"
})
document.getElementsByClassName('list-item')
HTMLCollection(3) [li.list-item, li.list-item, li.list-item]
const tempClassList = document.getElementsByClassName('list-item')

Array.from(tempClassList) // convert in array
const myConvertedArray = Array.from(tempClassList)
undefined
myConvertedArray
(3) [li.list-item, li.list-item, li.list-item]

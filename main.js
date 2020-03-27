// Document Objects

// console.dir(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "Item Lister" ;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]); // NOT GOOD SELECTING FROM DOM. 
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// getElementById
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';

// getElementsByClassName

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'JavaScript';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// Gives an error
// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// getElementsByTagName

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'JavaScript';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives an error
// // items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = '#f4f4f4';
// }

// QuerySelector

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = "Hello World";

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'blue';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// // QuerySelectorAll
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Traversing the dom

// var itemList = document.querySelector('#items');

// // ParentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#yellow';
// console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// Children 
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// FirstChild
// console.log(itemList.firstChild);
// // FirstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 4';

// LastChild
// console.log(itemList.lastChild);
// // LastElemenChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemList.nextSibling);
// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// CreateElement

// Create a div
// var newDiv = document.createElement('div');

// // Add Class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// // Add Attribute
// newDiv.setAttribute('title', 'Hello Div');

// // Create text Node
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// newDiv.style.fontSize = '30px';

// container.insertBefore(newDiv, h1);

// EVENTS

// var Button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
    //console.log('Button clicked');
    // document.getElementById('header-title').textContent = 'Changed';

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    
    // var output = document.getElementById('output');
    // output.innerHTML = ('<h3>'+e.target.id+'<h3>')

    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetY);
    
    // console.log(e.altKey);
    // console.log(e.cltKey);
    // console.log(e.shiftKey);
    
//}

var Button = document.getElementById('button');
var box = document.getElementById('box');


// button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent);

//box.addEventListener('mouseenter', runEvent);
//box.addEventListener('mouseleave', runEvent);

//box.addEventListener('mouseover', runEvent);
//box.addEventListener('mouseout', runEvent);


// box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);


// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);




function runEvent(e){
    console.log('EVENT TYPE: '+e.type);
    e.preventDefault();
    // console.log(e.target.value);
    // document.getElementById('output').innerHTML= '<h3>' +e.target.value+'</h3>';
    
    
    // output.innerHTML = '<h3>MouseX: '+e.offsetX+' <h3>MouseY: '+e.offsetY+'</h3>';

    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+",40)";

}































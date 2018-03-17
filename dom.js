//		EXAMIN THE DOCUMENT OBJECT   //
console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title =123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[7]);
document.all[7].textContent='Ahsan';  	//  change heading2
// document.all[8].textContent="Hello World";
console.log(document.forms[0]);
console.log(document.links);
console.log(document.images);

		  GetElementById			//
console.log(document.getElementById('header-title'));

var headerTitle=document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent='Hello';
headerTitle.innerText='GoodBye';
console.log(headerTitle.textContent);	// cant remove 123 of span
console.log(headerTitle.innerText);			// can remove  123 of span
headerTitle.innerHTML="<h2>New header Title</h2>"; // change title
headerTitle.style.borderBottom='solid 2px white';
header.style.borderBottom='solid 3px black';

		    GetElementBy Class Name		//
var items=document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[0].textContent='Ahsan';
items[1].textContent='Hello 2';
items[0].style.fontWeight ='bold';
items[2].style.fontFamily='mono type corsiva';
items[1].style.backgroundColor='Yellow';

			// Gives error
//items.style.backgroundColor='Yellow';

for(var i=0;i<items.length;i++){
	items[i].style.backgroundColor='silver';
}

 	GetElementsBy Tag Name 			//
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
items[0].textContent='Ahsan';
items[1].textContent='Hello 2';
li[0].style.fontWeight ='bold';
li[2].style.fontFamily='mono type corsiva';
li[1].style.backgroundColor='Yellow';

Gives error
items.style.backgroundColor='Yellow';

for(var i=0;i<li.length;i++){
	li[i].style.backgroundColor='silver';
}

					Query Selectors	  //
////////
  var header = document.querySelector('#main-header');
  header.style.fontFamily='mono type corsiva';
//////////
  var input =document.querySelector('input');
   input.value='Hello World';
//////////
  var submit=document.querySelector('input[type="submit"]');
   submit.value="Send";
 ///////// 
  var item = document.querySelector('.list-group-item');
  item.style.color='Red';
//////////
  var lastItem=document.querySelector('.list-group-item:last-child');
  lastItem.style.color='blue';
//////////
  var secondChild=document.querySelector('.list-group-item:nth-child(2)');
  secondChild.style.color='green';
 
  ////	Query Selector  all    ////

var titles=document.querySelectorAll('.title');
	//console.log(titles);
	titles[0].textContent = "Hello";

var odd =document.querySelectorAll('li:nth-child(odd)');
	for(var i=0; i<odd.length;i++){
		odd[i].style.backgroundColor='Yellow';
	}
var even=document.querySelectorAll('li:nth-child(even)');
	for (var i = 0 ; i <even.length; i++) {
		even[i].style.backgroundColor='pink';
	}
/////////		Travarsing the Dom    /////////////////

var itemList=document.querySelector('#items');
		 parentNode

	console.log(itemList.parentNode);
	itemList.parentNode.style.backgroundColor='silver';
	console.log(itemList.parentNode.parentNode.parentNode);
			childNodes  and  children

	console.log(itemList.childNodes);
	console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//  FirstChild   give line break
console.log(itemList.firstChild);
//  firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 1';


	 LastChild   give line break
console.log(itemList.firstChild);
	 lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello last';

	//	nextSibling
console.log(itemList.nextSibling);
	//	nextElementSibling
console.log(itemList.nextElementSibling);
	//	 peviousSibling
console.log(itemList.previousSibling);
	//	previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent='New Element';

		CreateElement

		create a div
var newDiv = document.createElement('div');
//	add new class
newDiv.className='helloClass';
//	add new id
newDiv.id='helloID';
//	add attribute
newDiv.setAttribute('title','helloDiv');
//	create text Node
var newDivText = document.createTextNode('Hello World');
// Add text to div
newDiv.appendChild(newDivText);

var container =document.querySelector('header .container');
var h1 =document.querySelector('header h1');

newDiv.style.fontSize='25px';
container.insertBefore(newDiv,h1);

console.log(newDiv);

		/		EVENTS 		///

var button=document.getElementById('button').addEventListener('click',buttonClick);

function buttonClick(e){
	console.log('Button Clicked');
	document.getElementById('header-title').textContent='Changed';
	document.querySelector('#main').style.backgroundColor='#ccc'
	console.log(e);
	console.log(e.target);
	console.log(e.target.id);
	console.log(e.target.className);
	console.log(e.target.classList);
	var output = document.getElementById('output');
	output.innerHTML='<h3>'+e.target.id+'</h3>';

	console.log(e.type);

	 mouse position
	console.log(e.clientX);
	console.log(e.clientY);

	console.log(e.offsetX);
	console.log(e.offsetY);

	 console.log(e.altKey);
	 console.log(e.ctrlKey);
	 console.log(e.shiftKey);
}

var button = document.getElementById('button');
var box=document.getElementById('box');
button.addEventListener('click',runEvent);
button.addEventListener('dblclick',runEvent);
button.addEventListener('mousedown',runEvent);
button.addEventListener('mouseup',runEvent);

box.addEventListener('mouseenter',runEvent);
box.addEventListener('mouseleave',runEvent);

box.addEventListener('mouseover',runEvent);
box.addEventListener('mouseout',runEvent);

box.addEventListener('mousemove',runEvent);

 	//	////	Keybord EVENTS//	/////	//////	/////	//////	/////

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');

itemInput.addEventListener('keydown',runEvent);
itemInput.addEventListener('keyup',runEvent);
itemInput.addEventListener('keypress',runEvent);

itemInput.addEventListener('focus',runEvent);
itemInput.addEventListener('blur',runEvent);

itemInput.addEventListener('cut',runEvent);
itemInput.addEventListener('paste',runEvent);
itemInput.addEventListener('input',runEvent);

select.addEventListener('change',runEvent);
select.addEventListener('input',runEvent);
form.addEventListener('submit',runEvent);

function runEvent(e){
	e.preventDefault();
	console.log('Event Type:'+e.type);

console.log(e.target.value);
document.getElementById('output').innerHTML='<h3>'+e.target.value+'</h3>'

	 output.innerHTML= '<h3>Mouse X: '+e.offsetX+'</h3><h3>Mouse Y:'+e.offsetY+'</h3>';
	 box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",400)";	
	 document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",60)";

	}
//////////////////////////////////////////////////////////////////////////////////////////
var form = document.getElementById('addform');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

///////////////////////////////////////////////////////////
//		Form submit event
form.addEventListener('submit',addItem);
//		Delete item
itemList.addEventListener('click',removeItem);
//		Filter Event
filter.addEventListener('keyup',filterItems);

//		Add item////////
function addItem(e){
	e.preventDefault();

	//Get input value
	var newItem=document.getElementById('item').value;

	// Create new li element
	var li=document.createElement('li');
	// Add class
	li.className='list-group-item';
	// console.log(li);
	//	Add text node with input value
	li.appendChild(document.createTextNode(newItem));
	itemList.appendChild(li);

	//   Create delete button element
	var deleteBtn=document.createElement('button');

	//	add classes to delete button
	deleteBtn.className="btn btn-danger btn-sm float-right delete";

	//	append text Node
	deleteBtn.appendChild(document.createTextNode('x'));

	//	append button to li
	li.appendChild(deleteBtn);

	//	Append li to list
	itemList.appendChild(li);  	
}
	// Romove Item
	function removeItem(e){
		if (e.target.classList.contains('delete')){
			if(confirm("Are you sure?"));{
				var li=e.target.parentElement;
				itemList.removeChild(li);
			}
			console.log(e);
		}
	}

	// 	filter Items///////////////
function filterItems(e){
	//	convert text to lowercase
	var text=e.target.value.toLowerCase();
	//	Get lis
	var items=itemList.getElementsByTagName('li');
// 	console.log(items);
// 	convert to an Array
Array.from(items).forEach(function(item){
	var itemName=item.firstChild.textContent;
	// console.log(itemName);
	if(itemName.toLowerCase().indexOf(text) != -1){
		item.style.display='block';
	}
	else {
		item.style.display='none';
	}
});
}

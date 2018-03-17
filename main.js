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

//		Add item///////////////////////
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

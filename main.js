menu_list_array = ["Veg Margherita Pizza","Fram House","Peppy Paneer","Cheese N Corn","Veggie Paradise"];

function getmenu(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class= 'cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ '<li>' + menu_list_array[i] + '</li>';
}document.getElementById("display_menu").innerHTML = htmldata;}

function add_item()
{
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldata="<section class='cards'>";
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+ '<div class="card">'+'<img src="pizzaing.png" style="wigth:100px; height:80px;">'+'</div>'
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}

function add_top(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}
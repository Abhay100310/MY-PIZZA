menu_list_array["Neapolitan Pizza,New York-Style Pizza,Chicago/Deep-Dish Pizza,Sicilian Pizza, Californian Pizza"]
function getmenu()
var htmldata;
htmldata = "<ol class = menulist>";

menu_list_array.sort();
for(var i = 0; i < menu_list_array.lenght;i++)
{
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
}

htmldata = htmldata + '</ol>'
document.getElementById("display_menu").innerHTML = htmldata

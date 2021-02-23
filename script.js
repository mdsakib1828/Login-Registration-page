const menuitem = document.getElementById('menuitems');
menuitem.style.maxHeight = "0px";

function menutoggle(){
    if(menuitem.style.maxHeight == "0px"){
       menuitem.style.maxHeight = "200px";
    }
    else{
         menuitem.style.maxHeight = "0px";
    }
    
}
//account page-----------
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function log(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";

}
function reg(){
  RegForm.style.transform = "translateX(0px)";
  LoginForm.style.transform = "translateX(0px)";
   indicator.style.transform = "translateX(100px)";
};

//product details page---------------
const productImg = document.getElementById("productImg");
const smallImg = document.getElementsByClassName('small-img');

    smallImg[0].onclick = function(){
    productImg.src = smallImg[0].src;
    }
    smallImg[1].onclick = function () {
    productImg.src = smallImg[1].src;
    }
    smallImg[2].onclick = function () {
    productImg.src = smallImg[2].src;
    }
    smallImg[3].onclick = function () {
    productImg.src = smallImg[3].src;
    }

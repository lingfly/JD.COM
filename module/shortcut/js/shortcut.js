var shortcut = document.getElementById("shortcut");
var dropdowns = document.getElementsByClassName("dropdown");
var mobile_jd = document.getElementsByClassName("mobile-jd")[0];

for (var i = 0; i < dropdowns.length; i++){
    dropdowns[i].onmouseover = function(event){
        console.log("mouse");
        addClass(this, "dropdown_hover");
    };
    dropdowns[i].onmouseout = function(event) {
		removeClass(this,'dropdown_hover');
	};
}

mobile_jd.onmouseover = function(event) {
	addClass(this,'mobile-jd_hover');
};
mobile_jd.onmouseout = function(event) {
	removeClass(this,'mobile-jd_hover');
};

function addClass(elements, cName){
    if(!hasClass(elements, cName)){
        elements.className+=" "+cName;
    }
}
function hasClass(elements, cName){
    return !!elements.className.match(new RegExp("(\\s|^)"+cName+"(\\s|$)"));
}
function removeClass( elements,cName ){ 
	if( hasClass( elements,cName ) ){ 
		elements.className = elements.className.replace( new RegExp( "(\\s|^)" + cName + "(\\s|$)" )," " ); // replace方法是替换 
	}
}
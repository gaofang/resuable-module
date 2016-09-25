var cssBind={
			//detecete the object's class 
	hasClass:function(obj, cls) {
	    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	},
	//add class into object 
	addClass:function(obj, cls) {
	    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
	}, 
	//remove object's class
	removeClass:function(obj, cls) {
	    if (this.hasClass(obj, cls)) {
	        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	        obj.className = obj.className.replace(reg, ' ');
	    }
	},
	//add or remove class
	toggleClass:function(obj, cls) {
	    if (this.hasClass(obj, cls)) {
	        this.removeClass(obj, cls);
	    } else {
	        this.addClass(obj, cls);
	    }
	}
}
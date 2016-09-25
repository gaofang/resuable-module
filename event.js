//event module for cross browser
// "use strict";
var eventUtil={
	//add event
	addHandler:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent('on'+type,handler);
		}else{
			element['on'+type]=handler;
		}
	},
	//delate event
	removeHandler:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){
			element.detachEvent('on'+type,handler);
		}else{
			element['on'+type]=null;
		}
	},
	//get event
	getEvent:function(event){
		return event?event:window.event;
	},
	//get event type
	getType:function(event){
		return event.type;
	},
	//get event target
	getElement:function(event){
		return event.target||event.srcElement;
	},
	//prevent default event
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	},
	//stop event bubble
	stopPropagation:function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
	}
}
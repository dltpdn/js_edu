function defineClass(option) {
	var classname = option.name;
	var constructor = option.init;
	window[classname] = constructor;

	if (option.extend) {
		window[classname].prototype = new option.extend();
		window[classname].prototype.constructor = constructor;
		window[classname].prototype.parent = option.extend;
	}

	for ( var m in option.methods) {
		window[classname].prototype[m] = option.methods[m];
	}
}

defineClass({
	name : 'Super',
	init : function(name) {
		this.name = name;
	},
	methods : {
		getName : function() {
			return this.name;
		},
		setName : function(name) {
			this.name = name;
		}
	}
});
var sup = new Super('sup');
console.log(sup.getName());
sup.setName('new sup');
console.log(sup.getName());



defineClass({
	name : 'Sub',
	extend : Super,
	init : function(name, type) {
		this.parent(name);
		this.type = type;
	},
	methods : {
		getType : function() {
			return this.type;
		}
	}
});

var sub = new Sub('sub', 'sss');
console.log(sub.getName() + ", " + sub.getType());
var expect = function(val){
	var object = {
		value: val,
		toBe: function (val1) {
		if (this.value !== val1) throw new Error("Not Equal");
		else return true;
		},
		notToBe: function (val1) {
		if (this.value === val1) throw new Error("Equal");
		else return true;
		},
	}
	return object;
};

expect(5).toBe(5); // true
expect(5).notToBe(6); // true
expect(5).toBe(6); // Error: Not Equal
expect(5).notToBe(5); // Error: Equal
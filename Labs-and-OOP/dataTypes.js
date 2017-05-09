const dataTypes = (x) => {

	if (typeof x == 'string'){
		return x.length

	}else if (x == undefined || x == null){
		return 'no value'

	}else if (typeof x == 'boolean'){
		return x

	}else if (typeof x == 'number'){
		if(x < 100){
			return 'less than 100'

		}else if (x > 100){
			return 'more than 100'

		}else {
			return 'equal to 100'
		}

	}else if (typeof x == 'object'){
		return x[2]
		if (x <= 2){
			return 'undefined'
		}

	}else if (typeof x === 'function' ){
		return x(true);
		
	}

}

exports.dataTypes = dataTypes
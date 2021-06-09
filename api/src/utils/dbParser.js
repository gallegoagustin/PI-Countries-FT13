const dbParser = (arg, id = false) => {
    if(id) {
        return arg.toUpperCase();
    }

    if(typeof arg === 'string') {
        let word;
        
        word = arg.charAt(0).toUpperCase() + arg.slice(1).toLowerCase();
        
        return word;
    }

    if(Array.isArray(arg)) {
        let parsedArray = [];

        for(let i = 0; i < arg.length; i++) {
            let word = arg[i].charAt(0).toUpperCase() + arg[i].slice(1).toLowerCase();
            parsedArray.push(word);
        }

        return parsedArray;
    }

    if(typeof arg === 'number') {
        return arg.toString();
    }
}

module.exports = { dbParser };
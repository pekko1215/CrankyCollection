var CrankyCollection = function(prm1, prm2) {
        var ret = [];
        var query;
        var index = 0;
        var readstart = -1;
        while (typeof(query = prm1.shift()) !== "undefined") {
                // console.log(prm2.substr(index))
                switch (true) {
                        case Array.isArray(query):
                                if (query.findIndex(function(d) {
                                                var tmp = prm2.indexOf(d, index)
                                                if (tmp != -1) {
                                                        index = tmp + query.length - 1;
                                                        return true;
                                                }
                                                return false;
                                        })==-1 && index == 0) {
                                                return [];
                                }
                                break;
                        case typeof query == "object":
                                break;
                        case typeof query == "function":
                                while (query(prm2.substr(index, 1))) {
                                        index++;
                                        if (prm2.length == index) {
                                                break;
                                        }
                                }
                                break;
                        case typeof query == "string":
                                var i = prm2.indexOf(query, index)
                                if(i!=-1){
                                        index =  + query.length;
                                }else{
                                        if(index==0){
                                                return [];
                                        }
                                }
                                break;
                        case typeof query == "boolean":
                                if (query) {
                                        readstart = index
                                } else {
                                        ret.push(prm2.substring(readstart, index))
                                        readstart = -1;
                                }
                                break;
                        case typeof query == "number":
                                index += query;
                                break;
                }
        }
        if (readstart != -1) {
                ret.push(prm2.substring(readstart));
        }
        return ret;
}

var $$ = CrankyCollection
module.exports = $$;

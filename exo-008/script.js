function range(n){
    let ret = [];
    for(let i = 0; i < n; i ++){
        ret.push(i)
    }
    return ret;
}
range(10)

function printEachElement(lst){
   for(const elm of lst){
       console.log(elm);
   }
}

function getElementAt(lst, index){
    return lst[index];
}

function getFirstElement(lst){
    return lst[0];
}

function getSecondElement(lst){
    return lst[1];
}

function restList(lst){
   let ret = []
   let isFirst = true;
   for(const elm of lst){
      if(isFirst){
         isFirst = false;
      } else {
         ret.push(elm);
      }
   }
   return ret;
}

function butLast(lst){
    let ret = []
    let previousElementSet = false;
    let previousElement ;
    for(const elm of lst){
        if(previousElementSet){
            ret.push(previousElement);
        }
        previousElement = elm;
        previousElementSet = true;
    }
    return ret;
}

function dropN(lst, n){
    let ret = [];
    let i = 0;
    for(const elm of lst){
       if(i >= n){
           ret.push(elm)
       }
       i ++;
    }
    return ret;
}

function sumListElements(lst){
    let ret = 0;
    for(const elm of lst){
        ret += elm;
    }
    return ret;
}


function multiplyListElements(lst){
    let ret = 1;
    for(const elm of lst){
        ret *= elm;
    }
    return ret;
}


function copy(lst){
    let ret = [];
    for(const elm of lst){
       ret.push(elm)
    }
    return ret;
}

function isIn(lst, elm){
    for(const elm_ of lst){
        if(elm_ === elm){
            return true;
        }
    }
    return false;
}

function extractPossitiveNumbers(lst){
    let ret = [];
    for(const elm of lst){
        if(elm >= 0){
            ret.push(elm);
        }
    }
    return ret;
}




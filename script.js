const i = {
    int: function(vari) {
        return parseInt(vari);
    },
    str: function(vari) {
        return vari.toString()
    },
    ge: function(id) {
        return document.getElementById(id);
    },
    geval: function(id) {
        return document.getElementById(id).value;
    },
    ptg: function(num1, num2) {
        return Math.sqrt((num1**2) + (num2**2))
    }
}

let obj1 = {
    x:0,
    y:0,
    z:-1
}

let obj2 = {
    x:0,
    y:0,
    z:0
}

function dis3d(x1, x2, y1, y2, z1, z2) {
    return Math.round(Math.abs(Math.sqrt(
    ((x1 - x2)**2) + 
    ((y1 - y2)**2) + 
    ((z1 - z2)**2))))
}

function ranum(min, max) {
    return Math.round(Math.random() * 
        (max - min) + min)
}

function ran_lotto() {
    const lotto_num = (ranum(1, 1000)).toString()
    const alt = lotto_num.length;
    
    /*console.log(
        lotto_num, 
        alt, 
        typeof lotto_num, 
        typeof alt);*/
        
    if (alt == 2) {
        //console.log("1")
        return "0" + lotto_num
    }else if (alt == 1) {
        //console.log("2")
        return "00" + lotto_num
    }else {
        //console.log("3")
        return lotto_num
    }
    
}

function checklotto() {
    
    const wintext = document.getElementById("wincheck")
    
    wintext.innerHTML = "currently: none"
    
    const user_lotto_num = prompt('enter the number you want to buy', ".")
    
    if (user_lotto_num != null || user_lotto_num != ".") {
    
        const user_com = confirm("are you sure?")
    
        if (user_com == true) {
        
            const lotto_num = ran_lotto()
            console.log(lotto_num)
    
            if (lotto_num == user_lotto_num) {
            wintext.innerHTML = "currently: win"
            }else {
            wintext.innerHTML = "currently: lose"
            }
    
        }
    }
}

function ptg() {
    const uio1 = i.geval("uio1")
    const uio2 = i.geval("uio2")
    const range = i.geval("decirange")
    const result_text = i.ge("result1")
    const alt1 = i.int(uio1)
    const alt2 = i.int(uio2)
    
    const result = i.ptg(alt1, alt2)
    
    const alt3 = {
        st : i.str(result*(10**range)),
        nd : i.str(result).indexOf("."),
        rd : i.str(result*(10**range)).indexOf(".")
    }
    const new_res = (alt3.st).slice(0, alt3.nd) + "." + (alt3.st).slice(alt3.nd, alt3.rd)
    const alt4 = i.int(new_res)
    
    if (alt4 <= result) {
        result_text.innerHTML = "result: " + new_res
    }else {
        result_text.innerHTML = "result: " + result
    }
}


function blackcheck() {
    const name = document.getElementById("uio4").value;
    const result = document.getElementById("result2")
    
    if(name.toLowerCase() == "makok") {
        result.innerHTML = "black: 100%"
    }else {
        const alt1 = ranum(0, 100)
        result.innerHTML = "black: " + new_res + "%"
    }
}

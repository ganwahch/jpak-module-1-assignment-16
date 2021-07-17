// var obj = new String(":");
// document.getElementById("blink").innerHTML = obj.blink();

var a = document.getElementById("blink");
var b = document.getElementById("blink1");
// var c = document.getElementById("milli");
var milli=00,sec=00,min=00;
setInterval(function(){
    a.style.display = (a.style.display == 'none' ? '': 'none');
},1000);
        
setInterval(function(){
    b.style.display = (b.style.display == 'none' ? '': 'none');
},1000);

function myfunc(){
    document.getElementById("start").disabled = true;
    c = setInterval(fname,1000);
    function fname(){
        milli++;
        document.getElementById("milli").innerHTML = milli;
        if(milli==60){
            sec++;
            milli=00;
        }
        document.getElementById("sec").innerHTML = sec;
        if(sec==60){
            min++;
            sec=00;
        }
        document.getElementById("min").innerHTML = min;
        
            
    }
}
function myfunc1(){
    document.getElementById("start").disabled = false;
    clearInterval(c);
}

function myfunc2()
{  
    var o,n=1;
    o = document.getElementById("lap");
    o.innerHTML=o.innerHTML+=min+" : "+sec+" : "+milli+"<br>";
    // = "<ol><li>"+min+" : "+sec+" : "+milli+"</li></ol>";
}











 






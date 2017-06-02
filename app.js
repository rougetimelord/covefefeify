var g = function (s) {
    return document.getElementById(s);
}
var a = { 'b': 'p', 'c': 'g', 'd': 't', 'f': 'v', 'g': 'k', 'k': 'g', 'p': 'b', 's': 'z', 't': 'd', 'v': 'f', 'z': 's' }
var y
var c = function () {
    var s=g('in').value,t=s.search(/[aeiou]/),i=s.slice(t+1),c=i.search(/[b-df-hj-np-tv-z]/),k=i.slice(c).search(/[aeiou]/),z=s.slice(0,t+c+2);
    if(k==-1||c==-1){g('in').classList="f";return g('out').innerHTML="Autocorrect can't f*ck that up";}
    k = i.slice(c)[k];
    c=(typeof(a[i[c]])=='undefined')?i[c]:a[i[c]];
    z+=(c+k).repeat(2);
    g('in').classList='';g('out').innerHTML="That's <div>"+z+"</div> in 3AM twitter";
}
var key = function () {
    clearTimeout(y);y = setTimeout(c, 500);
}
var clear = function () {
    if (g('in').value.length == 0){g('out').innerHTML="";clearTimeout(y);}
}
document.addEventListener('DOMContentLoaded', function () { document.addEventListener('keypress', key);document.addEventListener('keydown',clear)})
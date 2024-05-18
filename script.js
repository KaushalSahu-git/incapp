function add(){
    var output = document.getElementById("output");
    var fn = parseInt(document.getElementById("fn").value);
    var sn = parseInt(document.getElementById("sn").value);
    var result = fn+sn  ;
    output.innerHTML = result;
}
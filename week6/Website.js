function myFunction() {
    var i = document.getElementById("myNumber").value;
    var obj = document.getElementById("mySelect").value;

    document.getElementById("total").innerHTML = "$"+Number(i)*Number(obj);
  }

  function getOption() {
    var obj = document.getElementById("mySelect");
    document.getElementById("type").innerHTML = 
    obj.options[obj.selectedIndex].text;
  }
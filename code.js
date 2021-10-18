function sumofdigit()
{
  var number = document.getElementById('num').value;
  var result = 0;
  var r = 0;
  while(number>0)
  {
    r = number%10;
    result = result + r;
    number = Math.floor(number/10);
  }

  document.getElementById("value").innerHTML = result;

}

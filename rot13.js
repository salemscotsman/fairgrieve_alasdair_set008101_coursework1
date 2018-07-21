/*
  Author: Alasdair Fairgrieve
  Last Modified:
*/
var output, input, input2, letterlist, newList, encryptLetter, keyValue, key;

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function encrypt()
{
  output = "";
  input = document.getElementById("input");
  input2 = input.value;

  if(input2 == '')
  {
    alert("Please provide a text input");
  }

  for (var a = 0; a < input2.length; a++)
  {

    if(input2[a] == " ")
    {
      output += " ";
      continue;
    }
    for(var b = 0; b <letters.length; b++)
    {
      if(input2[a] == letters[b])
      {
        newList = b + 13;
        if(newList > 25)
        {
          newList -= 26;
        }
        output += letters[newList];

      }
    }
  }
  document.getElementById("output").value = output;
}

function decrypt()
{
  var temp = document.getElementById("dropDown");
  key = temp.options[temp.selectedIndex].value;
  output = "";
  input = document.getElementById("input");
  input2 = input.value;

  if(input2 == '')
  {
    alert("Please provide a text input");
  }

  for (var a = 0; a < input2.length; a++)
  {

    if(input2[a] == " ")
    {
      output += " ";
      continue;
    }
    for(var b = 0; b <letters.length; b++)
    {
      if(input2[a] == letters[b])
      {
        newList = b - 13;
        if(newList < 0)
        {
          newList += 26;
        }
        output += letters[newList];

      }
    }
  }
  document.getElementById("output").value = output;
}

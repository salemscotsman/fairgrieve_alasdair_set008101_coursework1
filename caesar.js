/*
  Author: Alasdair Fairgrieve
  Date last modified: 21-07-18

*/


var encryptLetter,letters,newList,keyList,Key,output,input,input2;


// Array used to numerically order alphabet
letters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Converts uppercase to lowercase
function correctedInput()
{
  input = document.getElementById("input");
  newInput = input.value;

  if (newInput == '')
  {
    alert("Please enter text before encrypting")
  }
  //Outputs lowercase string
  input2 = newInput.toLowerCase();
  return input2;
}

//Takes and returns numerical value for letter
function array()
{
  var e = document.getElementById("dropDown");

  //Takes user element from dropdown menu
  Key = e.options[e.selectedIndex].value;

  //For loop to return number
  var keyList;
  for (var i = 0; i < letters.length; i++)
  {
    if (letters[i] == Key)
    {
      keyList = i;
    }
  }
  return keyList;
}

//Decrypt Function
function decrypt()
{
  keyList = array()
  input2 = correctedInput();
  output = "";

  for (var i = 0; i < input2.length; i++)
  {
    //Checks for spaces between words
    if (input2[i] == " ")
    {
      //Adds a space to the end of outputted word
      output += " ";
      continue;
    }
    for (var j = 0; j < letters.length; j++)
    {
      if(input2[i] == letters[j])
      {
        newList = j - keyList;

        //Repositions array
        if (newList < 0)
        {
          //Adds 26 numerical places to remain within range
          newList += 26;
        }
        //Focuses encrypted letter and outputs
        encryptLetter = letters[newList];
        output += encryptLetter;
      }
    }
  }
  //Prints outputted message to output textbox
  document.getElementById("output").value = output;
}

//Encrypt Function
function encrypt()
{
  keyList = array()
  input2 = correctedInput();
  output = "";

  for(var i = 0; i < input2.length; i++)
  {
    //Checks for spaces between words
    if(input2[i] == " ")
    {
      //Adds a space to the end of the outputted word
      output += " ";
      continue;
    }

    for(var j = 0; j < letters.length; j++)
    {
      if(input2[i] == letters[j])
      {
        newList = j + keyList;

        //Repositions array
        if (newList > 25)
        {
          //Deducts 26 numerical places to remain within range
          newList -= 26;
        }
        //Focuses encrypted letter and outputs
        encryptLetter = letters[newList];
        output += encryptLetter;
      }
    }
  }
  //Prints outputted message to output textbox
  document.getElementById("output").value = output;
}

function sortByAZ(){
  var characters = document.getElementsByClassName("card");

  for (var i = 0; i < characters.length; i++){
    var currentChar = characters[i];

    if(i == 0)
    {
      currentChar.parentNode.style.order = "1";
    }
    else{
      currentChar.parentNode.style.order = characters[i - 1].parentNode.style.order + 1;
    }
  }
}

function sortByZA(){
  var characters = document.getElementsByClassName("card");

  for (var i = 0; i < characters.length; i++){
    var currentChar = characters[i];

    if(i == 0)
    {
      currentChar.parentNode.style.order = "0";
    }
    else{
      currentChar.parentNode.style.order = characters[i - 1].parentNode.style.order - 1;
    }
  }
}

function sortByType(){
  var characters = document.getElementsByClassName("card");

  for (var i = 0; i < characters.length; i++){
    var currentChar = characters[i];

    if(currentChar.classList.contains("physical"))
    {
      currentChar.parentNode.style.order = "1";
    }
    else if (currentChar.classList.contains("fire")) {
      currentChar.parentNode.style.order = "2";
    }
    else if (currentChar.classList.contains("ice")) {
      currentChar.parentNode.style.order = "3";
    }
    else if (currentChar.classList.contains("lightning")) {
      currentChar.parentNode.style.order = "4";
    }
    else if (currentChar.classList.contains("wind")) {
      currentChar.parentNode.style.order = "5";
    }
    else if (currentChar.classList.contains("quantum")) {
      currentChar.parentNode.style.order = "6";
    }
    else if (currentChar.classList.contains("imaginary")) {
      currentChar.parentNode.style.order = "7";
    }
  }
}

function sortByPath(){
  var characters = document.getElementsByClassName("card");

  for (var i = 0; i < characters.length; i++){
    var currentChar = characters[i];

    if(currentChar.classList.contains("destruction"))
    {
      currentChar.parentNode.style.order = "1";
    }
    else if (currentChar.classList.contains("hunt")) {
      currentChar.parentNode.style.order = "2";
    }
    else if (currentChar.classList.contains("erudition")) {
      currentChar.parentNode.style.order = "3";
    }
    else if (currentChar.classList.contains("harmony")) {
      currentChar.parentNode.style.order = "4";
    }
    else if (currentChar.classList.contains("nihility")) {
      currentChar.parentNode.style.order = "5";
    }
    else if (currentChar.classList.contains("preservation")) {
      currentChar.parentNode.style.order = "6";
    }
    else if (currentChar.classList.contains("abundance")) {
      currentChar.parentNode.style.order = "7";
    }
  }
}

function sortByRarity(){
  var characters = document.getElementsByClassName("card");

  for (var i = 0; i < characters.length; i++){
    var currentChar = characters[i];

    if(currentChar.classList.contains("rarity-5stars"))
    {
      currentChar.parentNode.style.order = "1";
    }
    else{
      currentChar.parentNode.style.order = "2";
    }

  }
}

function _load(){
  
  let rootE = document.getElementById("root"); //saving the html element by #root into a variable

  let aTextArray = ["alma", "cseresznye", "eper", "dinnye", "szeder", "mandarin", "ribizli", "narancs", "paradicsom", "citrom", "banana", "datolya", "szilva", "barack", "pomelo", "kiwi","grapefruit", "kaki"];

  //console.log(aTextArray.length);

  for (let index = 0; index < aTextArray.length; index++) //creating a for loop in order to get the number of elements in aTextArray {

    //console.log(aTextArray[index]);

    rootE.insertAdjacentHTML("beforeend", `
      <div class="fruit">${aTextArray[index]}</div>  
    ` //adding each elements of aTextArray to individual divs called fruit
    ); 

  }
  //console.log(document.getElementsByClassName("fruit"));

  let fruitDivs = rootE.querySelectorAll(".fruit"); //selecting the elements in rootE variable with the classes called fruit and placing them into a variable
  console.log(fruitDivs.length); //writing the legth of fruitDivs variable on the console

  
  for (let index = 0; index < fruitDivs.length; index++) { //creating a for loop to investigate the elements of fruitDivs
    //console.log(fruitDivs[index]);
    //fruitDivs[index].classList.add("anotherClass");

    //console.log(index === 1);
    //console.log(index % 2 === 0);
    if(index % 2 === 0){ //check whether or not the value of index is an even number
      fruitDivs[index].classList.add("trueClass"); //if the index is an even number a trueClass will be added to the investigated fruitDivs element

    } else if(index % 5 === 0) { //check whether or not the value of index can be divided by 5
      fruitDivs[index].classList.add("anotherClass"); //if the index value can be divided by 5, another class will be added to the investigated fruitDivs element

    } else { //this condition is valid in other cases than mentioned above
      fruitDivs[index].classList.add("falseClass"); //the class that will be added to the current element of fruitDivs
    }
    
  }


}

window.addEventListener("load", _load);
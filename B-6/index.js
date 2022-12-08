var myString = document.getElementById("myString");
var myWord = document.getElementById("myWord");
var yourString = document.getElementById("yourString");
var digitCount = document.getElementById("digitCount");
var alphabetsCount = document.getElementById("alphabetsCount");
var spaceCount = document.getElementById("spaceCount");
var wordCount = document.getElementById("wordCount");
var position = document.getElementById("position");
var button = document.getElementById("button-type");

button.addEventListener("click", function () {
  var sentence = myString.value;
  var word = myWord.value;
  if (sentence === "" || word === "") {
    alert("Please fill the boxes first!");
  } else {
    yourString.value = sentence;
    var count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] >= "0" && sentence[i] <= "9") {
        count++;
      }
    }
    digitCount.value = count;
    var scount = 0;
    for (let k = 0; k < sentence.length; k++) {
      if (sentence[k] === " ") {
        scount++;
      }
    }
    spaceCount.value = scount;
    var acount = 0;
    for (let j = 0; j < sentence.length; j++) {
      if (
        (sentence[j] >= "a" && sentence[j] <= "z") ||
        (sentence[j] >= "A" && sentence[j] <= "Z")
      ) {
        acount++;
      }
    }
    alphabetsCount.value = acount;
    var wcount = sentence.split(word).length - 1;
    wordCount.value = wcount;
    var pos = 0;
    pos = sentence.indexOf(word);
    position.value = pos;
    myString.value = "";
    myWord.value = "";
  }
 });

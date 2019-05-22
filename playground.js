function decodeMessage(message){
    let arr = message.split('');
    console.log(arr);
    for(var i = 0; i < arr.length; i++){
      var letter = arr[i];
      console.log(letter);
      switch(letter){
        case '4': 
          arr[i] = "a";
          break;
        case '3':
          arr[i] = "e";
          break;
        case '1':
          arr[i] = "i";
          break;
        case '0':
          arr[i] = "o";
          break;
        case '2':
          arr[i] = "u";
          break;
        case '5':
          arr[i] = "y";
          break;
      }
    }
     arr[73] = 'l';
     console.log(arr.join(""));
    return arr.join("");
  }
  console.log(decodeMessage("th1s 1s 4 t3st. th1s 1s 0nl5 4 t3st. 1f th1s w3r3 4 r34l m3ss4g3, 502 w021d g3t s0m3th1ng m34n1ngf2l."));
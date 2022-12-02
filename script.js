const boxes = document.getElementsByClassName("box")
const result = document.getElementById("result")



k = 0
function foo(a){
    //console.log(a.dataset.code)
    if(!isWin()){
        if(k != 9){
            if(a.innerHTML == ""){
                if(k%2 == 0){
                    a.innerHTML = "X"
                    if(isWin()){
                        result.innerHTML = "X wins"
                        k = 9;
                    }
                }
                else{
                    a.innerHTML = "O"
                    if(isWin()){
                        result.innerHTML = "O wins"
                        k = 9;
                    }
                }
                k++;
                
            }
        }
        else{
            result.innerHTML = "nobody wins !"
        }
    }
    
    else{
        console.log("The game is over !")
    }
    

}



function isWin(){
    let c = 0;
    // first row check
    for(let i = 0; i < 3; i++){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 0; i < 3; i++){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0
    
    // second row check
    for(let i = 3; i < 6; i++){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 3; i < 6; i++){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0
    // third row check
    for(let i = 6; i < 9; i++){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 6; i < 9; i++){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0
    // first column check
    for(let i = 0; i < 9; i+=3){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 0; i < 9; i+=3){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0

    // second column check
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0
    // third column check
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0
    // diagonal 1 check
    for(let i = 0; i < 9; i+=4){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
     c =0
    for(let i = 0; i < 9; i+=4){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    c = 0

    // diagonal 2 check
    for(let i = 2; i < 7; i+=2){
        if(boxes[i].innerHTML == "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    c = 0
    for(let i = 2; i < 7; i+=2){
        if(boxes[i].innerHTML == "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    return false
}

//console.log("Hello world");
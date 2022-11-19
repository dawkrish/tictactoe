const boxes = document.getElementsByClassName("box")
const result = document.getElementById("result")


let k = 0;
while(k < 9){
    for(let i = 0; i < boxes.length; i++){
        boxes[i].addEventListener("click",()=>{
           if(boxes[i].innerHTML == ""){
            if(k % 2 == 0){
                boxes[i].innerHTML = "X"
                if(isWin()){
                    result.innerHTML("X wins")
                    k = 9
                }
                k++;
            }
            else{
                boxes[i].innerHTML = "O"
                if(isWin()){
                    result.innerHTML("O wins")
                    k = 9
                }
                k++;
            }
           }
        })
    }
}

if(k == 9){
    result.innerHTML = "No body wins !"
}



function isWin(){
    let c = 0;
    // first row check
    for(let i = 0; i < 3; i++){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 0; i < 3; i++){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }
    
    // second row check
    for(let i = 3; i < 6; i++){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 3; i < 6; i++){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // third row check
    for(let i = 6; i < 9; i++){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 6; i < 9; i++){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // first column check
    for(let i = 0; i < 9; i+=3){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 0; i < 9; i+=3){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // second column check
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // third column check
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 1; i < 9; i+=3){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // diagonal 1 check
    for(let i = 0; i < 9; i+=4){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 0; i < 9; i+=4){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    // diagonal 2 check
    for(let i = 2; i < 7; i+=2){
        if(boxes[i].innerHTML = "X"){
            c++;
        }
        if(c == 3){
            console.log("X wins")
            return true;
        }
    }
    for(let i = 2; i < 7; i+=2){
        if(boxes[i].innerHTML = "O"){
            c++;
        }
        if(c == 3){
            console.log("O wins")
            return true;
        }
    }

    return false
}






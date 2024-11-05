console.log('working fine');

const boxes=document.querySelectorAll('.col')
console.log(boxes);
let arr=Array(9).fill(null)
let row=3
let col=3


let ini='X'
let cnt=0;

let winner=document.querySelector("#win")


let gameFinish=false;
function checkwin(){
    let nulls=0;
    arr.forEach((val)=>{
        if(val==null) nulls++;
    })
    if(nulls==9){
        return;
    }

    if(nulls==0){
        console.log('its draw');
        winner.innerText=`its a draw`
        gameFinish=true
        return ;
        
    }


    
    if (
        (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != null) ||
        (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != null) ||
        (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != null) ||
        (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != null) ||
        (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != null) ||
        (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != null) ||
        (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != null) ||
        (arr[2] == arr[4] && arr[4] == arr[6] && arr[2] != null)
    ) {
        console.log('we got the winner');
        winner.innerText=`the winner is -> ${ini}`
        gameFinish=true;
        // document.write(`${ini} won the game !!!`);
        return ;
    }

}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(gameFinish==true){
            setTimeout(() => {
                location.reload()
                
            }, 3000);
        }
        if(gameFinish==true) return
        cnt++;
        console.log(box.id);
        let index=Number(box.id)
        console.log(arr);
        if(arr[index]!=null) return;
        arr[index]=ini
        box.innerText=ini
        checkwin()
        ini = (ini=='X') ? 'O' : 'X'
        // let res=checkwin()
        // if(res==1) return
        

    })
})



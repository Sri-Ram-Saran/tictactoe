let current_player ="X";
let tic=Array(9).fill(null);
// console.log(tic);


function winnerCheck(){
    if(
        (tic[0] !==null &&  tic[0]==tic[1] && tic[1]==tic[2])||
        (tic[3] !==null && tic[3]==tic[4] && tic[4]==tic[5])||
        (tic[6] !==null && tic[6]==tic[7] && tic[7]==tic[8])||
        (tic[0] !==null && tic[0]==tic[3] && tic[3]==tic[6])||
        (tic[1] !==null && tic[1]==tic[4] && tic[4]==tic[7])||
        (tic[2] !==null && tic[2]==tic[5] && tic[5]==tic[8])||
        (tic[0] !==null && tic[0]==tic[4] && tic[4]==tic[8])||
        (tic[2] !==null && tic[2]==tic[4] && tic[4]==tic[6])  
    ){
        //document.write('Winner is ',current_player);
        document.write(`winner is ${current_player} <br> Reload to Start Again...`);
        
        return;
    }
    if(!tic.some((e)=>e===null)){
        document.write("!!!!!!!!DRAW.......MATCH!!!!!!!! <br> <br> <br> Reload to Start Again");
    
        return;
    }

}
// function disp(ell){
//     const d=document.getElementById("Winner");
//     d.innerHTML=`The Winner of our match is ${ell}`
//     return ;
// }

function handleClick(el){
    // console.log(el);
    const id=Number(el.id);
    if(tic[id]!==null) return;
    
    tic[id]=current_player;
    el.innerText=current_player;
    winnerCheck();
    current_player=current_player==="X"? "O":"X";
    //console.log(tic);
    
}
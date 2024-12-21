const images=document.querySelectorAll('img.contentlogo');
// it will select all the images inside the ul

const prev_button=document.querySelector('#svglogo1');
const next_button=document.querySelector('#svglogo2');
//not querySelectorAll bcz this All will store all and we want to sotre only 1 id
let n=0;

function changeimageslide(){
    for(let i=0;i<images.length;i++){
       images[i].style.display='none'; 
    }
    images[n].style.display='block';
    // adding the css style display property 'block' to the images
    // it will display the nth image 
}
// when n is 0 it will select the 1st image and so the loop continues
changeimageslide(); 

// we need to move forward and backward of the images fot it we will do....
// click next_button and do n++....
//click prev_button and do n--.....

prev_button.addEventListener('click',(e)=>{
    if(n>0){
        n--;
    }
    else{
        n=images.length-1;
    }
    changeimageslide();
})

next_button.addEventListener('click',(e)=>{
    if(n<images.length-1){
        n++;
    }
    else{
        n=0;
    }
    changeimageslide();
})

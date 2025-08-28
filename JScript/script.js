let count=0;
const heartIcon=document.querySelectorAll('.heart');
for(let icons of heartIcon){
    icons.addEventListener('click',function(){
        count++;
        const heartCounter=document.getElementById('heart-count');
        heartCounter.innerText=count;
    })
}


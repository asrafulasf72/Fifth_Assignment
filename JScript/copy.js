const copyCountElement=document.getElementById('copyCounter')
let countCopy=0;
countCopy=parseInt(copyCountElement.innerText);

const copyBtnElement=document.querySelectorAll('.copyBtn')

for(let btn of copyBtnElement){
    btn.addEventListener('click', function(){
         
        let card=btn.closest('.shadow-md');
        let number=card.querySelectorAll('h2')[1].innerText;

        navigator.clipboard.writeText(number);

        alert("Number IS Copied: "+number);

        countCopy++
        copyCountElement.innerText=countCopy;
    })
}
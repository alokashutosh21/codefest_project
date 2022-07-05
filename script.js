let questtion = document.getElementById("qs")
let i
let len = qs.length;
for (i =0; i<len; i++){
    qs[i].addEventListener('click',function(){
        this.classList.toggle('active');
        let answer = this.nextElementSibling;
        if(answer.style.display == 'none'){
            answer.style.display = 'block'
        }
        else{
            answer.style.display = 'none'
        }
        
    })
}


let bar = document.getElementById('bar')
let menuBar = document.getElementById('menuBar')
let barIcon = document.getElementById('barIcon')

bar.addEventListener('click',()=>{
    if(menuBar.style.right == "-600px"){
        menuBar.style.right = "60px"
    }
    else{
        menuBar.style.right = "-600px"
    }
    
})
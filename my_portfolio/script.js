const cursor = document.QuerySelector('.cursor')

  document.addEventListener("mousemove", function (info) {
    cursor.style.left = info.clientX + 'px'
    cursor.style.top = info.clientY + 'px'
  })
const cursor=document.QuerySelector('.cursor')
document.addEventListener("mousemove", function(info){
    cursor.style.left=info.clientX+'px'
cursor.style.top=info.clientY+'px'
})

const elements=document.querySelectorAll(';caixa01');

const observer=new IntersectionObserver((entries,observer)=>{
    
        entries.forEach(entry=>{
        if(entry.isIntersecting){

            entry.target.classList.add('fadeIn');}else{
                entry.target.classList.remove('fadeIn');
            }
    });
}, 
    {threshold: 0.5
});
elements.forEach(caixa01 =>{
    observer.observe(caixa01);
});
            
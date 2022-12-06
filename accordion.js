const accordionClass = document.getElementsByClassName('accordion');
for(let i = 0; i < accordionClass.length; i++){
  accordionClass[i].addEventListener('click', function(){
    this.classList.toggle('height')
  })
}
    
    

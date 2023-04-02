let element=document.querySelector(".pop");
document.getElementById('bam').addEventListener("click",()=>{
  if(element.classList.contains('d-flex'))  {
  element.classList.remove('d-flex');
  element.classList.add('d-none');
  }else{
  element.classList.add('d-flex');
  element.classList.remove('d-none');
  }
})
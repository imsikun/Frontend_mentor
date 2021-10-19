// const accordionS = document.querySelectorAll('.accordion')

// accordionS.forEach((accordion) =>{
//   accordion.onclick = (e) =>{
//     e.target.classList.toggle('is_open')

//     let content = this.nextElementSibling;
//     console.log(content);

//     if(content.style.maxHeight){
//       content.style.maxHeight = null
//     }else{
//       content.style.maxHeight = content.scrollHeight + 'px'
//     }
//   }
// })

const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
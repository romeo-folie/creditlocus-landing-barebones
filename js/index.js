var acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;

    if(panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.style.borderBottom = "none";
    } else {
      let scrollHeight = panel.scrollHeight + 50;
      panel.style.maxHeight = scrollHeight + 'px';
      panel.style.borderBottom = "0.5px solid #909ABB";
    }
  });
}


// let resources = document.getElementsByClassName("resource-item");

// for(let i = 0; i < resources.length; i++){
//   resources[i].addEventListener("onmouseover", function() {
    
//   })
// } 
import './_modal.scss';

function openModal(id) {

  // add styles to body overflow: hidden; height: 100vh;
  const body = document.querySelector('body')
  body.style='overflow: hidden; height: 100vh;'

  //on specific modal using id
  // update aria-hidden
  // add class to modal
  const targetModal = document.getElementById(id)
  targetModal.setAttribute('aria-hidden','false')
  targetModal.classList.add('is-open')

  //focus on close button
  const closeButton =  targetModal.querySelector("button[data-micromodal-close]")
  closeButton.focus()

  // add event listener for escape button
  window.addEventListener('keyup', closeWithEsc)

}

function closeWithEsc(e){
  if(e.keyCode === 27 || e.key ==='Escape'){
    closeModals();
  }
}


function closeModals() {
  //get open modals
  const openModals = document.querySelectorAll('.modal.is-open')
  openModals.forEach(openModal =>{
    //close modals
    openModal.classList.remove('is-open')
    openModal.setAttribute('aria-hidden','true')
  });
  //remove inline styles from body
  const body = document.querySelector('body')
  body.style='';
  //remove event listener from window
  window.removeEventListener('keyup', closeWithEsc)
}


(function init(){
  const modalTriggers = document.querySelectorAll('[data-micromodal-trigger]')
  modalTriggers.forEach(modalTrigger => {
    const modalTargetId = modalTrigger.dataset.micromodalTrigger
    modalTrigger.addEventListener('click',()=>openModal(modalTargetId))
  })

  const closeTriggers =  document.querySelectorAll('[data-micromodal-close]')
  closeTriggers.forEach(closeTrigger => {
    closeTrigger.addEventListener('click',()=>closeModals())
  })
})()



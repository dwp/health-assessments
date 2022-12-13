/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

// if(document.getElementById('paper')) {
//   document.getElementById('paper').addEventListener('click', () => {
//     document.getElementById('myIdName').classList.remove('my-magic-class');
//   });
// }


document.querySelectorAll('#telephone, #f2f, #paper, #srel, #video-call').forEach((element) => {
  element.addEventListener('click', (e) => {
    if(e.target.id === 'telephone') {
      document.getElementById('myIdName').classList.add('my-magic-class');
    } else {
      document.getElementById('myIdName').classList.remove('my-magic-class');
    }
  });
});
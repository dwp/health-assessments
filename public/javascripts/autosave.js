$(document).ready(() => {

    const currentUrl = window.location.href;
    const pathsWithAutoSave = [
      'assessments/pip-version-1-1/',
      // 'assessments/pip-version-2/'
    ]
    const isAutoSavePath = pathsWithAutoSave.some((el) => currentUrl.includes(el));
    console.log(`Current url is ${currentUrl}. Is Auto save path? ${isAutoSavePath}`);
  
    if(isAutoSavePath) {
      $('input, textarea').each(function () {
        if (!$(this).hasClass('autosave')) {
          $(this).addClass('autosave');
        }
      })
      $('.autosave').on('focusout', function (el) {
        field = el.currentTarget.name;
        value = el.currentTarget.value;
        axios.post('/autosave', {
          field,
          value
        });
      });
    }
  
    });
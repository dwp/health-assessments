$(document).ready(() => {

  // Docs popup

  if(document.getElementById('newWindow')) {
    document.getElementById('newWindow').addEventListener('click', (e) => {
      e.preventDefault();
      console.log(e.target);
      return window.open(e.target.href, 'documents', 'popup');
    });
  }

// Autosave

  if (window.performance && window.performance.navigation.type === window.performance.navigation.TYPE_BACK_FORWARD) {
    window.location.reload();
  }

  const hasRefreshed = false;
  const currentUrl = window.location.href;
  const pathsWithAutoSave = [
    'assessments/pip-version-1-1/',
    'assessments/pip-htl-1606/',
    'assessments/pip-htl-1659/'
  ]
  const isAutoSavePath = pathsWithAutoSave.some((el) => currentUrl.includes(el));
  console.log(`Current url is ${currentUrl}. Is Auto save path? ${isAutoSavePath}`);

  if(isAutoSavePath) {
    $('input, textarea').each(function () {
      if (!$(this).hasClass('autosave')) {
        $(this).addClass('autosave');
      }
    })
    $('.autosave').on('focusout', autosave);
    $('.autosave').on('change', autosave);
    $('.autosave').on('keyup', autosave);
  }

  function autosave(el) {
    let field;
    let value;
    if (el.currentTarget.type === 'checkbox') {
      field = el.currentTarget.name;
      value = Array.from(document.getElementsByName(el.currentTarget.name)).filter(x => x.checked).map(x => x.value);
    } else {
      field = el.currentTarget.name;
      value = el.currentTarget.value;
    }
    fetch('/autosave', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ field, value }),
    })
      .then((response) => response.json())
      .then((data) => console.log('Success:', data))
      .catch((error) => console.error('Error:', error));
  }
  });
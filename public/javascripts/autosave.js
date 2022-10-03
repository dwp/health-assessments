$(document).ready(() => {
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
      // console.log('hello', field,': ', value);
    });
  });
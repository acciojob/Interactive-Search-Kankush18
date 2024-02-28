//your JS code here. If required.
function activateSearch() {
    var searchDiv = document.getElementById('searchComponent');
    searchDiv.classList.add('active');
    var inputField = searchDiv.querySelector('.input');
    inputField.focus();
  }
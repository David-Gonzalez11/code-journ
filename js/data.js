/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var values = localStorage.getItem('code-journal');
if (values !== null) {
  data = JSON.parse(values);
}

window.addEventListener('beforeunload', handlewindows);
function handlewindows(event) {
  var newObj = JSON.stringify(data);
  localStorage.setItem('code-journal', newObj);
  document.querySelector('img').reset();
  document.querySelector('form').reset();
}

/* exported data */

var data = {
  view: '',
  entries: [],
  editing: null,
  nextEntryId: 1
};
console.log('data object:', data);
var values = localStorage.getItem('code-journal');
// console.log('values:', values);
if (values !== null) {
  data = JSON.parse(values);
}
// console.log(data);

window.addEventListener('beforeunload', handlewindows);
function handlewindows(event) {
  var newObj = JSON.stringify(data);
  localStorage.setItem('code-journal', newObj);

}

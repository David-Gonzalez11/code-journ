/* global data */
/* exported data */

function handleInput(event) {
  img.setAttribute('src', input.value);
}
var img = document.querySelector('img');
var input = document.querySelector('#photoUrl');
input.addEventListener('input', handleInput);

var save = document.querySelector('form');
function handleSubmit(event) {
  event.preventDefault();
  var title = save.elements.title.value;
  var photoUrl = save.elements.photoUrl.value;
  var notes = save.elements.notes.value;
  var Entry = {
    title: title,
    photo: photoUrl,
    notes: notes,
    nextEntryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(Entry);
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  save.reset();
}
save.addEventListener('submit', handleSubmit);

function renderEntry(entry) {
  var firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'row');

  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column-half');

  var description = document.createElement('p');
  description.textContent = entry.notes;

  var image = document.createElement('img');
  image.setAttribute('src', entry.photo);

  var name = document.createElement('div');
  name.setAttribute('class', 'column-half');

  var heading = document.createElement('h2');
  heading.textContent = entry.title;

  firstDiv.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);
  colHalfdiv.appendChild(heading);
  colHalfdiv.appendChild(description);
  return firstDiv;

}
window.addEventListener('DOMcontentLoaded', renderEntry);
var row = document.querySelector('entries');

for (var i = 0; i < data.entry.length; i++) {
  var entry = renderEntry(data.entries[i]);
  row.appendChild(entry);
}

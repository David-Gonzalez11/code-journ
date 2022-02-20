/* global data */
/* exported data */

function handleInput(event) {
  img.setAttribute('src', input.value);
}
var img = document.querySelector('img');
var input = document.querySelector('#photoUrl');

input.addEventListener('input', handleInput);

var save = document.querySelector('form');
var tabs = document.querySelector("div[data-view='entries']");

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

  tabcontainer.classList.add('hidden');
  tabs.className = ('');
}
save.addEventListener('submit', handleSubmit);

function renderEntry(entry) {
  var list = document.createElement('LI');

  var firstDiv = document.createElement('div');
  firstDiv.setAttribute('class', 'row');

  var colHalfdiv = document.createElement('div');
  colHalfdiv.setAttribute('class', 'column-half');

  var secondcolHalf = document.createElement('div');
  secondcolHalf.setAttribute('class', 'column-half');

  var description = document.createElement('p');
  description.textContent = entry.notes;

  var image = document.createElement('img');
  image.setAttribute('src', entry.photo);

  var heading = document.createElement('h2');

  heading.textContent = entry.title;
  list.appendChild(firstDiv);
  firstDiv.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);
  firstDiv.appendChild(secondcolHalf);
  secondcolHalf.appendChild(heading);
  secondcolHalf.appendChild(description);

  return list;
}

window.addEventListener('DOMcontentLoaded', renderEntry);
var row = document.querySelector('.new');

for (var i = 0; i < data.entries.length; i++) {
  var entry = renderEntry(data.entries[i]);
  row.appendChild(entry);

}

var tabcontainer = document.querySelector('form');

var entryForm = document.querySelector('div[data-view="entry-form"]');

function entries(event) {
  if (event.target.matches('div[data-view="entries"]')) {
    entryForm.classList = '';
  } else {
    tabs.classList.add('hidden');
    tabcontainer.classList.remove('hidden');
  }
}
tabs.addEventListener('click', event => entries(event));

function entryButton(event) {
  if (event.target.matches('#entries')) {
    tabcontainer.classList.add('hidden');
  } else {
    entrada.className = '';

  }
}
var entrada = document.querySelector('.nav');
entrada.addEventListener('click', entryButton);

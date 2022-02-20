/* global data */
/* exported data */

function handleInput(event) {
  img.setAttribute('src', input.value);
}
var img = document.querySelector('img');
var input = document.querySelector('#photoUrl');

input.addEventListener('input', handleInput);

var save = document.querySelector('form');
var $entriesView = document.querySelector("div[data-view='entries']");

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

  $entryForm.classList.add('hidden');
  $entriesView.className = ('');
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

window.addEventListener('DOMcontentLoaded', function (event) {
  var $entriesList = document.querySelector('.new');

  for (var i = 0; i < data.entries.length; i++) {
    var entry = renderEntry(data.entries[i]);
    $entriesList.appendChild(entry);

  }
});

var $entryForm = document.querySelector('form');

var $entryFormView = document.querySelector('div[data-view="entry-form"]');

function showEntries(event) {
  if (event.target.matches('div[data-view="entries"]')) {
    $entryFormView.classList = '';
  } else {
    $entriesView.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
}
$entriesView.addEventListener('click', event => showEntries(event));

function entryButton(event) {
  if (event.target.matches('#entries')) {
    $entryForm.classList.add('hidden');
  } else {
    $entriesLink.className = '';

  }
}
var $entriesLink = document.querySelector('.nav');
$entriesLink.addEventListener('click', entryButton);

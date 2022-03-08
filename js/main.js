/* global data */
/* exported data */
var $entryForm = document.querySelector('form');
function handleInput(event) {

  img.setAttribute('src', input.value);
}

function handleSubmit(event) {

  event.preventDefault();
  var title = $entryForm.elements.title.value;
  var photoUrl = $entryForm.elements.photoUrl.value;
  var notes = $entryForm.elements.notes.value;
  if (data.editing === null) {
    var Entry = {
      title: title,
      photo: photoUrl,
      notes: notes,
      id: data.nextEntryId
    };

    data.nextEntryId++;
    data.entries.unshift(Entry);
    img.setAttribute('src', 'images/placeholder-image-square.jpg');
    renderEntry(Entry);
  } else {
    var updatedEntryId = $entryForm.elements.existingEntryId.value;
    var updatedTitle = $entryForm.elements.title.value;
    var updatedPhotoUrl = $entryForm.elements.photoUrl.value;
    var updatedNotes = $entryForm.elements.notes.value;
    var updatedEntry = {
      title: updatedTitle,
      photo: updatedPhotoUrl,
      notes: updatedNotes,
      id: updatedEntryId
    };
    var indexToUpdate = data.entries.findIndex(entry => (Number(entry.id) === Number(updatedEntryId)));
    data.entries[indexToUpdate] = updatedEntry;
    data.editing = null;
    replaceExisitngEntry(updatedEntry);
  }
  $entryForm.reset();
  $entryFormView.classList.add('hidden');
  $entriesView.className = ('');

}
function replaceExisitngEntry(entry) {
  event.preventDefault();

  var updatedNode = renderEntry(entry);
  var entryAttribute = '[data-entry-id="' + entry.id + '"]';
  var oldListItem = document.querySelector(entryAttribute);

  oldListItem.replaceWith(updatedNode);
}

function renderEntry(entry) {

  var list = document.createElement('li');
  list.setAttribute('data-entry-id', entry.id);

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

  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.className = 'edit-btn';

  var editIcon = document.createElement('i');
  editIcon.className = 'fas fa-pen';

  list.appendChild(firstDiv);
  firstDiv.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);
  firstDiv.appendChild(secondcolHalf);
  secondcolHalf.appendChild(heading);
  secondcolHalf.appendChild(description);
  secondcolHalf.appendChild(button);
  button.appendChild(editIcon);
  var ul = document.querySelector('ul');
  ul.prepend(list);
  return list;

}

function editClick(event) {
  data.view = 'entry-form';
  var toEdit = event.target.closest('li');
  var entryId = toEdit.getAttribute('data-entry-id');
  var entry = data.entries.find(entry => entry.id == (entryId));

  if (event.target.tagName === 'I') {
    $entriesView.className = 'hidden';
    $entryFormView.className = '';
    var news = document.querySelector('#newEntryChange');
    news.textContent = 'Edit Entry';
    data.editing = entry;
    var title = document.querySelector('#title');
    var notes = document.querySelector('#notes');
    var photoUrl = document.querySelector('#photoUrl');
    var existingEntryId = document.querySelector('#existingEntryId');
    title.value = (data.editing.title);
    notes.value = (data.editing.notes);
    photoUrl.value = (data.editing.photo);
    img.setAttribute('src', photoUrl.value);
    existingEntryId.value = (entryId);

  }

}
var $newBtn = document.querySelector('.newbtn');
$newBtn.addEventListener('click', viewEntries);

function viewEntries() {
  data.view = 'entry-form';
  $entriesView.className = 'hidden';
  $entryFormView.classList.remove('hidden');
  document.getElementById('newEntryChange').textContent = 'New Entry';
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $entryForm.reset();

}

window.addEventListener('DOMContentLoaded', function (event) {
  var $entriesList = document.querySelector('.parent');
  $entriesList.addEventListener('click', editClick);
  for (var i = 0; i < data.entries.length; i++) {
    if (data.entries[i] !== null) {
      var entry = renderEntry(data.entries[i]);
      $entriesList.appendChild(entry);
    }
  }
});
var $entryFormView = document.querySelector('div[data-view="entry-form"]');
var $entriesView = document.querySelector("div[data-view='entries']");

if (data.view === 'entries') {
  $entryFormView.classList.add('hidden');
  $entriesView.classList.remove('hidden');

} else {
  data.view = 'entry-form';
  $entryFormView.classList.remove('hidden');
  $entriesView.classList.add('hidden');

}

function handleClickedEntriesLink(event) {
  $entryFormView.classList.add('hidden');
  $entriesView.className = '';
  data.view = 'entries';

}

var img = document.querySelector('img');
var input = document.querySelector('#photoUrl');

input.addEventListener('input', handleInput);

$entryForm.addEventListener('submit', handleSubmit);

var $entriesLink = document.querySelector('#entries');
$entriesLink.addEventListener('click', handleClickedEntriesLink);

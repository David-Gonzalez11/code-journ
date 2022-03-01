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

    // when no entries at all nextEntryId is 1
    // when new entry is created we give it id that is on dat.nextEntryID

    data.nextEntryId++;
    data.entries.unshift(Entry);
    img.setAttribute('src', 'images/placeholder-image-square.jpg');
    // render the newly created entry
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
    // console.log('existingEntryId', updatedEntryId);
    // console.log('title', existingTitle);
    // console.log('photo', existingPhotoUrl);
    var indexToUpdate = data.entries.findIndex(entry => (Number(entry.id) === Number(updatedEntryId)));
    data.entries[indexToUpdate] = updatedEntry;
    data.editing = null;
    replaceExisitngEntry(updatedEntry);
  }
  $entryForm.reset();
  $entryForm.classList.add('hidden');
  $entriesView.className = ('');

}
function replaceExisitngEntry(entry) {
  // grab eexisting element with entry id
  var updatedNode = renderEntry(entry);
  var entryAttribute = '[data-entry-id="' + entry.id + '"]';
  // console.log('attr', entryAttribute);
  // console.log(document.querySelector(entryAttribute));
  var oldListItem = document.querySelector(entryAttribute);
  oldListItem.replaceWith(updatedNode);
  // try adding existing child to the list
  // instead of append try and replace

  // console.log('list:', list);
  // replace old list item with new list item built above

  // proably going to use replaceWith()

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

  // var newdiv = document.createElement('div');
  // newdiv.setAttribute('class', 'row')

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
  editIcon.className = 'fas fa-pencil-alt';
  // var newcol = document.createElement('div');
  // newcol.setAttribute('class', 'column-half n');

  list.appendChild(firstDiv);
  firstDiv.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);
  firstDiv.appendChild(secondcolHalf);
  // secondcolHalf.appendChild(newcol);

  secondcolHalf.appendChild(heading);
  secondcolHalf.appendChild(description);
  // secondcolHalf.appendChild(editIcon);
  secondcolHalf.appendChild(button);
  button.appendChild(editIcon);
  // console.log('list:', list);
  return list;

}

// my chunk of code to listen for clicks on parent element//
function showEntries(event) {
  if (event.target.matches('div[data-view="entries"]')) {
    $entryFormView.classList = '';
  } else {
    $entriesView.classList.add('hidden');
    $entryForm.classList.remove('hidden');
  }
}
// var parent = document.getElementsByClassName('.parent');

function editClick(event) {
  var toEdit = event.target.closest('li');
  var entryId = toEdit.getAttribute('data-entry-id');
  var entry = data.entries.find(entry => entry.id == entryId);
  // console.log('entry', entry);
  if (event.target.tagName === 'I') {
    $entriesView.className = 'hidden';
    $entryFormView.className = '';
    data.editing = entry;
    var title = document.querySelector('#title');
    var notes = document.querySelector('#notes');
    var photoUrl = document.querySelector('#photoUrl');
    var existingEntryId = document.querySelector('#existingEntryId');
    // data.editing
    title.value = (data.editing.title);
    notes.value = (data.editing.notes);
    photoUrl.value = (data.editing.photo);
    existingEntryId.value = (entryId);
  }

  // hide the entries list and show the entry form when the edit icon is clicked

}

window.addEventListener('DOMContentLoaded', function (event) {

  // this was .parent before i changed it to .new//
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

$entriesView.addEventListener('click', event => showEntries(event));
$entryForm.classList.remove('hidden');

function entryButton(event) {
  if (event.target.matches('#entries')) {
    $entryForm.classList.add('hidden');
  } else {
    $entriesLink.className = '';

  }
}

var img = document.querySelector('img');
var input = document.querySelector('#photoUrl');

input.addEventListener('input', handleInput);

$entryForm.addEventListener('submit', handleSubmit);

$entriesView.addEventListener('click', event => showEntries(event));

var $entriesLink = document.querySelector('.nav');
$entriesLink.addEventListener('click', entryButton);

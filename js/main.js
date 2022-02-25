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
    save.reset();
    save.classList.add('hidden');
    $entriesView.className = ('');
  } else {
    // get value from inputs  and replace the value in data.editing with the new input values
    // go through data.entries to find entry with id that mactches data.editing.id
    //
  }
  // just  adding new entry
  // if not null then we want to update the new values to the data.entries
  // after saving changes we want to set data.editing to null

  //   var entryInput = {
  //     title: title,
  //     photoUrl: photoUrl,
  //     notes: notes
  //   };
  // }
  // var Entry = {
  //   title: title,
  //   photo: photoUrl,
  //   notes: notes,
  //   id: data.nextEntryId
  // };

  // when no entries at all nextEntryId is 1
  // when new entry is created we give it id that is on dat.nextEntryID

  data.nextEntryId++;
  data.entries.unshift(Entry);
  img.setAttribute('src', 'images/placeholder-image-square.jpg');
  save.reset();
  save.classList.add('hidden');
  $entriesView.className = ('');

}
save.addEventListener('submit', handleSubmit);

function renderEntry(entry) {
  var list = document.createElement('LI');
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

  var editIcon = document.createElement('i');
  editIcon.className = 'fas fa-user-edit pencil';
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
    save.classList.remove('hidden');
  }
}
// var parent = document.getElementsByClassName('.parent');

// function editClick(event) {
//   var toEdit = event.target.closest('li');
//   var entryId = toEdit.getAttribute('data-entry-id');
//   var entry = data.entries.find(entry => entry.id == entryId);
//   if (event.target.tagName === 'I') {
//     $entriesView.className = 'hidden';
//     $entryFormView.className = '';
//     data.editing = entry;
//     var title = document.querySelector('#title');
//     var notes = document.querySelector('#notes');
//     var photoUrl = document.querySelector('#photoUrl');
//     // data.editing
//     title.value = (data.editing.title);
//     notes.value = (data.editing.notes);
//     photoUrl.value = (data.editing.photo);
//   }

//   // hide the entries list and show the entry form when the edit icon is clicked

// }

window.addEventListener('DOMContentLoaded', function (event) {

  // this was .parent before i changed it to .new//
  var $entriesList = document.querySelector('.new');
  // $entriesList.addEventListener('click', editClick);
  for (var i = 0; i < data.entries.length; i++) {
    var entry = renderEntry(data.entries[i]);
    $entriesList.appendChild(entry);
  }
  // console.log('entries:', $entriesList);

});

// var $entryForm = document.querySelector('form');
// console.log('new entry:', $entryForm);
var $entryFormView = document.querySelector('div[data-view="entry-form"]');

$entriesView.addEventListener('click', event => showEntries(event));
// start losteng to entries event lostenr
// good palce to put function //
function entryButton(event) {
  if (event.target.matches('#entries')) {
    save.classList.add('hidden');
  } else {
    $entriesLink.className = '';

  }
}
var $entriesLink = document.querySelector('.nav');
$entriesLink.addEventListener('click', entryButton);

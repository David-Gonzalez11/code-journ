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
// everything seems fine up until this point so far i think

window.addEventListener('DOMcontentLoaded', renderEntry);
var row = document.querySelector('.new');

// for loop for function
for (var i = 0; i < data.entries.length; i++) {
  var entry = renderEntry(data.entries[i]);
  row.appendChild(entry);

}

// whole entry form
var tabcontainer = document.querySelector('form');

// entries
var tabs = document.querySelector('div[data-view="entries"]');

// entry form
var entryForm = document.querySelector('div[data-view="entry-form"]');

// var tabs = document.querySelector("div[data-view='entries']");
function handleClick(event) {
  event.preventDefault();
  // console.log(event.target);
  // console.log(tabs);

  // clicking save btn
  if (event.target.matches('form')) {
    tabs.classList.remove('hidden');
  } else {
    tabcontainer.classList.add('hidden');
  }
}
// this function above works//
// this function above is for the save buton which takes you to entries
tabcontainer.addEventListener('click', event => handleClick(event));

// clicking new btn
function entries(event) {
  if (event.target.matches('div[data-view="entries"]')) {
    entryForm.classList = '';
  } else {
    tabs.classList.add('hidden');
    tabcontainer.classList.remove('hidden');
  }// this works ///////////////////
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

// clickign new button
// var newBtn = document.querySelector('.newbtn');
// function forNew(event) {
//   if (event.target.matches('div[data-view="entry-form"]')) {
//     tabs.className = 'hidden';
//   } else {
//     tabcontainer = '';
//   }

// }
// newBtn.addEventListener('click', forNew);

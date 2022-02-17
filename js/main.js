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
  // var container = document.createElement('div');
  // container.setAttribute('class', 'container new');

  // var unordered = document.createElement('UL');

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

  var name = document.createElement('div');
  name.setAttribute('class', 'column-half');

  var heading = document.createElement('h2');
  heading.textContent = entry.title;

  // container.appendChild(firstDiv);
  // unordered.appendChild(list);

  firstDiv.appendChild(list);
  list.appendChild(colHalfdiv);
  colHalfdiv.appendChild(image);

  firstDiv.appendChild(secondcolHalf);
  secondcolHalf.appendChild(heading);
  secondcolHalf.appendChild(description);

  return firstDiv;
}
// everything seems fine up until this point so far i think

window.addEventListener('DOMcontentLoaded', renderEntry);
var row = document.querySelector('#entries');

// for loop for function
for (var i = 0; i < data.entries.length; i++) {
  var entry = renderEntry(data.entries[i]);
  row.appendChild(entry);

}

var tabcontainer = document.querySelector('.container-form');

var tabs = document.querySelector("div[data-view='entries']");
tabcontainer.addEventListener('click', handleClick);
function handleClick(event) {
  if (event.target.matches('.container-form')) {
    // for (var i = 0; i < data.entries.length; i++) {
    //   if (tabcontainer[i] === data.entries) {
    //     tabcontainer[i].className = 'tab active';
    //   } else {
    //     tabcontainer[i].className = 'tab';
    //   }
    // }
    tabcontainer.className = '';
  } else {
    tabs = event.target.getAttribute("div['data-view=entry-form']");
    tabs.className = 'hidden';
  }
}

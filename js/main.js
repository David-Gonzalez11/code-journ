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

var tabcontainer = document.querySelector('form');
var tabs = document.querySelector('div[data-view="entries"]');
// var tabs = document.querySelector("div[data-view='entries']");
function handleClick(event) {
  event.preventDefault();
  // console.log(event.target);
  // console.log(tabs);

  if (event.target.matches('form')) {
    tabs.className = '';
  } else {
    tabcontainer.className = 'hidden';
  }
}
// this function above is for the save buton which takes you to entries

tabcontainer.addEventListener('click', event => handleClick(event));

function entries(event) {
  if (event.target.matches('div[data-view="entries"]')) {
    tabs.className = 'hidden';
  } else {
    tabs.className = '';
  }

}
tabs.addEventListener('click', event => entries(event));

var newBtn = document.querySelector('.newbtn');
function forNew(event) {

}
newBtn.addEventListener('click', forNew);
// this is for entries

// console.log(tabcontainer);
//   if (event.target.matches('.container-form')) {

//     tabcontainer.className = '';
//   } else {
// tabs = event.target.getAttribute("div['data-view=entry-form']");
// //     tabs.className = 'hidden';
//   }
// }

// // for (var i = 0; i < data.entries.length; i++) {
// //   if (tabcontainer[i] === data.entries) {
// //     tabcontainer[i].className = 'tab active';
// //   } else {
// //     tabcontainer[i].className = 'tab';
// //   }
// // }

//  when new is clicked we want to hide entries
// to get hidden to show we would eed to remove hidden from it

// we want entry form to show

// if we want form to show we need to remove hidden class from it

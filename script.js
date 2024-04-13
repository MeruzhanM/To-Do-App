const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.getElementById('add-button');
const clearBtn = document.getElementById('clear-button')

addBtn.addEventListener('click', function() {
  if(inputBox.value === '') {
    alert('You need to write something!')
  } else {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = inputBox.value;
    listContainer.appendChild(paragraph);
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    paragraph.appendChild(span)
    inputBox.value = "";

    paragraph.addEventListener('click', function() {
      if(paragraph.classList.contains('checked')) {
        paragraph.classList.remove('checked')
      } else {
        paragraph.classList.add('checked')
      }
    })

    span.addEventListener('click', function() {
      span.parentElement.remove()
    })
  }
})

clearBtn.addEventListener('click', function() {
  if(listContainer.innerHTML === '') {
    alert('There is nothing to clear.')
  } else {
    listContainer.innerHTML = '';
  }
})

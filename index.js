const input = document.querySelector('input');


// console.log(input.addEventListener('click', function() {
//   alert('I was clicked!');
// }));

// function addingEventListener() {
//   input.addEventListener('click', function(event) {
//     return "clicked"
//   });
// }

function addingEventListener(){
  input.addEventListener('click',function(e){
  return 'event worked'
  });
}

function preventingDefault() {
  input.addEventListener('keydown', function(e) {
    if (e.which === 71) {
      return e.preventDefault();
    } else {
       return 'Not a "g"'
    }
  });
}

function stoppingPropagation(){
  const divs = document.querySelectorAll('div');
  function bubble(e) {
    e.stopPropagation();

    console.log(this.firstChild.nodeValue.trim() + ' bubbled');
  }
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', bubble);
  }
}

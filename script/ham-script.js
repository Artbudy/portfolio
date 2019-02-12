//Function for hamburger to change to x
function myFunction(x) {
    x.classList.toggle("change");
}

//Open mobile menu bar
var menu = document.getElementById('menu');
var nav = document.getElementById('nav');

  menu.addEventListener('click', function(e) {
      nav.classList.toggle('hide-mobile');
      e.preventDefault();
  });

//Jump to section on click
var skills = document.getElementById('skills');
var projects = document.getElementById('projects');
var contact = document.getElementById('contacts');

    skills.addEventListener('click', function (event) { 
        event.jump('.target-1')
        console.log('Completed!')
    });

    projects.addEventListener('click', function (event) { 
        event.jump('.target-2')
        console.log('Completed!')
    });

    contact.addEventListener('click', function (event) { 
        event.scroll('.target3',)
        console.log('Completed!')
    });

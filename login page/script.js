let signUpbtn = document.querySelector('.signUpbtn');
let signINbtn = document.querySelector('.signINbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');


signINbtn.addEventListener('click', () => {

  title.innerHTML = 'Sign In';
  signUpbtn.classList.add('disable');
  signINbtn.classList.remove('disable');
  signINbtn.classList.add('active');
  signUpbtn.classList.remove('active');
});
signUpbtn.addEventListener('click', () => {

  title.innerHTML = 'Sign Up';
  signUpbtn.classList.remove('disable');
  signINbtn.classList.add('disable');
  signINbtn.classList.add('active');
  signUpbtn.classList.remove('active');
});


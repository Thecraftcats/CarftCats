const btn = document.getElementById('btns')
new Typed('#typed',{
  strings : ['Hi i am a front end developer 👋'],
  typeSpeed : 100,
  delaySpeed : 8000,
  loop : true
});

btn.addEventListener('click', function() {
 document.body.classList.toggle('darkmode');
})
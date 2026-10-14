(function(){
  var body=document.body;
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)body.dataset.t=e.target.dataset.t})},{rootMargin:'-45% 0px -45% 0px'});
  document.querySelectorAll('section[data-t]').forEach(function(s){io.observe(s)});
  var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');rv.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.rv').forEach(function(n){rv.observe(n)});
  var fill=document.querySelector('.rail b'),dot=document.querySelector('.rail s'),tick=false;
  function upd(){tick=false;var h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;
    fill.style.transform='scaleY('+p+')';dot.style.top=(p*(innerHeight-12))+'px'}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
  document.querySelectorAll('.card').forEach(function(c){
    c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect();
      c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });
})();

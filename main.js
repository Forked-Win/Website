(function(){
  var body=document.body, secs=[].slice.call(document.querySelectorAll('section[data-t]'));
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)body.dataset.t=e.target.dataset.t})},{rootMargin:'-45% 0px -45% 0px'});
  secs.forEach(function(s){io.observe(s)});
  var rv=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('on');rv.unobserve(e.target)}})},{threshold:.2});
  document.querySelectorAll('.rv').forEach(function(n){rv.observe(n)});
  var fill=document.querySelector('.rail b'), dot=document.querySelector('.rail s'), tick=false;
  function upd(){tick=false;var h=document.documentElement.scrollHeight-innerHeight,p=h>0?scrollY/h:0;
    fill.style.transform='scaleY('+p+')';dot.style.top=(p*(innerHeight-12))+'px'}
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  var g=document.querySelector('.graph');
  addEventListener('scroll',function(){if(!still&&scrollY<innerHeight)g.style.transform='translateY('+(scrollY*.1)+'px)'},{passive:true});
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});
  upd();
})();

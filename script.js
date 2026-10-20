const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '메뉴 열기');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

const backToTopButton = document.querySelector('.mobile-back-to-top');
if (backToTopButton) {
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* Header shadow after scrolling */
(function(){const h=document.querySelector('.site-header');if(!h)return;const f=()=>h.classList.toggle('scrolled',window.scrollY>12);f();window.addEventListener('scroll',f,{passive:true});})();

/* Scroll reveal with light stagger */
(function(){
  const sel=['.section-heading','.intro-grid > *','.business-card','.service-item','.service-note','.values-heading','.value-item','.contact-panel','.ab-grid > *','.name-card','.name-op','.vision-grid article','.ab-value-grid article','.ci-grid > *','.swatch-grid article','.ratio','.ratio-note','.overview','.partner-grid > *'].join(',');
  const els=[...document.querySelectorAll(sel)];
  if(!('IntersectionObserver' in window)){return;}
  els.forEach(el=>{
    el.setAttribute('data-reveal','');
    const sibs=[...el.parentElement.children].filter(x=>x.hasAttribute('data-reveal')||els.includes(x));
    el.style.setProperty('--d',Math.min(sibs.indexOf(el)*0.09,0.45)+'s');
  });
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:0.12,rootMargin:'0px 0px -6% 0px'});
  els.forEach(el=>io.observe(el));
})();

/* Align the AI-chip pulse with the chip drawn in the hero artwork (chip is at 73.0% x, 35.5% y of the image) */
(function(){
  const hero=document.querySelector('.hero'),pulse=document.querySelector('.hero-pulse');
  if(!hero||!pulse)return;
  const fx=1752.5/2400,fy=425.7/1200;
  function place(){
    const W=hero.clientWidth,H=hero.clientHeight;let x,y;
    if(window.matchMedia('(max-width:700px)').matches){const iw=900,ih=450;x=-430+fx*iw;y=H-ih+fy*ih;}
    else if(window.matchMedia('(max-width:900px)').matches){const s=Math.max(W/1200,H/600),iw=1200*s,ih=600*s;x=(W-iw)*0.72+fx*iw;y=(H-ih)/2+fy*ih;}
    else{const s=Math.max(W/2400,H/1200),iw=2400*s,ih=1200*s;x=W-iw+fx*iw;y=(H-ih)/2+fy*ih;}
    pulse.style.left=x+'px';pulse.style.top=y+'px';
  }
  place();window.addEventListener('resize',place);window.addEventListener('load',place);
})();

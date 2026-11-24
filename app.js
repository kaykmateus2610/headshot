document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const closeMenu = () => {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  };
  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.body.classList.add('js-ready');

  if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-copy > *', {y: 18, opacity: 0, duration: .7, stagger: .09, ease: 'power2.out', delay: .1});
    gsap.from('.portrait', {scale: .94, opacity: 0, duration: .7, stagger: .07, ease: 'power2.out', delay: .25});
    gsap.utils.toArray('.reveal, .gallery-card, .step-card, .feature-card, .price-card, .promise-grid article').forEach((el) => {
      gsap.to(el, {opacity: 1, y: 0, duration: .65, ease: 'power2.out',
        scrollTrigger: {trigger: el, start: 'top 88%', once: true}
      });
    });
    gsap.to('.stats-band', {backgroundColor: '#d9f8f2', scrollTrigger:{trigger:'.stats-band',start:'top 80%',once:true}});
  } else {
    document.querySelectorAll('.reveal,.gallery-card,.step-card,.feature-card,.price-card,.promise-grid article').forEach(el => {
      el.style.opacity = '1'; el.style.transform = 'none';
    });
  }
});
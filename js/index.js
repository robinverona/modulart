console.log('script loaded');

Split(['#sidebar', '#content'], {
    minSize: 400,
    gutterAlign: 'start',
    sizes: [20, 80]
});


const items = document.querySelectorAll('.link--image');
const image = document.querySelector('img.floating-image');

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image');
    e.target.style.zIndex = 99;
    image.setAttribute('src', imageData);
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px';
    image.style.left = e.clientX + 'px';
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1;
    image.setAttribute('src', '');
  })
});

function startLoader() {
  let counterElement = document.querySelector('.counter');
  let currentValue = 0; 

  function updateCounter() {
    if (currentValue === 100) {
      return; 
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100; 
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;

    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

startLoader();


gsap.to(".counter", 0.25, {
  delay: 3.5,
  opacity: 0,
  display: 'none'
})


gsap.to(".bar", 1.5, {
  delay: 3.5, 
  height: 0, 
  stagger: {
    amount: 0.5
  },
  ease: "power4.inOut"
})

gsap.to(".overlay", 0.25, {
  delay: 5, 
  display: 'none'
})
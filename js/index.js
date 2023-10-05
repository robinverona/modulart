console.log('script loaded');

Split(['#sidebar', '#content'], {
    minSize: 400,
    gutterAlign: 'start',
    sizes: [20, 80]
})


const items = document.querySelectorAll('.link--image')
const image = document.querySelector('img.floating-image')

items.forEach((el) => {
  el.addEventListener('mouseover', (e) => {
    imageData = e.target.getAttribute('data-image')
    console.log(imageData)
    e.target.style.zIndex = 99
    image.setAttribute('src', imageData)
  })
  el.addEventListener('mousemove', (e) => {
    image.style.top = e.clientY + 'px'
    image.style.left = e.clientX + 'px'
  })
  el.addEventListener('mouseleave', (e) => {
    e.target.style.zIndex = 1
    image.setAttribute('src', '')
  })
})



function slider() {
  /* SLIDER FULL */
  let wrapper = document.querySelector('.wrapper');
  let wrapper2 = document.querySelector('.wrapper2');
  let items = document.querySelectorAll('.item');
  let next = document.querySelector('.next');
  let prev = document.querySelector('.prev');
  let number = document.querySelector('.number');
  let total = document.querySelector('.total');
  let width = window.getComputedStyle(wrapper).width;
  let widthClean = +width.slice(0, width.length - 2);
  let offset = 0;


  wrapper2.style.width = 100 * items.length + '%';
  number.textContent = ((offset / widthClean) + 1);
  total.textContent = items.length;

  /*Задаємо кожному слайду фіксовану ширину, в css або тут (таку як у wrapper)*/
  items.forEach(item => {
    item.style.width = width;
  })
  /* Задаємо обгорткам стиль */
  wrapper.style.overflow = 'hidden';
  wrapper2.style.display = 'flex';
  wrapper2.style.transition = '1s all';

  next.addEventListener('click', () => {
    if (offset == widthClean * (items.length - 1)) {
      offset = 0;
    } else {
      offset += widthClean;
    }
    wrapper2.style.transform = `translateX(-${offset}px)`;
    number.textContent = ((offset / widthClean) + 1);
  })

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = widthClean * (items.length - 1)
    } else {
      offset -= widthClean;
    }
    wrapper2.style.transform = `translateX(-${offset}px)`;
    number.textContent = ((offset / widthClean) + 1);
  })

  /* Перехід по нумерації дочірнього слайдера */
  let miniButtons = document.querySelector('.miniButtons');
  /*задаємо ширину для блоку кнопок,  100 залежить від розміру кнопок - міняємо */
  miniButtons.style.width = (items.length * 100) + 'px';

  for (let i = 0; i < items.length; i++) {
    let miniButton = document.createElement('div');
    miniButton.classList.add('miniButton');
    miniButton.textContent = (i + 1);
    miniButtons.appendChild(miniButton);
  }


  let miniButton = document.querySelectorAll('.miniButton');

  function removeClass(elements, classRemove) {
    elements.forEach(item => {
      item.classList.remove(classRemove);
    })
  }

  miniButton.forEach(item => {
    item.addEventListener('click', () => {
      let numberButton = item.textContent;
      removeClass(miniButton, 'activeButton');
      offset = ((numberButton - 1) * widthClean);
      wrapper2.style.transform = `translateX(-${offset}px)`;
      item.classList.add('activeButton');
      number.textContent = numberButton
    })
  })
}


export default slider;

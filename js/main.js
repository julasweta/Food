document.addEventListener('DOMContentLoaded', () => {



  const tabheaderItems = document.querySelectorAll('.tabheader__item');
  const tabcontainer = document.querySelector('.tabcontainer');
  
  let daysTable = document.querySelector('#days');
  let secondsTable = document.querySelector('#seconds');
  let minutesTable = document.querySelector('#minutes');
  let hoursTable = document.querySelector('#hours');

  const modal = document.querySelector('.modal');
  const btnsTell = document.querySelectorAll('.btn_tell');
  const modalClose = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');

  /******************************/
  /*  ТАБИ */
  const tabcontent = {
    item: [{
        nameLi: 'Фітнес',
        imgSrc: 'img/tabs/vegy.jpg',
        alt: 'vegy',
        text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'
      },
      {
        nameLi: 'Преміум',
        imgSrc: 'img/tabs/elite.jpg',
        alt: 'elite',
        text: 'Меню“ Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'

      },
      {
        nameLi: 'Піст',
        imgSrc: 'img/tabs/post.jpg',
        alt: 'post',
        text: 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!'
      },
      {
        nameLi: 'Збалансоване',
        imgSrc: 'img/tabs/vegy.jpg',
        alt: 'vegy',
        text: ' Меню "Сбалансированное" - это соответствие вашего рациона всем научным рекомендациям. Мы тщательно просчитываем вашу потребность в к/б/ж/у и создаем лучшие блюда для вас.'

      }
    ]

  }

  /*ф-ція видалення актив класу */
  function delActiveClass() {
    tabheaderItems.forEach(item => {
      item.classList.remove('tabheader__item_active');
    })
  }


  /*ф-ція видалення div tabcontent*/
  function delDiv() {
    for (let i = 0; i < tabcontainer.children.length; i++) {
      if (tabcontainer.children[i].classList.contains('tabcontent')) {
        tabcontainer.children[i].remove()
      }
    }

  }

  /* Заповнення динамічних даних  */
  tabheaderItems.forEach(item => {
    item.addEventListener('click', (event) => {
      delDiv();
      delActiveClass();
      item.classList.add('tabheader__item_active');

      for (let i = 0; i < tabcontent.item.length; i++) {
        if (tabcontent.item[i].nameLi == item.innerText) {
          let htmlDiv = `<div class="tabcontent" id="tabcontent"><img src = "${tabcontent.item[i].imgSrc}" alt = "${tabcontent.item[i].alt}"><div class="tabcontent__descr">${tabcontent.item[i].text}</div>`;

          tabcontainer.insertAdjacentHTML("afterBegin", htmlDiv);
        }
      }
    })
  })


  /******************************/
  /* ВСТАНОВЛЕННЯ ВІДЛІКУ ЧАСУ */
  const timenterv = setInterval(getDuration, 1000);

  function getDuration() {
    let nowDate = new Date();
    let endDate = new Date();
    endDate.setFullYear(2022);
    endDate.setMonth(8);
    endDate.setHours(2, 0, 0);
    if (endDate >= nowDate) {
      let my_time = (endDate - nowDate);
      let days = my_time / 1000 / 60 / 60 / 24;
      let daysRound = Math.floor(days);
      let hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
      let hoursRound = Math.floor(hours);
      let minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
      let minutesRound = Math.floor(minutes);
      let seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
      let time = hoursRound + ':' + minutesRound + ':' + seconds;
      daysTable.innerHTML = daysRound;
      minutesTable.innerHTML = minutesRound;
      secondsTable.innerHTML = seconds;
      hoursTable.innerHTML = hoursRound;
    } else {
      endDate = nowDate;
      let my_time = (endDate - nowDate);
      let days = my_time / 1000 / 60 / 60 / 24;
      let daysRound = Math.floor(days);
      let hours = my_time / 1000 / 60 / 60 - (24 * daysRound);
      let hoursRound = Math.floor(hours);
      let minutes = my_time / 1000 / 60 - (24 * 60 * daysRound) - (60 * hoursRound);
      let minutesRound = Math.floor(minutes);
      let seconds = my_time / 1000 - (24 * 60 * 60 * daysRound) - (60 * 60 * hoursRound) - (60 * minutesRound);
      let time = hoursRound + ':' + minutesRound + ':' + seconds;
      daysTable.innerHTML = daysRound;
      minutesTable.innerHTML = minutesRound;
      secondsTable.innerHTML = seconds;
      hoursTable.innerHTML = hoursRound;
    }

  }


  /******************************/
  /*   МОДАЛЬНІ ВІКНА   */
  /* ф-ція відкриття модального вікна */
  function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  /* відкриття модального вікна */
  btnsTell.forEach(item => {
    item.addEventListener('click', openModal);
  })

  /*ф-ція закриття модального вікна */
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
    clearInterval(timerId); // очищаємо відкриття через інтервал часу, щоб не відкривалось повторно, після   того  як відкрив користувач
    window.removeEventListener('scroll', openTime); // очищаємо відкриття при листанні догизу, щоб не відкривалось повторно, після   того  як відкрив користувач
  }

  /*закриття модального вікна */
  modalClose.addEventListener('click', closeModal);

  /* закриття модального вікна в будь-якому місці */
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  })

  /* ф-ція відкрити якщо пролистали до кінця сторінки   */
  function openTime() {
    if ((window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight)) {
      openModal();
      window.removeEventListener('scroll', openTime) //  видаляємо відслідковування , щоб не відкривалось повторно, після   того  як пролистали донизу
    }
  }

  const timerId = setTimeout(openModal, (1000 * 60));
  window.addEventListener('scroll', openTime);


  /*ОТРИМАННЯ З БАЗ ДАНИХ json -  https://habr.com/ru/company/ruvds/blog/477286/  */
  /*  axios
     .post("/db.json")
     .then(response => {
       {
         for (let i = 0; i < response.data.menu.length; i++) {
           new Card(
             response.data.menu[i].img,
             response.data.menu[i].altimg,
             response.data.menu[i].title,
             response.data.menu[i].descr,
             response.data.menu[i].price,
             '.menu__field .container'
           ).addBlock();
         }
       }
     })
     .catch(error => console.log(error)); */


  //////////////////////////
  class Card {
    constructor(img, alt, title, text, price, parentSelector) {
      this.img = img;
      this.alt = alt;
      this.title = title;
      this.text = text;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
    }


    addBlock() {
      let element = document.createElement('div');
      element.className = 'menu__item'
      element.innerHTML = `
                    <img src="${this.img}" alt="${this.alt}">
                    <h3 class="menu__item-subtitle">${this.title}"</h3>
                    <div class = "menu__item-descr" > ${this.text}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `
      this.parent.append(element);
    }

  }

  /*   */

  /* ВІДПРАВЛЕННЯ ФОРМИ  обовязково щоб в формі всюди був атрибут name */
  /*   const form = document.querySelectorAll('form');
    const message = {
      loading: 'Завантаження',
      succes: 'Дякую, очікуйте на дзвінок',
      error: 'Помилка'
    };

    form.forEach(item => {
      dataPost(item);
    })
   */
  /*
    function dataPost(form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        /*    const request = new XMLHttpRequest();
           request.open('POST', 'form.php');

           const formdata = new FormData(form);
           request.send(formdata);

           request.addEventListener('load', () => {
             if (request.status === 200) {
               form.reset();
               closeModal();
               alert(message.succes);
             } else {
               console.log('kkk')
             }
           }) */
  /*
        const sendPostRequest = async () => {
          try {
            let formdata = new FormData(form);
            let json = JSON.stringify(Object.fromEntries(formdata.entries()));
            let js = JSON.parse(json)
            const resp = await axios.post('http://localhost:3000/requests', js);
            form.reset();
            closeModal();
            alert(message.succes);
            console.log(resp.data);
          } catch (err) {
            console.error(err);
          }
        };

        sendPostRequest();
      })
    }
    */

  /* SLIDER CUSTOM */
  /*  let itemSliders = document.querySelectorAll('.offer__slide');
   let prev = document.querySelector('.offer__slider-prev');
   let next = document.querySelector('.offer__slider-next');
   let current = document.querySelector('#current');
   let total = document.querySelector('#total');
   let number = 0;


   function showSlide(number) {
     for (let i = 0; i < itemSliders.length; i++) {
       total = itemSliders.length;
       if (number == i) {
         itemSliders[i].style.display = 'block';
         itemSliders[i].classList.add('show_slide');
         current.textContent = '0' + (number + 1);
       } else {
         itemSliders[i].style.display = 'none';
       }
     }
   }

   showSlide(number);

   next.addEventListener('click', function () {
     if (number < itemSliders.length-1) {
       number++;
       showSlide(number);
     } else {
       number = 0;
       showSlide(number);
     }

   })

   prev.addEventListener('click', function () {
     if (number <= 0) {
       number = itemSliders.length-1;
       showSlide(number);
     } else {
       number--;
       showSlide(number);
     }
   })
  */


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

  /*КАЛЬКУЛЯТОР */

  let gender = document.querySelectorAll('.gender');
  const activities = document.querySelectorAll('.activity');
  let height1 = document.querySelector('#height');
  let weight1 = document.querySelector('#weight');
  let age = document.querySelector('#age');
  let resultCalc = document.querySelector('.calculating__result span');

  gender.forEach(item => {
    item.addEventListener('click', () => {
      removeClass(gender, 'calculating__choose-item_active');
      item.classList.add('calculating__choose-item_active');
      setRes();
    })
  })

  activities.forEach(item => {
    item.addEventListener('click', () => {
      removeClass(activities, 'calculating__choose-item_active');
      item.classList.add('calculating__choose-item_active');
      setRes();
    })
  })

 let resHeight = 178;
  let reg = /\d/;

  function regSearch(element, resElement) {
    let str = String(element.value);
    if (reg.test(String(str))) {
      resElement = element.value;
      setRes();
    } else {
      alert('Ввідіть коректні дані');
    }
  }


  height1.addEventListener('input', () => {
    regSearch(height1, resHeight);
      resHeight = height1.value;
      setRes();
  })

  let resWeight = 72;
  weight1.addEventListener('input', () => {
    regSearch(weight1, resWeight);
    resWeight = weight1.value;
    setRes();
  })

  let resAge = 25;
  age.addEventListener('input', () => {
    regSearch(age, resAge);
    resAge = age.value;
    setRes();
  })



  /* women */
  function activityWomen() {
    activities.forEach(item => {
      if (item.classList.contains('calculating__choose-item_active')) {
        let getActivation = item.id;
        if (getActivation == 'low') {
          resultCalc.innerText = Math.floor((447.6 + (3.1 * Number(resHeight)) + (9.2 * Number(resWeight)) - (4.3 * Number(resAge))) * 1.2);
        }
        if (getActivation == 'small') {
          resultCalc.innerText = Math.floor((447.6 + (3.1 * Number(resHeight)) + (9.2 * Number(resWeight)) - (4.3 * Number(resAge))) * 1.375);
        }
        if (getActivation == 'medium') {
          resultCalc.innerText = Math.floor((447.6 + (3.1 * Number(resHeight)) + (9.2 * Number(resWeight)) - (4.3 * Number(resAge))) * 1.55);
        }
        if (getActivation == 'high') {
          resultCalc.innerText = Math.floor((447.6 + (3.1 * Number(resHeight)) + (9.2 * Number(resWeight)) - (4.3 * Number(resAge))) * 1.725);
        }

      }
    })
  }

  /* man  */
  function activityMan() {
    activities.forEach(item => {
      if (item.classList.contains('calculating__choose-item_active')) {
        let getActivation = item.id;
        if (getActivation == 'low') {
          resultCalc.innerText = Math.floor((88.36 + (4.8 * Number(resHeight)) + (13.4 * Number(resWeight)) - (5.7 * Number(resAge))) * 1.2);
        }
        if (getActivation == 'small') {
          resultCalc.innerText = Math.floor((88.36 + (4.8 * Number(resHeight)) + (13.4 * Number(resWeight)) - (5.7 * Number(resAge))) * 1.375);
        }
        if (getActivation == 'medium') {
          console.log(resHeight, resWeight, resAge)
          resultCalc.innerText = Math.floor((88.36 + (4.8 * Number(resHeight)) + (13.4 * Number(resWeight)) - (5.7 * Number(resAge))) * 1.55);
        }
        if (getActivation == 'high') {
          resultCalc.innerText = Math.floor((88.36 + (4.8 * Number(resHeight)) + (13.4 * Number(resWeight)) - (5.7 * Number(resAge))) * 1.725);
        }

      }
    })
  }


  function setRes() {
    gender.forEach(item => {
      if (item.classList.contains('calculating__choose-item_active')) {
        let getGender = item.textContent;
        if (getGender == 'Жінка') {
          activityWomen();
        }
        if (getGender == 'Чоловік') {
          activityMan();
        }

      }
    })
  }
  setRes();
















})

document.addEventListener('DOMContentLoaded', () => {

  const tabheaderItems = document.querySelectorAll('.tabheader__item');
  const tabcontainer = document.querySelector('.tabcontainer');
  const tabheader = document.querySelector('tabheader');
  const tabcontentDiv = document.querySelectorAll('tabcontent');
  let hours = document.querySelector('#days');
  let daysTable = document.querySelector('#days');
  let secondsTable = document.querySelector('#seconds');
  let minutesTable = document.querySelector('#minutes');
  let hoursTable = document.querySelector('#hours');


  /*  ТАБИ */
  const tabcontent = {
    item: [{
        nameLi: 'Фитнес',
        imgSrc: 'img/tabs/vegy.jpg',
        alt: 'vegy',
        text: 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Для людей, которые интересуются спортом; активных и здоровых. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!'
      },
      {
        nameLi: 'Премиум',
        imgSrc: 'img/tabs/elite.jpg',
        alt: 'elite',
        text: 'Меню“ Премиум” - мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд.Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!'

      },
      {
        nameLi: 'Постное',
        imgSrc: 'img/tabs/post.jpg',
        alt: 'post',
        text: 'Наше специальное “Постное меню” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения. Полная гармония с собой и природой в каждом элементе! Все будет Ом!'
      },
      {
        nameLi: 'Сбалансированное',
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





















})

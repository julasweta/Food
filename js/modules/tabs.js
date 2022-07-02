function tabs() {

  /******************************/
  /*  ТАБИ */

  const tabheaderItems = document.querySelectorAll('.tabheader__item');
  const tabcontainer = document.querySelector('.tabcontainer');

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

}

export default tabs;

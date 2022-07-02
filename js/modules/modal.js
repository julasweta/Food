function modal(){

  /******************************/
  /*   МОДАЛЬНІ ВІКНА   */
   const modal = document.querySelector('.modal');
   const btnsTell = document.querySelectorAll('.btn_tell');
   const modalClose = document.querySelector('.modal__close');
  const modalDialog = document.querySelector('.modal__dialog');

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

}

export default modal;

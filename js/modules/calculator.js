function calculator() {
   /*КАЛЬКУЛЯТОР */

   let gender = document.querySelectorAll('.gender');
   const activities = document.querySelectorAll('.activity');
   let height1 = document.querySelector('#height');
   let weight1 = document.querySelector('#weight');
   let age = document.querySelector('#age');
  let resultCalc = document.querySelector('.calculating__result span');

  function removeClass(elements, classRemove) {
    elements.forEach(item => {
      item.classList.remove(classRemove);
    })
  }

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

}

export default calculator;

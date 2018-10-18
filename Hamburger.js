/**
 * Объект гамбургер. Выберите размер, добавьте начинку, картошку фри, приправу, соус и
 * узнайте стоимость и калорийность
 * @constructor
 * @param {string} size , 'small' or 'big' - выбери размер
 * @param {string} addCheese, добавь сыр('addCheese'), если хочешь, если нет - 'no'
 * @param {string} addSalad,добавь салат('addSalad'), если любишь травку если нет - 'no'
 * @param {string} addFrenchFries, добавь к заказу картошку Фри ('addFrenchFries') если нет - 'no'
 * @param {string} addFlavouring, добавь приправу ('addFlavouring') если нет - 'no'
 * @param {string} addMayonnaise, добавь майонез ('addMayonnaise') если нет - 'no'
 */
class Hamburger {
  constructor(size, addCheese, addSalad, addFrenchFries, addFlavouring, addMayonnaise) {
    this.size = size;
    this.cheese = addCheese;
    this.salad = addSalad;
    this.frenchFries = addFrenchFries;
    this.flavouring = addFlavouring;
    this.mayoniese = addMayonnaise;
    this.showMyHamburger();
    this.validate();
    this.getPrice();
    this.getCalories();
    this.getStaffing();
  }

  validate() {
    let size =  this.size;
    let cheese = this.cheese;
    let salad = this.salad;
    let frenchFries = this.frenchFries;
    let flavouring = this.flavouring;
    let mayoniese = this.mayoniese;
    let allParameters = [
      'big', 'small', 'no', 'addCheese', 'addSalad', 'addFrenchFries', 'addFlavouring', 'addMayonnaise'
    ];

    if (size !== 'big'  && size !== 'small' && size !== 'no') {
      console.log (`Вы неверно задали параметр размера гамбургера: '${this.size}'. 
      Доступные варианты: '${allParameters[0]}',  '${allParameters[1]}', '${allParameters[2]}'`)
    }
    if (cheese !== 'addCheese'  && cheese !== 'no') {
      console.log (`Вы неверно задали параметр добавки сыра: '${this.cheese}'. 
      Доступные варианты: '${allParameters[3]}', '${allParameters[2]}'`)
    }
    if (salad !== 'addSalad'  && salad !== 'no') {
      console.log (`Вы неверно задали параметр добавки салата: '${this.salad}'. 
      Доступные варианты: '${allParameters[4]}', '${allParameters[2]}'`)
    }
    if (frenchFries !== 'addFrenchFries'  && frenchFries !== 'no') {
      console.log (`Вы неверно задали параметр добавки картошки: '${this.frenchFries}'. 
      Доступные варианты: '${allParameters[5]}', '${allParameters[2]}'`)
    }
    if (flavouring !== 'addFlavouring'  && flavouring !== 'no') {
      console.log (`Вы неверно задали параметр добавки приправы: '${this.flavouring}'. 
      Доступные варианты: '${allParameters[6]}', '${allParameters[2]}'`)
    }
    if (mayoniese !== 'addMayonnaise'  && mayoniese !== 'no') {
      console.log (`Вы неверно задали параметр добавки майонеза: '${this.mayoniese}'. 
      Доступные варианты: '${allParameters[7]}', '${allParameters[2]}'`)
    }
  }

  showMyHamburger() {
    console.log(this);
  }

  getPrice() {
    let prices = {
      bigSizeHamburger: 100,
      smallSizeHamburger: 50,
      cheese: 10,
      salad: 20,
      frenchFries: 15,
      flavouring: 15,
      mayoniese: 20,
    };
    let hamburgerPrice = [];
    if (this.size === 'big') {
      hamburgerPrice.push(prices.bigSizeHamburger)
    } else if (this.size === 'small') {
      hamburgerPrice.push(prices.smallSizeHamburger)
    } else hamburgerPrice.push(0);
    if (this.cheese === 'addCheese') {
      hamburgerPrice.push(prices.cheese)
    } else hamburgerPrice.push(0);
    if (this.salad === 'addSalad') {
      hamburgerPrice.push(prices.salad)
    } else hamburgerPrice.push(0);
    if (this.frenchFries === 'addFrenchFries') {
      hamburgerPrice.push(prices.frenchFries)
    } else hamburgerPrice.push(0);
    if (this.flavouring === 'addFlavouring') {
      hamburgerPrice.push(prices.flavouring)
    } else hamburgerPrice.push(0);
    if (this.mayoniese = 'addMayonnaise') {
      hamburgerPrice.push(prices.mayoniese)
    } else hamburgerPrice.push(0);
    let totalPrice = 0;
    for (const element of hamburgerPrice) {
      totalPrice += element;
    }
    return console.log(`Разбивка стоимости: ${hamburgerPrice}`, `Цена итого: ${totalPrice}`);
  }
  getCalories() {
    let calories = {
      bigSizeHamburger: 40,
      smallSizeHamburger: 20,
      cheese: 20,
      salad: 5,
      frenchFries: 10,
      flavouring: 0,
      mayoniese: 5,
    };
    let hamburgerCalories = [];
    if (this.size === 'big') {
      hamburgerCalories.push(calories.bigSizeHamburger)
    } else if (this.size === 'small') {
      hamburgerCalories.push(calories.smallSizeHamburger)
    } else hamburgerCalories.push(0);
    if (this.cheese === 'addCheese') {
      hamburgerCalories.push(calories.cheese)
    } else hamburgerCalories.push(0);
    if (this.salad === 'addSalad') {
      hamburgerCalories.push(calories.salad)
    } else hamburgerCalories.push(0);
    if (this.frenchFries === 'addFrenchFries') {
      hamburgerCalories.push(calories.frenchFries)
    } else hamburgerCalories.push(0);
    if (this.flavouring === 'addFlavouring') {
      hamburgerCalories.push(calories.flavouring)
    } else hamburgerCalories.push(0);
    if (this.mayoniese = 'addMayonnaise') {
      hamburgerCalories.push(calories.mayoniese)
    } else hamburgerCalories.push(0);
    let totalCalories = 0;
    for (const element of hamburgerCalories) {
      totalCalories += element;
    }
    return console.log(`Разбивка калорийности: ${hamburgerCalories}`, `Калорий итого: ${totalCalories}`);
  }
  getStaffing() {
    let hamburgerStaffing = [];

    if (this.hasOwnProperty('cheese') && this.cheese === 'addCheese') {
      hamburgerStaffing.push('cheese');
    }
    if (this.hasOwnProperty('salad') && this.salad === 'addSalad') {
      hamburgerStaffing.push('salad');
    }
    if (this.hasOwnProperty('frenchFries') && this.frenchFries === 'addFrenchFries') {
      hamburgerStaffing.push('frenchFries');
    }
    if (this.hasOwnProperty('flavouring') && this.flavouring === 'addFlavouring') {
      hamburgerStaffing.push('flavouring');
    }
    if (this.hasOwnProperty('mayoniese') && this.mayoniese === 'addMayonnaise') {
      hamburgerStaffing.push('mayoniese');
    }
    console.log(`Дополнение к гамбургеру: ${hamburgerStaffing}`);
  }

  deleteObjectProperty(property){
    if (this.hasOwnProperty(property)){
       delete this[property];
       console.log(this);
    }
  }

}

let myHamburger = new Hamburger('big', 'no', 'addSalad', 'addFrenchFries', 'addFlavouring', 'addMayonnaise');

let mySecondHamburger = new Hamburger('small', 'no', 'addSalad', 'no', 'addFlvouring', 'no');

let myThirdHamburger = new Hamburger('d', 'no', 'adSalad', 'no', 'addFlavouring', 'no');

myThirdHamburger.deleteObjectProperty('salad');
myThirdHamburger.getPrice();
myThirdHamburger.getCalories();
myThirdHamburger.getStaffing();
myThirdHamburger.validate();
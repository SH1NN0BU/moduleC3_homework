///////////////////////////////////////////////////////
// Homework C3.3
// Open c3_3.html to test results in console log
//////////////////////////////////////////////////////

const junior = {
    city : "Moscow",
    name : "Alexander"
  }

// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.

function printObject (obj) {
    console.log(`Printing fields of ${obj}`);
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop, obj[prop]);
      }
    }
  }

  printObject(junior)

  // Написать функцию, которая принимает в качестве аргументов строку и объект, 
  // а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
  // Функция должна возвращать true или false.
// import replayControl from '..//replay-control/replay-control'

// var nowDate = new Date();
// var futDate = new Date();

// function currentDate(date) {
//   var pad = function (num) {
//     return (num < 10 ? '0' : '') + num;
//   };

//   return date.getFullYear() +
//     '.' + pad(date.getMonth() + 1) +
//     '.' + pad(date.getDate()) +
//     ' ' + pad(date.getHours()) +
//     ':' + pad(date.getMinutes());
// }

// function futureDate(date) {
//   var pad = function (num) {
//     return (num < 10 ? '0' : '') + num;
//   };

//   return date.getFullYear() + 1 +
//     '-' + pad(date.getMonth() + 1) +
//     '-' + pad(date.getDate()) +
//     'T' + pad(date.getHours()) +
//     ':' + pad(date.getMinutes());
// }

// var now = currentDate(nowDate);
// var future = futureDate(futDate);
// // var nowFormat;


// function validation(inputCase, newFormat) {
//   // console.log(inputCase, newFormat)

//   const inputCaseValue = inputCase.trim();


//   function currentDate(newFormat) {
//     var pad = function (num) {
//       return (num < 10 ? '0' : '') + num;
//     };

//     return pad(new Date(newFormat).getFullYear()) +
//       '.' + pad(Number(new Date(newFormat).getMonth() + 1)) +
//       '.' + pad(new Date(newFormat).getDate()) +
//       ' ' + pad(new Date(newFormat).getHours()) +
//       ':' + pad(new Date(newFormat).getMinutes());
//   }

//   const nowFormat = currentDate(newFormat);

//   // console.log(inputCaseValue, nowFormat);
//   switch (true) {
//     case inputCaseValue === "":
//       console.log(`Вкажіть справу`);
//       // inputCase.value = '';
//       // const a = `Вкажіть справу`;
//       // popupError(a);
//       break;
//     case inputCaseValue.length >= 30:
//       console.log(`Довжина рядка не може бути 30 символів`);
//       // inputCase.value = '';
//       // errorPopup.innerHTML = `Довжина рядка не може бути 30 символів`;
//       // popupError();
//       break;
//     case newFormat === "":
//       console.log(`Вкажіть дату`);
//       // inputCase.value = '';
//       // errorPopup.innerHTML = `Вкажіть дату`;
//       // popupError();
//       break;
//     case nowFormat <= now:
//       console.log(`Ця дата застаріла`);
//       // inputStartOfExecution.value = '';
//       // errorPopup.innerHTML = `Ця дата застаріла`;
//       // popupError();
//       break;
//     case newFormat >= future:
//       console.log(`Більше ніж на рік планувати не можна`);
//       // inputStartOfExecution.value = '';
//       // errorPopup.innerHTML = `Більше ніж на рік планувати не можна`;
//       // popupError();
//       break;
//     default:
//       replayControl(inputCase, newFormat);
//       break;
//   }
// }

// export default validation;
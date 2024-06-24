const main = document.querySelector(".main");

setInterval(()=> {
    const newdate = new Date();
    const clock = newdate.toLocaleTimeString();
    main.innerHTML = `${clock}`
  }, 1000);



//   const date = new Date();
// const hours = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// let show;
// if(hours>=0 && hours<=11){
//   show = "AM"
// }
// else{
//     show = "PM"
// }
//     main.innerHTML = `${hours} : ${minutes} : ${seconds}  ${show}`;
//   }, 1000);
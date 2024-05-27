function reloj(){
    // sacando la fecha del dispocitivo 
    let tiempo = new Date();
    let segundo = tiempo.getSeconds();
    let minuto = tiempo.getMinutes();
    let hora = tiempo.getHours();
    // haciendo algunos 
    let rh = 360 / 12 - 360;
    let hg = rh * hora;
    let mm = (6 / 60) * segundo;
    let hm = (30 / 60) * minuto;
    // girando las flechas de acuerdo al tiempo sacado anteriormente
    document.getElementById('ts').style.transform = `rotate(calc(6deg * ${segundo}))`;
    document.getElementById('tm').style.transform = `rotate(calc((6deg * ${minuto}) + ${mm}deg))`;
    document.getElementById('th').style.transform = `rotate(calc(${hg}deg + ${hm}deg))`;
  
    if ((hora >= 17) || (hora <= 7)){
        estilosReloj();
    }
    
  }
  reloj();
  function estilosReloj(){
    document.documentElement.style = `
      --c1: #131313;
      --c2: white;
      --cb: hsl(232, 100%,60%);
      --cs: hsl(232, 100%,50%);
      --cbs: yellow;
      --cbm: red;
      --cbh: dodgerblue;
    `;
  }
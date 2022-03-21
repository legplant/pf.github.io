document.querySelectorAll(".scroll_a").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      overwrite: "auto",
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
       
        
      },
    }
  );
});

document.querySelectorAll(".scroll_b").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 1 },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      overwrite: "auto",
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
       
        
      },
    }
  );
});

document.querySelectorAll(".scroll_x").forEach((ft) => {
  gsap.fromTo(
    ft,
    { x: 50, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      overwrite: "auto",
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: ft,
        start: "top 90%",
        ease: "expo",
        
      },
    }
  );
});





// // envelope animation
// window.onload = function(){
//   var tl = new TimelineLite({delay: 1}),
//     firstBg = document.querySelectorAll('.text__first-bg'),
//     secBg = document.querySelectorAll('.text__second-bg'),
//     word  = document.querySelectorAll('.text__word');
  
//   tl
//     .to(firstBg, 0.2, {scaleX:1})
//     .to(secBg, 0.2, {scaleX:1})
//     .to(word, 0.1, {opacity:1}, "-=0.1")  
//     .to(firstBg, 0.2, {scaleX:0})
//     .to(secBg, 0.2, {scaleX:0});
  
//   document.querySelector('.restart').onclick = function() {tl.restart()};
// }







// gsap.from(".hero", {
  
//   opacity: 0,
//   y: 100,
//   delay: 0.5, //２秒後にアニメーションさせる
//   duration: 0.5, //５秒後かけてアニメーションさせる
//   ease: "sine.out",
//   scrolltrigger: {
//     trigger: ".hero",
//     start: "center 50%",
//     end: "center 25%",
//     scrub: true, // アニメーションをスクロール位置にリンクさせる
//     markers: true, // マーカー表示  },
//   },
// });

// gsap.from(".introduction", {
//   opacity: 0,
//   y: 100,
//   delay: 0.5, //２秒後にアニメーションさせる
//   duration: 0.5, //５秒後かけてアニメーションさせる
//   ease: "sine.out",
//   scrolltrigger: {
//     trigger: ".introduction",
//     start: "center 50%",
//     end: "center 25%",
//     scrub: true, // アニメーションをスクロール位置にリンクさせる
//     markers: true // マーカー表示
//   },
// });

// gsap.from(".message", {
//   opacity: 0,
//   y: 100,
//   delay: 0.5, //２秒後にアニメーションさせる
//   duration: 0.5, //５秒後かけてアニメーションさせる
//   ease: "sine.out",
//   scrolltrigger: {
//     trigger: ".message",
//     start: "center 50%",
//     end: "center 25%",
//     scrub: true, // アニメーションをスクロール位置にリンクさせる
//     markers: true // マーカー表示
//   },
// });

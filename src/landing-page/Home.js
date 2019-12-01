import React from 'react';
import anime from 'animejs/lib/anime.es.js';
function Home (props) {
    
    let textWrapper = document.querySelector('.letters');

    textWrapper ? textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>"): props.history.push('/')    

    anime.timeline({loop: false})
    .add({
      targets: '.ml7 .letter',
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 50 * i
    })
    // .add({
    //     targets: '.ml7',
    //     opacity: 0,
    //     duration: 3000,
    //     easing: "easeOutExpo",
    //     delay: 0
    //   })
      .add({
        targets: '.text-wrapper2',
        opacity: 1,
        duration: 500,
        easing: "easeInExpo",
        delay: 0
      })

    return (
        <>
        <h1 className="ml7">
            <span className="text-wrapper">
                    <span className="letters">A bookshelf that listens, learns and helps.</span>
            </span>
        </h1>
        <h1 className="ml8">
            <span className="text-wrapper2">Sign in to see your smart list.</span>
        </h1>
        </>
    )
}

export default Home;
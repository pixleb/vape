import React, { useRef, useState, useEffect } from 'react';

const ButtonScrollTop = () => {
    // fade
    const [offset, setOffset] = useState(0);
    const [visible, setVisible] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            
            setOffset(window.scrollY);
            setVisible(!Number(window.pageYOffset<=window.innerHeight));
        }
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, {
            passive: true
        });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    //scroll
    const scrollToTop = () => {
        const startingY = window.pageYOffset;
        const duration = 1000; // 1000 миллисекунд (1 секунда) для плавного скролла
        const startTime = performance.now();

        const easeInOut = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const scrollToTopAnimation = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            window.scrollTo(0, easeInOut(elapsedTime, startingY, -startingY, duration));

            if (elapsedTime < duration) {
                requestAnimationFrame(scrollToTopAnimation);
            }
        };

        requestAnimationFrame(scrollToTopAnimation);
    };

    return (
    <>
        { visible ? (
    <div onClick={scrollToTop}
     style = {{
        'position': 'fixed',
        'bottom': '10px',
        'right': '10px'
        }}
     >
      
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="58" height="58" rx="29" fill="#E5E7EB"/>
<path d="M22 27L29 20M29 20L36 27M29 20V38" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 27L29 20M29 20L36 27M29 20V38" stroke="black" stroke-opacity="0.2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
     
      </div>
    ) : "" }
      </>
  );
};

export default ButtonScrollTop;

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
      // Add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller-inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // Add aria-hidden to it
      // Add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
}

function buzzIt() {
    const scrollerWrapper = document.querySelector(".scroller-wrapper");

    // Make an array from the elements within `.bg-container`
    const background = document.querySelector(".bg-container");
    const backgroundContent = Array.from(background.children);

    // Get how many times the wrapper should be cloned to cover all background
    let backgroundHeight = background.offsetHeight;
    let wrapperHeight = scrollerWrapper.offsetHeight;
    let n = Number(backgroundHeight / wrapperHeight);

    // For each item in the array, clone it n times
    // Add it into the `.bg-container`
    backgroundContent.forEach((item) => {
        for (let i = 0; i <= n; i++) {
            const duplicatedItem = item.cloneNode(true);
            background.appendChild(duplicatedItem);
        }
    })
}

window.addEventListener("load", () => {buzzIt()});
// document - built-in js object, represents the entire HTML page
//addEventListener tells browser to use function when HTML content is finished loading
// (DOMContentLoaded)
// the way the function is created in event listener is ANONYMOUS
document.addEventListener("DOMContentLoaded", function () {
  function adjustContentHeight() {
    const header = document.querySelector(".navbar");
    const footer = document.querySelector("footer");
    const content = document.querySelector(".hero");
    // here, const doesn't freeze numerical value, only whose value it takes

    if (!header || !footer || !content) {
      console.log("Element not found!");
      return;
    }

    const viewportHeight = window.innerHeight;
    // window - global object, gives access to many events, like resize here
    // innerHeight - height of visible part of screen (excl. scrollbars)

    const headerHeight = header.offsetHeight;
    const footerHeight = footer.offsetHeight;
    // offsetHeight - height of element incl. paddings, borders

    const minHeight = viewportHeight - headerHeight - footerHeight;
    content.style.minHeight = `${minHeight}px`;
    // accesses inline style of hero, sets its min-height properly
    // `${minHeight}px` - template literal
  }

  adjustContentHeight();
  // runs function on page load
  // only run here because definition is needed first, as usual

  window.addEventListener("resize", adjustContentHeight);
  // listens for the resize event and recalculates the layout
});

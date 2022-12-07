/*
 * Function that help positionning the the popper element in tooltip component
 */

export default function position(trigger, popper, options = {}) {
  console.log(trigger.value.getBoundingClientRect());
  console.log(popper.value.getClientRects());
  console.log(hasPlace('right', trigger, popper));
}

function hasPlace(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      return (
        trigger.value.getBoundingClientRect().top >
        popper.value.getBoundingClientRect().height + 50
      );
      break;
    case 'bottom':
      return (
        window.innerHeight - trigger.value.getBoundingClientRect().bottom >
        popper.value.getBoundingClientRect().height + 50
      );
    case 'left':
      return (
        trigger.value.getBoundingClientRect().left >
        popper.value.getBoundingClientRect().width + 50
      );
    case 'right':
      return (
        446 - trigger.value.getBoundingClientRect().right >
        popper.value.getBoundingClientRect().width + 50
      );
  }
}

function getPageWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

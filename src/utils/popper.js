/*
 * Function that help positionning the the popper element in tooltip component
 */

export default function position(
  trigger,
  popper,
  options = { placement: 'top' }
) {
  console.log(hasPlace(options.placement, trigger, popper));
  if (
    options.placement != 'auto' &&
    hasPlace(options.placement, trigger, popper)
  ) {
    placement(options.placement, trigger, popper);
  }
}

function hasPlace(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      return (
        trigger.value.getBoundingClientRect().top >
        popper.value.getBoundingClientRect().height + 50
      );
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
        window.innerWidth - trigger.value.getBoundingClientRect().right >
        popper.value.getBoundingClientRect().width + 50
      );
  }
}

function placement(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      placementTop(trigger, popper);
      break;
    case 'bottom':
      placementBottom(trigger, popper);
      break;
    case 'left':
      placementLeft(trigger, popper);
      break;
  }
}

function placementTop(trigger, popper) {
  if (
    trigger.value.getBoundingClientRect().width >
    popper.value.getBoundingClientRect().width
  ) {
    popper.value.style.left =
      (trigger.value.getBoundingClientRect().width -
        popper.value.getBoundingClientRect().width) /
        2 +
      'px';
  } else {
    popper.value.style.left =
      '-' +
      (popper.value.getBoundingClientRect().width -
        trigger.value.getBoundingClientRect().width) /
        2 +
      'px';
  }
  popper.value.style.top =
    '-' + (trigger.value.getBoundingClientRect().height + 15) + 'px';
}

function placementBottom(trigger, popper) {
  popper.value.style.top =
    trigger.value.getBoundingClientRect().height + 10 + 'px';
  popper.value.style.left =
    '-' + trigger.value.getBoundingClientRect().width / 2 + 'px';
}

function placementLeft(trigger, popper) {
  popper.value.style.top =
    trigger.value.getBoundingClientRect().height + 10 + 'px';
  popper.value.style.left =
    '-' + trigger.value.getBoundingClientRect().width / 2 + 'px';
}

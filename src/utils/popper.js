/*
 * Function that help positionning the the popper element in tooltip component
 */

export default function position(
  trigger,
  popper,
  options = { placement: 'auto' }
) {
  console.log(window.getComputedStyle(popper.value));
  if (options.placement == 'auto') {
    hasPlace('top', trigger, popper)
      ? placementTop(trigger, popper)
      : hasPlace('bottom', trigger, popper)
      ? placementBottom(trigger, popper)
      : hasPlace('right', trigger, popper)
      ? placementRight(trigger, popper)
      : hasPlace('left', trigger, popper)
      ? placementLeft(trigger, popper)
      : (placementTop(trigger, popper),
        console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        ));
  } else {
    placement(options.placement, trigger, popper);
    hasPlace(options.placement, trigger, popper)
      ? null
      : console.warn(
          'Be carreful, there is no place for the tooltip to show !'
        );
  }
}

function hasPlace(direction, trigger, popper) {
  switch (direction) {
    case 'top':
      return (
        trigger.value.getBoundingClientRect().top >
        popper.value.getBoundingClientRect().height + 20
      );
    case 'bottom':
      return (
        window.innerHeight - trigger.value.getBoundingClientRect().bottom >
        popper.value.getBoundingClientRect().height + 20
      );
    case 'left':
      return (
        trigger.value.getBoundingClientRect().left >
        popper.value.getBoundingClientRect().width + 20
      );
    case 'right':
      return (
        window.innerWidth - trigger.value.getBoundingClientRect().right >
        popper.value.getBoundingClientRect().width + 20
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
    case 'right':
      placementRight(trigger, popper);
      break;
  }
}

function placementTop(trigger, popper) {
  popper.value.style.left =
    (trigger.value.getBoundingClientRect().width -
      popper.value.getBoundingClientRect().width) /
      2 +
    'px';
  popper.value.style.top =
    '-' + (trigger.value.getBoundingClientRect().height + 15) + 'px';
}

function placementBottom(trigger, popper) {
  popper.value.style.left =
    (trigger.value.getBoundingClientRect().width -
      popper.value.getBoundingClientRect().width) /
      2 +
    'px';
  popper.value.style.top =
    trigger.value.getBoundingClientRect().height + 15 + 'px';
}

function placementLeft(trigger, popper) {
  popper.value.style.top =
    (trigger.value.getBoundingClientRect().height -
      popper.value.getBoundingClientRect().height) /
      2 +
    'px';
  popper.value.style.left =
    '-' + (popper.value.getBoundingClientRect().width + 15) + 'px';
}

function placementRight(trigger, popper) {
  popper.value.style.top =
    (trigger.value.getBoundingClientRect().height -
      popper.value.getBoundingClientRect().height) /
      2 +
    'px';
  popper.value.style.left =
    trigger.value.getBoundingClientRect().width + 15 + 'px';
}

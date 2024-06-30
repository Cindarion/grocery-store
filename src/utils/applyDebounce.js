export function debounce(fn, time) {
  let timeoutId;

  return function wrapper(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  };
};
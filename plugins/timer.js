export default function Timer(duration, callback) {
  let intervalId = null;
  let remainingTime = duration;

  function start() {
    intervalId = setInterval(() => {
      if (remainingTime <= 0) {
        stop();
        if (typeof callback === 'function') {
          callback();
        }
      } else {
        remainingTime--;
      }
    }, 1000);
  }

  function stop() {
    clearInterval(intervalId);
  }

  function reset(newDuration) {
    stop();
    remainingTime = newDuration;
  }

  return {
    start,
    stop,
    reset,
    get duration() {
      return remainingTime;
    }
  };
}

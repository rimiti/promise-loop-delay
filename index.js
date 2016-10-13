function DelayPromise(delay) {
  return function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(data);
      }, delay);
    });
  }
}

for (let i=0; i<10; i++) {
  Promise.resolve().then(DelayPromise(1000*i)).then(function(data) {
    console.log(data)
    // Call your function here
  });
}

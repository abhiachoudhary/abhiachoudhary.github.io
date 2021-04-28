function delay(callback, ms) {
  var timer = 0;
  return function() {
    var context = this, args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      callback.apply(context, args);
    }, ms || 0);
  };
}


// Example usage:

$('#input').keyup(delay(function (e) {
  console.log('Time elapsed!', this.value);
}, 500));
var App, something;

App = Ember.Application.create();

something = function(x) {
  if (x < 10) {
    return console.log("Less");
  } else if (x === 10) {
    return console.log("Equal");
  } else {
    return console.log("Greater");
  }
};

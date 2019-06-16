// async code, event loops


console.log('I\'ll be back.');

//setTimeout(() => console.log('i am back'), 5000);

setTimeout(function cb() { 
  console.log('and I\'m back!');
}, 5000);

console.log('wait...');

/*
I'll be back.
wait...
and I'm back!
*/
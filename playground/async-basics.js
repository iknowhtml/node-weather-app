console.log('Start app');

setTimeout(() => console.log('Inside of callback'), 2000);

setTimeout(() => console.log('Second setTimout'), 0);

console.log('Finishing up');

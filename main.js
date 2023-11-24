let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
// 1000 milisegundos es 1 segundo
  .pauseFor(1000)
  .typeString('Emiliano Lopez')
  .pauseFor(300)
  .deleteChars(10)
  .start();
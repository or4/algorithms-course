const c = document.getElementById('c');
let currentAnimationTime = 0;
const center = 175;
const effort = 100;
const growth = 2 * Math.PI / 60;
// let prevTime = new Date().valueOf();

animate();

function animate() {
  // prevTime = new Date().valueOf();
  if (!c) { return }

  c.setAttribute('cy', String(center + effort * (Math.sin(currentAnimationTime))));
  c.setAttribute('cx', String(center + effort * (Math.cos(currentAnimationTime))));

  currentAnimationTime += growth;



  requestAnimationFrame(animate);
}

export const result = 'runned';

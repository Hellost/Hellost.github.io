'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const results = ['大吉', '吉', '凶', '中吉', '末吉', '小吉'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = '大吉';  // 5%
    } else if (n < 0.2) {
      btn.textContent = '中吉';  // 15%
    } else {
      btn.textContent = '凶'; // 80%
    }
  });
}














// btn.addEventListener('click', () => {
//   const results = ['大吉', '吉', '凶', '中吉', '末吉', '小吉'];

  // const n = Math.floor(Math.random() * results.length);
  // btn.textContent = results[n];

  // btn.textContent = results[Math.floor(Math.random() * results.length)];

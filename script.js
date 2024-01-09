document.getElementById('yesBtn').addEventListener('click', function() {
    alert('I am blushing');
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    const noButton = document.getElementById('noBtn');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
  
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
  });
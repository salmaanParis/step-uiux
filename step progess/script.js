document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.step');
  
    steps.forEach(step => {
      step.addEventListener('mouseover', function() {
        const message = this.getAttribute('data-message');
        document.getElementById('progress-message').innerText = message;
        document.getElementById('progress-popup').style.display = 'block';
      });
  
      step.addEventListener('mouseleave', function() {
        document.getElementById('progress-popup').style.display = 'none';
      });
    });
  
    function closePopup() {
      document.getElementById('progress-popup').style.display = 'none';
    }
  });
  
  
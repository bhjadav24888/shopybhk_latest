  document.addEventListener('DOMContentLoaded', function() {
    // Get the popup elements
    var popupBox = document.getElementById('popup-box');
    var closePopup = document.getElementById('close-popup');

    // Show the popup after a delay (e.g., 2 seconds)
    setTimeout(function() {
      popupBox.style.display = 'flex';
    }, 2000);

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', function() {
      popupBox.style.display = 'none';
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
      if (event.target == popupBox) {
        popupBox.style.display = 'none';
      }
    });

  var form = document.getElementById('newsletter-form');
  var emailInput = document.getElementById('email');
  var message = document.getElementById('newsletter-message');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var email = emailInput.value;
    
    if (validateEmail(email)) {
      submitForm(email);
    } else {
      message.textContent = 'Please enter a valid email address.';
      message.style.display = 'block';
      message.style.color = 'red';
    }
  });

  function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function submitForm(email) {
     fetch('http://localhost:3000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        message.textContent = 'Thank you for subscribing!';
        message.style.display = 'block';
        message.style.color = 'green';
        emailInput.value = '';
      } else {
        message.textContent = 'There was an error. Please try again.';
        message.style.display = 'block';
        message.style.color = 'red';
      }
    })
    .catch((error) => {
      message.textContent = 'There was an error. Please try again.';
      message.style.display = 'block';
      message.style.color = 'red';
    });
  }
});

const form = document.getElementById('loginForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: "application/json"
      }
    }).then(response => {
      if (response.ok) {
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('language').style.display = 'none';
        document.getElementById('footer').style.display = 'none';
        document.getElementById('confirmBox').style.display = 'block';
      } else {
        alert("Failed to submit. Please try again.");
        location.reload();
      }
    }).catch(error => {
      alert("Error submitting the form.");
      location.reload();
    });
  });

  function showSuccess() {
    document.getElementById('confirmBox').style.display = 'none';
    document.getElementById('successBox').style.display = 'block';
  }
  // function facebookLogin() {
  //   alert("Facebook login clicked");
  // }

  // function changeLanguage(select) {
  //   alert("Language changed to: " + select.value);
  // }
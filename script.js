document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorElement = document.getElementById('error');

  // Simple validation
  if (username === '' || password === '') {
    errorElement.textContent = 'Both fields are required.';
    return;
  }

  // Dummy authentication
  if (username === 'admin' && password === '1234') {
    alert('Login successful!');
    errorElement.textContent = '';
    // You can redirect or show restricted content here
  } else {
    errorElement.textContent = 'Incorrect username or password.';
  }
});

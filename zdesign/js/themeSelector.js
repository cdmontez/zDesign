const currentTheme = document.querySelector('#theme');
function changeTheme() {
  if (currentTheme.getAttribute('href') == '/zdesign/css/lightTheme.css') {
    currentTheme.href = '/zdesign/css/darkTheme.css';
  } else {
    currentTheme.href = '/zdesign/css/lightTheme.css';
  }
}
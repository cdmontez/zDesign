const currentTheme = document.querySelector('#theme');
function changeTheme() {
  if (currentTheme.getAttribute('href') == '/zstyle/lightTheme.css') {
    currentTheme.href = '/zstyle/darkTheme.css';
  } else {
    currentTheme.href = '/zstyle/lightTheme.css';
  }
}
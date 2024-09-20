document.addEventListener('copy', (event) => {
  event.stopPropagation();
  event.preventDefault();
  const selection = window.getSelection().toString();
  event.clipboardData.setData('text/plain', selection);
});

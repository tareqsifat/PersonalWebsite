document.getElementById('download-cv').addEventListener('click', function (e) {
  e.preventDefault();
  const url = './cv.pdf';
  const filename = 'Tareq_Aziz_Sifate_CV.pdf';

  // 1) trigger download via programmatic anchor click
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();

  // 2) open in a new tab to view simultaneously
  // bound to the click event because some browsers block window.open()
  // popups unless triggered directly by a user click
  window.open(url, '_blank', 'noopener');
});

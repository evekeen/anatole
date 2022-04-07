document.addEventListener('DOMContentLoaded', () => {
  const links = Array.prototype.slice.call(document.querySelectorAll('.post__content a'), 0);
  if (links.length < 1) return;
  links.forEach((link) => {
    link.target = '_blank';
  });
});

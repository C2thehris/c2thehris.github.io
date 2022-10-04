const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.25) {
      entry.target.classList.remove('fadeOut');
      entry.target.classList.add('fadeIn');
    } else {
      entry.target.classList.remove('fadeIn');
      entry.target.classList.add('fadeOut');
    }
  });
},
{
  root: null,
  threshold: [0.2, 0.3]
});

export default fadeObserver;

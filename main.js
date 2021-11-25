const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i++) {
  const li = document.querySelector('li')
  li.textContent = `list-${i + 1}`
  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', () => {
      console.log
    });
  }
}
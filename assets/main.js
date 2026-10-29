const menu = document.querySelector('.menu-button');
const nav = document.querySelector('#navigation');
function closeMenu() {
  menu?.setAttribute('aria-expanded', 'false');
  nav?.classList.remove('is-open');
}
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menu.focus();
  }
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
matchMedia('(min-width: 1001px)').addEventListener('change', closeMenu);
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0;
    document.querySelectorAll('[data-topic]').forEach(card => {
      card.hidden = button.dataset.filter !== 'all' && card.dataset.topic !== button.dataset.filter;
      if (!card.hidden) count++;
    });
    document.querySelector('#filter-status').textContent = count === 1 ? '1 teema näkyvissä' : `${count} teemaa näkyvissä`;
  });
});
document.querySelector('#people-search')?.addEventListener('input', event => {
  const query = event.target.value.trim().toLocaleLowerCase('fi');
  let count = 0;
  document.querySelectorAll('[data-person]').forEach(card => {
    card.hidden = !card.dataset.person.toLocaleLowerCase('fi').includes(query);
    if (!card.hidden) count++;
  });
  document.querySelector('#people-status').textContent = count === 1 ? '1 henkilö' : `${count} henkilöä`;
  document.querySelector('.empty-message').hidden = count !== 0;
});

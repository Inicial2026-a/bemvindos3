
(function () {
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('acceptCookies');
  const reject = document.getElementById('rejectCookies');
  const settings = document.getElementById('cookieSettings');
  const key = 'melissa_cookie_choice';

  function showBanner() {
    if (banner && !localStorage.getItem(key)) banner.classList.add('show');
  }
  function saveChoice(value) {
    localStorage.setItem(key, value);
    if (banner) banner.classList.remove('show');
  }
  if (accept) accept.addEventListener('click', () => saveChoice('accepted'));
  if (reject) reject.addEventListener('click', () => saveChoice('necessary_only'));
  if (settings) {
    settings.addEventListener('click', () => {
      const current = localStorage.getItem(key) || 'not_set';
      alert('Preferência atual: ' + current + '. Neste site, são utilizados apenas recursos necessários e a memória local da sua escolha de cookies. Se forem adicionadas ferramentas de análise ou publicidade, esta área deverá ser atualizada.');
    });
  }
  showBanner();
})();

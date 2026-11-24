// s13it8 site behaviour: hero chips, portfolio filter, contact form.
(function () {
  var ON = 'background: #4C9BFF; color: #06101F; border: 1px solid #4C9BFF';
  var OFF_DARK = 'background: #0D1424; color: #EEF3FF; border: 1px solid #24314F';
  var OFF_FORM = 'background: #070B14; color: #EEF3FF; border: 1px solid #24314F';

  function paint(btn, on, off) {
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    var base = btn.getAttribute('data-base') || btn.getAttribute('style');
    btn.setAttribute('data-base', base);
    btn.setAttribute('style', base + '; ' + (on ? ON : off));
  }

  // Home: chips fill the question box; Ask carries it to the contact page.
  var ask = document.getElementById('ask');
  if (ask) {
    document.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () { ask.value = chip.getAttribute('data-q'); ask.focus(); });
    });
    var go = document.getElementById('ask-go');
    function send(e) {
      e.preventDefault();
      var q = ask.value.trim();
      location.href = 'contact.html' + (q ? '?q=' + encodeURIComponent(q) : '');
    }
    go.addEventListener('click', send);
    ask.form.addEventListener('submit', send);
  }

  // Portfolio: filter cards by tag.
  var filters = document.querySelectorAll('.filter');
  if (filters.length) {
    function pick(tag) {
      filters.forEach(function (b) { paint(b, b.getAttribute('data-filter') === tag, OFF_DARK); });
      document.querySelectorAll('.project').forEach(function (card) {
        var tags = card.getAttribute('data-tags').split(' ');
        card.hidden = !(tag === 'All' || tags.indexOf(tag) > -1);
      });
    }
    filters.forEach(function (b) { b.addEventListener('click', function () { pick(b.getAttribute('data-filter')); }); });
    pick('All');
  }

  // Contact: service toggles, prefill from the home question, mail draft on send.
  var form = document.getElementById('contact-form');
  if (form) {
    var svcs = document.querySelectorAll('.svc');
    svcs.forEach(function (b) {
      paint(b, false, OFF_FORM);
      b.addEventListener('click', function () { paint(b, b.getAttribute('aria-pressed') !== 'true', OFF_FORM); });
    });
    var msg = document.getElementById('c-msg');
    var q = new URLSearchParams(location.search).get('q');
    if (q && msg) msg.value = q;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var picked = [];
      svcs.forEach(function (b) { if (b.getAttribute('aria-pressed') === 'true') picked.push(b.textContent); });
      var name = form.elements.name.value.trim();
      var lines = [
        'Name: ' + name,
        'Email: ' + form.elements.email.value.trim(),
        'Business: ' + form.elements.business.value.trim(),
        'Needs: ' + (picked.join(', ') || 'Not sure yet'),
        '',
        form.elements.message.value.trim()
      ];
      location.href = 'mailto:s13it8@gmail.com?subject=' + encodeURIComponent('New project inquiry from ' + (name || 'the website')) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      document.getElementById('sent-name').textContent = name ? ', ' + name : '';
      form.hidden = true;
      document.getElementById('sent').hidden = false;
    });

    document.getElementById('reset').addEventListener('click', function () {
      form.reset();
      svcs.forEach(function (b) { paint(b, false, OFF_FORM); });
      document.getElementById('sent').hidden = true;
      form.hidden = false;
    });
  }
})();

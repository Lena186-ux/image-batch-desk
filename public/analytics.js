(() => {
  'use strict';
  const key = 'ibd-analytics-consent-v1';
  const gaId = 'G-BD0RQLNW2F';
  const clarityId = 'ywm56t8cjz';
  let started = false;
  let banner;
  function preference() { try { return localStorage.getItem(key); } catch { return null; } }
  function load(src) { const script = document.createElement('script'); script.src = src; script.async = true; document.head.append(script); }
  function start() {
    if (started || !['imagebatchdesk.com', 'www.imagebatchdesk.com'].includes(location.hostname)) return;
    started = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    window.gtag('js', new Date());
    window.gtag('config', gaId, {allow_google_signals: false, allow_ad_personalization_signals: false, page_location: location.origin + location.pathname, page_referrer: document.referrer.split('?')[0].split('#')[0]});
    load('https://www.googletagmanager.com/gtag/js?id=' + gaId);
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    window.clarity('consentv2', {analytics_Storage: 'granted', ad_Storage: 'denied'});
    load('https://www.clarity.ms/tag/' + clarityId);
  }
  function clearCookies() {
    for (const item of document.cookie.split(';')) {
      const name = item.split('=')[0].trim();
      if (!/^(_ga($|_)|_gid$|_gat|_clck$|_clsk$)/.test(name)) continue;
      for (const domain of ['', location.hostname, 'imagebatchdesk.com', '.imagebatchdesk.com']) {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + (domain ? '; domain=' + domain : '');
      }
    }
  }
  function choose(value) {
    try { localStorage.setItem(key, value); } catch {}
    banner.hidden = true;
    if (value === 'granted') start();
    else {
      if (started) {
        window.gtag('consent', 'update', {analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
        window.clarity('consentv2', {analytics_Storage: 'denied', ad_Storage: 'denied'});
      }
      clearCookies();
      if (started) location.reload();
    }
  }
  banner = document.createElement('section');
  banner.className = 'analytics-consent';
  banner.setAttribute('aria-label', 'Analytics preferences');
  banner.innerHTML = '<p>Help improve this tool with optional Google Analytics and Microsoft Clarity (masked session replay). Your images stay on your device. <a href="/privacy/">Privacy details</a></p><div><button type="button" data-choice="granted">Allow analytics</button><button type="button" class="secondary" data-choice="denied">Reject analytics</button></div>';
  banner.addEventListener('click', event => { const button = event.target.closest('[data-choice]'); if (button) choose(button.dataset.choice); });
  document.body.append(banner);
  document.getElementById('analytics-settings')?.addEventListener('click', () => { banner.hidden = false; banner.querySelector('button').focus(); });
  const saved = preference();
  banner.hidden = saved === 'granted' || saved === 'denied';
  if (saved === 'granted') start();
})();

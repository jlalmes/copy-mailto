import copy from 'copy-to-clipboard';
import type { PlasmoCSConfig } from 'plasmo';
import { createRoot } from 'react-dom/client';

import { Notifier, notify } from './components/Notifier';

export const config: PlasmoCSConfig = {
  matches: ['<all_urls>'],
  run_at: 'document_end',
};

document.addEventListener('click', (e) => {
  if (e.target instanceof HTMLAnchorElement) {
    const href = e.target.href;
    if (href.startsWith('mailto:')) {
      const email = e.target.href.replace('mailto:', '');
      const success = copy(email);
      if (success) {
        e.preventDefault();
        notify.email();
      }
    } else if (href.startsWith('tel:')) {
      const phone = e.target.href.replace('tel:', '');
      const success = copy(phone);
      if (success) {
        e.preventDefault();
        notify.phone();
      }
    }
  }
});

const container = document.createElement('div');
document.body.appendChild(container);
const root = createRoot(container);
root.render(Notifier);

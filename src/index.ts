import { registerPlugin } from '@capacitor/core';

import type { CookiesFlushPlugin } from './definitions';

const CookiesFlush = registerPlugin<CookiesFlushPlugin>('CookiesFlush', {
  web: () => import('./web').then(m => new m.CookiesFlushWeb()),
});

export * from './definitions';
export { CookiesFlush };

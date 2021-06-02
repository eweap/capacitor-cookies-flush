import { WebPlugin } from '@capacitor/core';

import type { CookiesFlushPlugin } from './definitions';

export class CookiesFlushWeb extends WebPlugin implements CookiesFlushPlugin {
  async flush(): Promise<void> {
    return Promise.resolve();
  }
}

import { WebPlugin } from '@capacitor/core';
import { CookiesFlushPlugin } from './definitions';

export class CookiesFlushWeb extends WebPlugin implements CookiesFlushPlugin {
  constructor() {
    super({
      name: 'CookiesFlush',
      platforms: ['web'],
    });
  }

  flush(): Promise<void> {
    return Promise.resolve();
  }
}

const CookiesFlush = new CookiesFlushWeb();

export { CookiesFlush };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CookiesFlush);

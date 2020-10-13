import { WebPlugin } from '@capacitor/core';
import { CookiesFlushPlugin } from './definitions';

export class CookiesFlushWeb extends WebPlugin implements CookiesFlushPlugin {
  constructor() {
    super({
      name: 'CookiesFlush',
      platforms: ['web'],
    });
  }

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

const CookiesFlush = new CookiesFlushWeb();

export { CookiesFlush };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(CookiesFlush);

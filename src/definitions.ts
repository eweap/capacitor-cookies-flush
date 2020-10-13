declare module '@capacitor/core' {
  interface PluginRegistry {
    CookiesFlush: CookiesFlushPlugin;
  }
}

export interface CookiesFlushPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'id.my.arras.kilzz.tempmail',
  appName: 'KilzzTemp',
  webDir: 'www',
  bundledWebRuntime: false,
  android: {
    allowMixedContent: false
  }
};

export default config;

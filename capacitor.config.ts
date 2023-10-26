import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'T6',
  webDir: 'www',
 

  server: {
    androidScheme: 'http',    
    
    allowNavigation: ['http://universities.hipolabs.com/search?country='] 
  }
  
};

export default config;
export interface Environment {
  production: boolean;
  type: 'prod' | 'dev' | 'test';
  firebase: {
    apiKey: string,
    authDomain: string,
    databaseURL: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string
  };
}

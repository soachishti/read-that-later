// The file contents for the current environment will overwrite these during
// build. The build system defaults to the dev environment which uses
// `environment.ts`, but if you do `ng build --env=prod` then
// `environment.prod.ts` will be used instead. The list of which env maps to
// which file can be found in `.angular-cli.json`.

import { Environment } from './environment.interface';
export const environment: Environment = {
  production: false,
  type: 'dev',
  firebase: {
    apiKey: 'AIzaSyBjn0LUj3uFbp-dNK4Z-UmqP8kZXWAWhzE',
    authDomain: 'read-that-later.firebaseapp.com',
    databaseURL: 'https://read-that-later.firebaseio.com',
    projectId: 'read-that-later',
    storageBucket: 'read-that-later.appspot.com',
    messagingSenderId: '146774588372'
  }
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDsN7RxQU7Vh6fd3ImNuhvxhrhDq5-HwoU',
    authDomain: 'buildcode-crm.firebaseapp.com',
    databaseURL: 'https://buildcode-crm.firebaseio.com',
    projectId: 'buildcode-crm',
    storageBucket: 'buildcode-crm.appspot.com',
    messagingSenderId: '557748943604'
  }
};

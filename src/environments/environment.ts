// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCr93b0cRCdFIqxKWe6IxNcbkZLl2Xom3E",
    authDomain: "functions-example-5a84c.firebaseapp.com",
    databaseURL: "https://functions-example-5a84c.firebaseio.com",
    projectId: "functions-example-5a84c",
    storageBucket: "functions-example-5a84c.appspot.com",
    messagingSenderId: "428402660430"
  }
};
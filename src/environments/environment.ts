// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://newsapi.org/v2',
  apiKey: '5cb7e22ee0ee4592b51d1934393cd367',
  weatherurl:'https://api.openweathermap.org/data/2.5/weather?q',
  weathertoken:'2af93a8f044669cc41c8e70bc56826f8',
  firebase: {
    apiKey: "AIzaSyCxxZ0f-dGmFu7ioxPp-7P6QtTJcbV0L6M",
    authDomain: "newproject-77c43.firebaseapp.com",
    databaseURL: "https://newproject-77c43.firebaseio.com",
    projectId: "newproject-77c43",
    storageBucket: "newproject-77c43.appspot.com",
    messagingSenderId: "969404967512",
    appId: "1:969404967512:web:3b87bb0b5efb33a62e782d",
    measurementId: "G-RZMXFJSFZ7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

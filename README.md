# sofe-alimas-app

Cornavirus tracker app. Made possible by amcharts, corona.live and ember.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd sofe-alimas-app`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Further deployment of the app is still TBD

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* https://coronastatistics.live/
* https://www.amcharts.com/

## API Endpoints

* http://api.coronastatistics.live/all
* http://api.coronastatistics.live/countries
* http://api.coronastatistics.live/countries?sort={parameter}
* http://api.coronastatistics.live/countries/{country_name}
* http://api.coronastatistics.live/timeline
* http://api.coronastatistics.live/timeline/global
* http://api.coronastatistics.live/timeline/{country_name}


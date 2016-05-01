# Trello metrics simple started
Trello metrics allows developers view their team's statistics like the Cycle Time, Lead Time, Reaction Time and Cumulative Flow.


## New in this version v0.5.0

 - Cycletime metric
 - Historical cycletime
 - Lead time metric
 - Reaction time
 - Cumulative flow


## To get trello metrics follow next steps

Clone the repo and install dependencies:

    $ git clone https://github.com/safv12/nodejs-api.git
    $ cd trello_metrics
    $ npm install

Edit /server/config/index.js with your trello token

 - To get your TRELLO_KEY visit: https://trello.com/app-key
 - To read a user’s private information, get a token by directing them to https://trello.com/1/connect?key=[PUBLIC_KEY]&name=MyApp&response_type=token replacing, of course, <PUBLIC_KEY> with the public key obtained in the first step.

    trello: {
      key: '[TRELLO_KEY]',
      token: '[TRELLO_TOKEN]'
    }

And finally start the app:

    $ npm start ### start the app

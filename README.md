##Real Time Bit Coin Price App

A simple app to use the socket.io library and the MtGox socket.io to
display real time bitcoin prices. Maybe will add some additional
features to damp down noise and/or look at various exchanges.

How I set it up:

1. Set up API at `http://developer.worldweatheronline.com/`.
  ```bash
   echo "export WWO_API_KEY=whatever" > .env
   ```

2. Install nodemon and the app dependencies, then start the server:

  ```bash
  $ npm install -g nodemon
  $ npm install
  $ nodemon server.js
  ```

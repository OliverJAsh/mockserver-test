```sh
yarn
node main.js

http-server -c-1
open localhost:8080
```

… then open the console and you will see this error:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'startsWith')
    at makeRequest (mockServerClient.js:33:91)
    at Object.mockAnyResponse (mockServerClient.js:366:20)
    at client.js:2:6
```

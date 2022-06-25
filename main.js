const ms = require("mockserver-node");
ms.start_mockserver({
    serverPort: 3030,
    jvmOptions: [
        "-Dmockserver.enableCORSForAPI=true",
        // Error: Could not find or load main class DELETE,
        // Caused by: java.lang.ClassNotFoundException: DELETE,
        '-Dmockserver.corsAllowMethods="CONNECT, DELETE, GET, HEAD, OPTIONS, POST, PUT, PATCH, TRACE"',
    ].join(" "),
});

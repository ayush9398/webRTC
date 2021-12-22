# WebRTC with Node

This is a video calling implementation over browser using webrtc and with the help of PeerJS. The server is built on Node.

## How to get started

### Localhost

If you want to try this in a local network, then you just require to host the server on any one device on the network. Do so using:
```
node server.js
```

The server will start on port `3000` by default.

Remember to share the whole url with the other participants for them to join same room!

### On a server

- Inorder to use it over web you need your server to have ssl certificate. Without the certificate the browsers will not support webrtc. 

- If you want to use it without ssl on chrome, every participant must enable `Insecure origins treated as secure` with the server IP along with port in textarea.

If you like it, then star it! 

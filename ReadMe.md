# Simple ReactJS + Flask App using WebSockets (socket.io)

This simple App connects a Flask server to a React client
and opens a two way interactive communication using WebSocket technology with the socket.io library.
With WebSockets you can send messages to a server and receive event driven responses without having
to poll a server.

This repo was created to help users create WebSocket communication protocols along with regular HTTP communication using a Python Flask server and a Javascript React client.

## Tech Stack

**Client:** ReactJS,socket.io,socket.io-client

**Server:** Python3,eventlet,Flask-Cors,Flask-SocketIO

## Installation

Make sure you have installed Node.js, npm, Python3, and pip.
After installation please follow the instructions below to download the repo.

```bash
  python3 -m venv env
  source env/bin/activate
  pip install -r requirements.txt
```

- Navigate into the /**front-end** folder and run the following command:

```bash
  npm i react-scripts
```

## Run Locally

```bash
  cd webSocket-App
  source env/bin/activate
  python3 server.py
```

Terminal **window 2** - start the client:

```bash
  cd webSocket-App/front-end
  npm start
```

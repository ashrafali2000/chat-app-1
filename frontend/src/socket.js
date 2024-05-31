import io from "socket.io-client";

// Replace with your backend URL
const ENDPOINT = "https://chat-app-1-woad.vercel.app";

const socket = io(ENDPOINT, {
  transports: ["websocket"],
});

export default socket;

onmessage = e => {
  const message = e.data;
  console.log(`[From Main]: ${message}`);

  const reply = setTimeout(() => postMessage("Pong!"));
};
const worker = new Worker("../src/worker.js", { type: "module" });

const workerOnMessage = worker.onmessage = e => {
  const message = e.data;
  console.log(`[From Worker]: ${message}`);

  return setTimeout(() => worker.postMessage("Ping"), 3000);
};

const workerPostMessage = worker.postMessage("Ping!");

export default { workerOnMessage, workerPostMessage };

const myworker = new Worker("worker.js");

// メインスレッドからデータを送信する
const sendBtn = document.getElementById("send");
sendBtn.addEventListener("click", () => {
    const message = document.getElementById("message").value;

    myworker.postMessage(message);
})


// workerから送信されたメッセージを受け取る
myworker.addEventListener("message", (e) => {
    console.log(`main thread:`);
    console.log(`received data: ${e.data}`);
    console.log(`received data type: ${typeof e.data}`);

    const receivedData = `received data: ${e.data}\nat ${new Date()}`;

    const newP = document.createElement("p");
    newP.textContent = receivedData;
    document.body.appendChild(newP);
});
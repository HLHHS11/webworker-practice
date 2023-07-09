// メインスレッドから送られてきたデータを受け取る
self.onmessage = (e) => {
    console.log(`worker thread:`);
    console.log(`received data: ${e.data}`);
    console.log(`received data type: ${typeof e.data}`);

    // メインスレッドにデータを送信する
    postMessage(`worker thread: successfully received data; ${e.data}`);
}
var express = require("express");
//express를 middleware.js로 불러왔다.

var app = express();
// app변수에 express()를 담았다.

var PORT = 4000;
// 4000포트라는 변수에 담았다.

function handleListening() {
  console.log(`✅ Listening on: http://localhost:${PORT}`);
}
/*
서버를 실행하게 되면 app이 실행되고 handleListening함수가 실행되어 console.log에
성공적으로 실행되었다는 문구를 알려준다.
*/

function handleHome(req, res) {
  res.send("This is home");
}
// handleHome이 실행하게 되면 사용자에게 This is home이란 글을 브라우저를 통해 보여준다.

function betweenHome(req, res, next) {
  console.log(`I'm between`);
  next();
}

app.get("/", betweenHome, handleHome);
//사용자가 http://localhost:4000으로 접속을 시도하면 handleHome함수를 실행한다.

app.listen(PORT, handleListening);
//4000번 포트로 들어오는것을 계속 모니터링하고 handleLIstening이란 함수를 실행한다.

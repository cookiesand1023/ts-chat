import express, {Application} from "express";
import {Server} from "socket.io";
import * as http from "http";


const app: Application = express();
const port = 3400;
const server = http.createServer(app);
const io = new Server(server)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", async (req, res) => {
  return res.status(200).send({message: "Hello World!"});
});


io.on("connection", (socket: any) => {
  console.log("a user connected")
});
  // socket.on("chat message", (msg: any) => {
  //   console.log("message: " + msg);
  // });


try {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
} catch (error) {
  if (error instanceof Error) {
    console.log(error);
  }
}
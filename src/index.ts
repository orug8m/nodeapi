import express from "express";
import * as admin from "firebase-admin";
import serviceAccount from "../serviceAccountKey.json";
export type ServiceAccount = typeof serviceAccount;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app: express.Express = express();

// CORSの許可
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// body-parserに基づいた着信リクエストの解析
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Firebase adminでusers一覧を表示
app.get("/secret/userinfo", async () => {
  admin
    .auth()
    .listUsers(1000)
    .then((listUsersResult) => {
      console.log(listUsersResult);
    })
    .catch(function (error) {
      console.log("Error listing users:", error);
    });
});

const router: express.Router = express.Router();

// sample: Get
router.get("/api/get", (req: express.Request, res: express.Response) => {
  res.send(req.query);
});

// sample: Post
router.post("/api/post", (req: express.Request, res: express.Response) => {
  res.send(req.body);
});

app.use(router);

// 3456番ポートでAPIサーバ起動
app.listen(3456, () => {
  console.log("Example app listening on port 3456!");
});

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser");
const dirPath = path.resolve(__dirname, "root");
const app = express();
const httpServer = require("http").createServer(app);
const options = {};
const io = require("socket.io")(httpServer, options);
const requestIp = require("request-ip");
const cookieParser = require("cookie-parser");
const Event = require("events");
const Emitter = new Event();

const cookieOptions = {
  maxAge: 3600 * 24,
  secure: true,
  httpOnly: true,
};

// let translations = new Map();
const translations = {};

// console.log(generateRandomKey());

// const url = generateRandomKey();
const url = "86dd7a27421";
const files = readDir(dirPath + "/" + url);

files.then((data) => (translations[url].files = data));

translations[url] = {
  name: "Project",
  url,
  type: "WEB",
  host: "631g6j0f54273",
  viewers: [],
  files: null,
  messages: [
    {
      content: "Hello",
      title: "Voloday",
      date: new Date().toLocaleString(),
    },
    {
      content: "Hello boy!",
      title: "Danya",
      date: new Date().toLocaleString(),
    },
    {
      content: "What`s up?",
      title: "Voloday",
      date: new Date().toLocaleString(),
    },
    {
      content: "Nice!",
      title: "Danya",
      date: new Date().toLocaleString(),
    },
  ],
  closedNotices: [
    {
      id: 6,
      title: "Очень непонятно!",
      desc: "Можешь ещё раз объяснить что тут. Я всё пропустил.",
      author: "Kolya",
      position: {
        startLineNumber: 4,
        endLineNumber: 5,
        startColumn: 4,
        endColumn: 6,
      },
      currentFile:
        "C:\\Users\\ermuh\\Documents\\js_projects\\live_coding_server\\root\\scripts\\index.js",
    },
    {
      id: 7,
      title: "А что делает этот участок кода?",
      desc: "Я понял, что возвращаемое значение не определено, но как не падает ошибка?\nЭто здесь реализованно или как?",
      author: "Olga",
      position: {
        startLineNumber: 40,
        endLineNumber: 40,
        startColumn: 60,
        endColumn: 60,
      },
      currentFile: "/script/index.js",
    },
    {
      id: 8,
      title: "Аааа! Как это работает?",
      desc: "Голова кипит! Пж, расскажи как это получется.\nНичего не понимаю, помоги!",
      author: "Dasha",
      position: {
        startLineNumber: 55,
        endLineNumber: 55,
        startColumn: 12,
        endColumn: 34,
      },
      currentFile: "/script/index.js",
    },
  ],
  notices: [
    {
      id: 1,
      title: "Что в этой строчке кода?",
      desc: "Никак немогу разобраться. Объясни плиз!",
      author: "Dima",
      position: {
        startLineNumber: 7,
        endLineNumber: 12,
        startColumn: 10,
        endColumn: 10,
      },
      currentFile: "/script/index.js",
    },
    {
      id: 2,
      title: "А это работает везде так?",
      desc: "А если заначения будут другими или контест поменяется?\nВожможно ли падение ошибки?",
      author: "Danya",
      position: {
        startLineNumber: 1,
        endLineNumber: 3,
        startColumn: 12,
        endColumn: 12,
      },
      currentFile: "/script/index.js",
    },
    {
      id: 3,
      title: "Хах, прикольно",
      desc: "Очень интересно написано. Правда рефакторинг трудный будет.",
      author: "Vova",
      position: {
        startLineNumber: 23,
        endLineNumber: 23,
        startColumn: 23,
        endColumn: 23,
      },
      currentFile: "/script/index.js",
    },
    {
      id: 4,
      title: "Что-то странное",
      desc: "Очень странное поведение тут. Возможно из-за пееременной... Или возможно, контекст не тот.\nПопробуй проверь",
      author: "Oleg",
      position: {
        startLineNumber: 45,
        endLineNumber: 45,
        startColumn: 2,
        endColumn: 2,
      },
      currentFile: "/script/index.js",
    },
  ],
  whiteList: [
    {
      name: "Oleg",
      _id: "631g6j0f54273",
    },
  ],
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/build", express.static(__dirname + "/build"));
app.use("/build2", express.static(__dirname + "/build2"));
app.use("/static", express.static(__dirname + "/root"));
app.use(requestIp.mw());
app.use(cookieParser(generateRandomKey()));

app.get("/:translationID/chat_messages", (request, response) => {
  const t = translations[request.params["translationID"]];
  try {
    response.status(200).json(t.messages);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/changepojectname", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];
    const { value } = request.body;

    t.name = value;

    response.sendStatus(200);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/projectname", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).send(t.name);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/projecttype", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).send(t.type);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/projectlink", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    console.log(t.url);

    response.status(200).send(t.url);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/disconnect", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];
    const id = request.cookies.userid;
    console.log("disconnected", id);

    t.viewers = t.viewers.filter((user) => user._id !== id);

    response.sendStatus(200);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/projectviewers", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).send(t.viewers);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/addtowhitelist", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];
    const { id, name } = request.body;

    if (t.whiteList.find((user) => user._id === id)) {
      response.sendStatus(404);
    } else {
      t.whiteList.push({
        name,
        _id: id,
      });

      response.sendStatus(200);
    }
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/projectwhitelist", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).send(t.whiteList);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/changemute", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];
    const { name } = request.body;

    const user = t.viewers.find((item) => item.name === name);

    user.muted = !user.muted;

    response.status(200).send(user.muted);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/changewhitelist", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    if (t.whiteList) {
      t.whiteList = null;
    } else {
      t.whiteList = [];
    }

    response.status(200).send(t.whiteList);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/changename", (request, response) => {
  try {
    console.log(request.body.name);

    response.cookie("name", request.body.name);

    response.sendStatus(200);
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/:translationID/savefile", (request, response) => {
  const { filePath, content } = request.body;
  // const file = path.parse(filePath);

  try {
    fs.writeFile(filePath, content, () => {
      const t = translations[request.params["translationID"]];

      readDir(dirPath + "/" + request.params["translationID"]).then((data) => {
        t.files = data;
        response.sendStatus(200);
      });
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/directory", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).json(t.files);
  } catch (err) {
    response.sendStatus(404);
  }
});

app.get("/:translationID/notices", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).json(t.notices);
  } catch (err) {
    response.status(404).end();
  }
});

app.get("/:translationID/closednotices", (request, response) => {
  try {
    const t = translations[request.params["translationID"]];

    response.status(200).json(t.closedNotices);
  } catch (err) {
    response.status(404).end();
  }
});

app.get("/:translationID/viewtype", (request, response) => {
  const url = request.params["translationID"];
  const t = request.cookies.token;
  let name = request.cookies.name;

  // if (request.cookies.curtrans === url) {
  //   name =
  // } else {
  //   name = undefined;
  // }

  console.log(t, url);

  const viewtype = t === url ? "streamer" : "viewer";

  console.log(viewtype);

  response.json({
    viewtype,
    name,
  });
});

app.post("/jointranslation", (request, response) => {
  try {
    const { url } = request.body;

    if (translations[url]) {
      response.sendStatus(200);
    } else {
      response.sendStatus(404);
    }
  } catch (e) {
    response.sendStatus(404);
  }
});

app.post("/createtranslation", (request, response) => {
  const { name, type } = request.body;

  try {
    let id = generateRandomKey();

    while (translations[id]) {
      id = generateRandomKey();
    }

    createProject(id);

    readDir(dirPath + "/" + id).then((data) => {
      translations[id] = {
        name,
        url: id,
        type,
        host: request.clientIp,
        viewers: [],
        files: data,
        messages: [],
        closedNotices: [],
        notices: [],
        whiteList: null,
      };

      response.cookie("token", id);
      response.status(200).send(id);
    });
  } catch (e) {
    response.sendStatus(404);
  }
});

app.get("/:translationID", (request, response) => {
  try {
    const url = request.params["translationID"];
    const t = translations[url];
    let flag = 0;

    // if (request.cookies.curtrans !== url) {
    //   response.cookie("name", undefined);
    // }

    if (request.cookies.token === url) {
      flag = 2;
      response.cookie("curtrans", url);
    } else {
      let userId = request.cookies.userid;
      let newUserId;

      if (!userId) {
        newUserId = generateRandomKey(30);
        // newUserId = "631g6j0f54273";
        response.cookie("userid", newUserId);

        userId = newUserId;
      }

      if (!t.viewers.find((user) => user._id === userId)) {
        // нет в массиве зрителей

        if (t.whiteList) {
          // есть белый список

          // есть в белом списке

          if (t.whiteList.find((user) => user._id === userId)) {
            flag = 1; // ok

            t.viewers.push({
              name: request.cookies.name,
              muted: false,
              _id: userId,
            });
            response.cookie("curtrans", url);
          } else {
            // нет в белом списке

            flag = -1; // bad
          }
        } else {
          // нет белого списка

          flag = 1; // ok

          t.viewers.push({
            name: request.cookies.name,
            muted: false,
            _id: userId,
          });
          response.cookie("curtrans", url);
        }
      } else {
        // есть в массиве зрителей

        flag = 1;
        response.cookie("curtrans", url);
      }
    }

    if (flag === 1) {
      response.sendFile(__dirname + "/build/index.html");
    } else if (flag === 2) {
      response.sendFile(__dirname + "/build/index.html");
    } else if (flag === -1) {
      response.redirect("/");
    } else {
      response.redirect("/");
    }
  } catch (e) {
    response.redirect("/");
  }
});

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/build2/index.html");
});

io.on("connection", (socket) => {
  // console.log(`a user ${socket.id} connected`);

  socket.join(socket.handshake.query.roomId);

  // console.log(
  //   `a user ${socket.id} joined to ${socket.handshake.query.roomId} room`
  // );

  socket.on("disconnect", () => {
    // console.log(`user ${socket.id} disconnected`);
  });

  socket.on("editor_data", (data) => {
    const t = translations[socket.handshake.query.roomId];

    const file = findFileByPath(data.file, t.files);

    file.content = data.value;

    socket
      .to(socket.handshake.query.roomId)
      .emit("editor_data_broadcast", data);
  });

  socket.on("new_chat_message", (data) => {
    const t = translations[socket.handshake.query.roomId];

    t.messages.push(data);

    socket.to(socket.handshake.query.roomId).emit("chat_message", data);
  });

  socket.on("output_reload", () => {
    socket.to(socket.handshake.query.roomId).emit("output_reloaded");
  });

  socket.on("close_notice", (data) => {
    const t = translations[socket.handshake.query.roomId];

    t.notices = t.notices.filter((item) => item.id !== data.id);
    t.closedNotices.unshift(data);

    socket.to(socket.handshake.query.roomId).emit("closed_notice", data);
  });

  socket.on("create_notice", (data) => {
    const t = translations[socket.handshake.query.roomId];

    t.notices.unshift(data);

    socket.to(socket.handshake.query.roomId).emit("created_notice", data);
  });

  socket.on("viewer_connect", (data) => {
    socket.to(socket.handshake.query.roomId).emit("viewer_connect", data);
  });

  // socket.on("viewer_disconnect", (data) => {
  //   socket.to(socket.handshake.query.roomId).emit("viewer_disconnect", data);
  // });
});

httpServer.listen(process.env.PORT || 3000);

async function readDir(dirPath) {
  let dirInfo = [];
  const files = await fs.readdirSync(dirPath);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const curFile = path.resolve(dirPath, file);
    const parsedPath = path.parse(curFile);
    const stat = await fs.statSync(curFile);

    if (stat.isDirectory()) {
      const data = await readDir(curFile);

      dirInfo.push({
        path: curFile,
        name: parsedPath.base,
        ext: "",
        content: "",
        size: stat.size,
        isDirectory: true,
        children: data,
      });
    } else {
      const content = await fs.readFileSync(curFile);

      dirInfo.push({
        path: curFile,
        name: parsedPath.name,
        ext: parsedPath.ext,
        content: content.toString(),
        size: stat.size,
        isDirectory: false,
        children: [],
      });
    }
  }

  return dirInfo;
}

function parseFileByExt(file, ext) {
  switch (ext) {
    case ".html":
      let index = file.indexOf("</body>");

      if (index !== -1)
        return file.slice(0, index) + sctipt + file.slice(index);
      else return file;
    default:
      return file;
  }
}

function unparseFileByExt(file, ext) {
  switch (ext) {
    case ".html":
      let index = file.indexOf(sctipt);

      if (index !== -1)
        return file.slice(0, index) + file.slice(index + sctipt.length);
      else return file;
    default:
      return file;
  }
}

function findFileByPath(filePath, dir) {
  let file = null;
  let finned = dir.find((item) => {
    if (item.path === filePath) return true;
    else if (item.children) {
      file = findFileByPath(filePath, item.children);
      return true;
    }
  });

  return file ? file : finned;
}

function generateRandomKey(length = 20) {
  return Math.random().toString(20).substr(2, length);
}

function createDir(dirName) {
  const newdirPath = path.resolve(dirPath, dirName);
  if (!fs.existsSync(newdirPath)) {
    fs.mkdirSync(newdirPath);
  } else {
    throw new Error("Dir already exist!");
  }
}

function createFileInDir(dirName, filename, content) {
  fs.writeFileSync(path.resolve(dirPath, dirName, filename), content);
}

function deleteFileInDir(dirName, filename) {
  fs.unlinkSync(path.resolve(dirPath, dirName, filename));
}

function deleteDir(dirName) {
  fs.rmdirSync(path.resolve(dirPath, dirName), {
    recursive: true,
  });
}

function createFileInDir(dirName, filename, content) {
  fs.writeFileSync(path.resolve(dirPath, dirName, filename), content);
}

function createProject(projectname) {
  createDir(projectname);
  createDir(projectname + "/scripts");
  createDir(projectname + "/styles");

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="/static/${projectname}/styles/style.css">
      <style>html::-webkit-scrollbar{background-color:transparent;width:10px}html::-webkit-scrollbar-track{background-color:transparent}html::-webkit-scrollbar-track-piece{background-color:transparent}html::-webkit-scrollbar-button{display:none}html::-webkit-scrollbar-thumb{background-color:transparent}html::-webkit-scrollbar-thumb:hover{background-color:rgba(85, 85, 85, 0.247)}</style>
      <title>${projectname}</title>
  </head>

  <body>
    <main id="main">
        <article id="article">
            <section>
              <h1>Live Coding</h1>

              <p>Start WEB project '${projectname}'</p>
            </section>
        </article>
    </main>
    <script >
        window.onerror=function(o,e,r,s,n){return window.parent.postMessage({source:"iframe",message:["error",{msg:o,url:e,lineNo:r,columnNo:s,error:n}]},"*"),!1};const _log=console.log,_error=console.error,_dir=console.dir;console.log=function(...o){const e=/(d+):(d+)?$/;let r,s,n;try{throw new Error}catch(o){r=o}try{return n=r.stack.split("\n"),this("["+e.exec(n[2])+"]",...log)}catch(r){s=0}n=(n=(n=n[2].split("\ "))[n.length-1].split("/"))[n.length-1].split(":").slice(0,2),window.parent.postMessage({source:"iframe",message:["log",n=n.join(":"),...o.map(o=>JSON.parse(JSON.stringify(o)))]},"*"),_log.apply(console,arguments)},console.error=function(...o){window.parent.postMessage({source:"iframe",message:["error",...o]},"*"),_error.apply(console,arguments)},console.dir=function(...o){window.parent.postMessage({source:"iframe",message:["dir",...o]},"*"),_dir.apply(console,arguments)};
    </script>
    <script src="/static/${projectname}/scripts/index.js"></script>
  </body>
</html>`;

  const cssContent = `
body {
  margin: 0;
  padding: 0;
}

h1 {
    color: brown;
}`;

  const scriptContent = `
function main() {
  console.log("Hello World!!!");
}

main();`;

  createFileInDir(projectname, "index.html", htmlContent);
  createFileInDir(projectname + "/scripts", "index.js", scriptContent);
  createFileInDir(projectname + "/styles", "style.css", cssContent);
}

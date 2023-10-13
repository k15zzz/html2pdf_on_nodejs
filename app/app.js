import {initExpress} from "./webserver/server.js";
import {route} from "./webserver/route.js";
import {portWebServer} from "./config/config.js";

let app = initExpress();

route(app);

app.listen(portWebServer, () => {
    console.log('Сервер запущен на ' + portWebServer + ' порту');
});
import path from "path";
import { remote } from "electron";
import storage from "electron-json-storage";

const appPath = path.join(remote.app.getAppPath(), "/../../../../../app/");
storage.setDataPath(appPath);

export default storage;

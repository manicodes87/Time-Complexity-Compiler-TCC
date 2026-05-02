import { app } from "electron";
import path from "path";

export default function getResourcePath(
  ...relativePathSegments: string[]
): string {
  const base = app.isPackaged
    ? process.resourcesPath
    : path.join(__dirname, "../../resources");

  return path.join(base, ...relativePathSegments);
}

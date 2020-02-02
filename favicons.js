const favicons = require("favicons");
const path = require("path");
const fs = require("fs");

const config18Holes = {
  path: "/",
  appName: "18 Holes",
  appShortName: "18 Holes",
  appDescription:
    "18 Holes is a strategy golfing board game where hitting off-course, on-purpose may be the fastest way to the green.",
  developerName: "Seabrook Studios",
  developerURL: "https://seabrook-studios.com",
  dir: "auto",
  lang: "en-US",
  background: "#fff",
  theme_color: "#fff",
  appleStatusBarStyle: "black-translucent",
  display: "standalone",
  orientation: "any",
  scope: "/",
  start_url: "/?homescreen=1",
  version: "1.0",
  logging: false,
  pixel_art: false,
  loadManifestWithCredentials: false,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: false,
    windows: true,
    yandex: false
  }
};

const configVictoryLap = {
  ...config18Holes,
  appName: "Victory Lap",
  appShortName: "Victory Lap",
  appDescription: "Race with your head. Not with your thumbs"
};

const callback = folder => (error, res) => {
  if (error) {
    console.log(error.message);
    return;
  }

  res.images.forEach(image => {
    fs.writeFile(
      path.resolve(__dirname, `./favicons/${folder}/icons/`, image.name),
      image.contents,
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  });

  res.files.forEach(file => {
    fs.writeFile(
      path.resolve(__dirname, `./favicons/${folder}/`, file.name),
      file.contents,
      err => {
        if (err) {
          console.log(err);
        }
      }
    );
  });
};

favicons("favicons/18-holes.png", config18Holes, callback("18-holes"));
favicons("favicons/victory-lap.png", configVictoryLap, callback("victory-lap"));

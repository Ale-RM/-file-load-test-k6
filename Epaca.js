import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  stages: [
    { duration: "1m", target: 10 },
    { duration: "1m", target: 10 },
    { duration: "1m", target: 20 },
    { duration: "1m", target: 20 },
    { duration: "1m", target: 0 },
  ],
 
};

export default function main() {
  let response;

  group("page_1 - https://feelcentercity.it/Epaca/", function () {
    response = http.get("https://feelcentercity.it/Epaca/", {
      headers: {
        host: "feelcentercity.it",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "accept-language": "en-GB,en;q=0.5",
        "accept-encoding": "gzip, deflate, br",
        connection: "keep-alive",
        "upgrade-insecure-requests": "1",
      },
    });
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/style.css",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "text/css,*/*;q=0.1",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/webgl-logo.png",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/fullscreen-button.png",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/Build/Build.loader.js",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/unity-logo-dark.png",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/progress-bar-empty-dark.png",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/progress-bar-full-dark.png",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/TemplateData/favicon.ico",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "image/webp,*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/Build/Build.framework.js.unityweb",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/Build/Build.wasm.unityweb",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    sleep(1.6);
    response = http.get(
      "https://feelcentercity.it/Epaca/Build/Build.data.unityweb",
      {
        headers: {
          host: "feelcentercity.it",
          accept: "*/*",
          "accept-language": "en-GB,en;q=0.5",
          "accept-encoding": "gzip, deflate, br",
          connection: "keep-alive",
        },
      }
    );
    sleep(50.3);
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/MARKETING_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/INAIL_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/EPACA_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/SERV_SOCIALI_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/STUD_ASSOC_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
    response = http.get(
      "https://feelcentercity.it/Epaca/StreamingAssets/INPS_V001.mp4",
      {
        headers: {
          host: "feelcentercity.it",
          accept:
            "video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5",
          "accept-language": "en-GB,en;q=0.5",
          range: "bytes=0-",
          connection: "keep-alive",
        },
      }
    );
  });
}

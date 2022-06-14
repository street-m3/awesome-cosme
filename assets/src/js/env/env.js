'use strict';

const urlFullPath = location.href.split(/#/)[0];
const urlShortPath = urlFullPath.substring(0, urlFullPath.lastIndexOf("/"));
const urlImagePath = `${urlShortPath}/images/`;

const presets = {
    siteName: "AWESOME COSME",
    baseUrl: {
        development: "http://",
        production: "http://"
    },
    prefix: "#index_id",
    images: "images/"
}

export { presets, urlFullPath, urlShortPath, urlImagePath };
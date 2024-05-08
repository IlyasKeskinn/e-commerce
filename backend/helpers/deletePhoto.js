require('express-async-errors');
const express = require("express");
const fs = require("fs");

async function deleteOldImages(deletedImagePaths) {
    if (deletedImagePaths) {
        for (const image of deletedImagePaths) {
            fs.unlink(`../frontend/src/images/${image}`, (error) => {
                console.log(error);
            });
        }

    }

};

module.exports = deleteOldImages


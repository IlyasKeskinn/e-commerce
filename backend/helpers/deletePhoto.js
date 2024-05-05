const express = require("express");
const fs = require("fs");

async function deleteOldImages(deletedImagePaths) {
    try {
        if (deletedImagePaths) {
            for (const image of deletedImagePaths) {
                fs.unlink(`../frontend/src/images/${image}`, (error) => {
                    console.log(error);
                });
            }

        }
    }

    catch (error) {
        console.log(error);
    }
};

module.exports = deleteOldImages


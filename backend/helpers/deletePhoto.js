// const express = require("express");
// const fs = require("fs");

// async function deleteOldImages(deletedImagePaths) {
//     try {
//         if (deletedImagePaths) {
//             for (const image of deletedImagePaths) {
//                 fs.unlink(`../frontend/src/images/${image}`, (error) => {
//                     console.log(error);
//                 });
//             }

//         }
//         else {
//             res.status(404).json("Image not found");
//         }
//     }

//     catch (error) {
//         if (error instanceof Error) {
//             res.status(500).json(error.message);
//         }
//     }
// };

// module.exports = deleteOldImages


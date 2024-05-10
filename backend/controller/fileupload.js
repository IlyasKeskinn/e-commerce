const express = require("express");
const { initializeApp } = require('firebase/app');
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
const { firebaseConfig } = require("../config/firebaseConfig");

const router = express.Router();

//Initialize a firebase application
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.array("files"), async (req, res) => {
    try {

        const uploadedFiles = req.files; // Get the array of uploaded files

        const uploadTasks = uploadedFiles.map(async (file) => {
            const storageRef = ref(storage, `files/${file.originalname + "_" + Math.round(Math.random() * 1E9)}`);

            // Create file metadata including the content type
            const metadata = {
                contentType: file.mimetype,
            };

            // Upload the file in the bucket storage
            const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
            //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

            // Grab the public url
            const downloadURL = await getDownloadURL(snapshot.ref);

            return {
                image_name: file.originalname,
                downloadURL: downloadURL
            };
        });

        const uploadedFilesInfo = await Promise.all(uploadTasks);

        console.log('Files successfully uploaded.');
        return res.send({files: uploadedFilesInfo});
    } catch (error) {
        return res.status(400).send(error.message);
    }
});

const giveCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
};

module.exports = router;

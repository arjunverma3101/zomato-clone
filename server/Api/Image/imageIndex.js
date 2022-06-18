import express from "express";

const Image = express();

/*

Route       /upload
Description to upload image to the bucket
Params      non
Access      Public
Method      post

*/


Image.post("/upload", async (req, res) => {
    try {

        return res.status(200).json({ success: "S" });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Image;
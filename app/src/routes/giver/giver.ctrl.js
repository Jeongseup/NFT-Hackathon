"use strict";
// const multer = require("multer");
const sys = require("../../config/db");

const output = {
    donateNft: (req, res) => {
        res.render("giver/donateNft");
    },

    ownedNft: (req, res) => {
        res.render("giver/ownedNft");
    },
};

const process = {
    // registerArt: async (req, res) => {
    //     req.body.art_image_path = req.file.path;
    //     const art = new Art(req.body);
    //     const response = await art.registerArt();
    //     const url = {
    //         method: "POST",
    //         path: "/registerArt",
    //     };
    //     return res.json(response);
    // },
    // getArtInfo: async (req, res) => {
    //     console.log("process.getArtInfo");
    //     try {
    //         const result = await sys.db("getArtInfo");
    //         console.table(result);
    //     } catch (err) {
    //         res.status(500).send({
    //             error: err,
    //         });
    //     }
    // },
};

module.exports = {
    output,
    process,
};

const express = require("express");
const { getCategoryVersion } = require("../../../../libs/categories");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const versionData = await getCategoryVersion();
    return res.status(200).json(versionData);
  } catch (ex) {
    console.error("Error category", ex);
    return res.status(502).json({ error: "Fallo interno" });
  }
}); //get

module.exports = router;

const { getSimpleJwksService, secure } = require("express-oauth-jwt");

const jwksService = getSimpleJwksService(
  "http://localhost:8443/oauth/v2/oauth-anonymous/jwks"
);

const express = require("express");
const router = express.Router();

const getSecuredWithAnyToken = (req, res) => {
  res
    .status(200)
    .json({ data: "Some data from secured endpoint.", user: req.claims.sub });
};

router.get("/token", secure(jwksService), getSecuredWithAnyToken);

module.exports = router;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var email_1 = require("./email");
var render_1 = require("@react-email/render");
var html = await (0, render_1.render)(<email_1.MyTemplate />, {
    pretty: true,
});
console.log(html);

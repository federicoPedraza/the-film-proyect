"use strict";
exports.__esModule = true;
exports.CommentViewer = void 0;
var material_1 = require("@mui/material");
var react_1 = require("react");
var globalStyles_1 = require("../../theme/globalStyles");
var comment_1 = require("./comment");
exports.CommentViewer = function (_a) {
    var comments = _a.comments, loading = _a.loading;
    var commentViewerContainer = globalStyles_1.UIStyles().commentViewerContainer;
    var _b = react_1.useState(0), currentIndex = _b[0], setCurrentIndex = _b[1];
    if (loading) {
        return React.createElement(material_1.LinearProgress, { color: "secondary" });
    }
    if (comments.length === 0) {
        return React.createElement(React.Fragment, null, "No hay comentarios");
    }
    return (React.createElement(core_1.Paper, { elevation: 20, className: commentViewerContainer, style: { height: 240, zIndex: "-1" } }, comments.map(function (comment) {
        return React.createElement(comment_1["default"], { comment: comment });
    })));
};

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filesModel = exports.filesController = exports.filesRouteProps = undefined;

var _router = require('./router');

var _filesRouteProps = _interopRequireWildcard(_router);

var _controller = require('./controller');

var _filesController = _interopRequireWildcard(_controller);

var _files = require('./files.model');

var _filesModel = _interopRequireWildcard(_files);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.filesRouteProps = _filesRouteProps;
exports.filesController = _filesController;
exports.filesModel = _filesModel;
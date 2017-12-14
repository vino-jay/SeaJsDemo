define(function(require, exports, module){
    require('jquery');
    var m4 = require('module4');
 
    exports.run = function() {
        return $.merge(['--供应链'], m4.run());    
    }
});
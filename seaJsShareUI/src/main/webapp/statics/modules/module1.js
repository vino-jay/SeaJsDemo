define(function(require, exports, module){
    require('jquery');
    var m2 = require('module2');
    var m3 = require('module3');
 
    exports.run = function() {
        return $.merge(['找钢网'], $.merge(m2.run(), m3.run()));    
    }
});
const antlr4 = require('./antlr4/index');
const glGrammarLexer = require('./glGrammarLexer');
const glGrammarParser = require('./glGrammarParser');
var glGrammarListener = require('./glGrammarListener').glGrammarListener;

var webglImpl = require('./lab');

ChildGlGrammarListener = function() {  
    glGrammarListener.call(this); // inherit default listener
    return this;

};

// inherit default listener
ChildGlGrammarListener.prototype = Object.create(glGrammarListener.prototype);
ChildGlGrammarListener.prototype.constructor = ChildGlGrammarListener;

// override default listener behavior
ChildGlGrammarListener.prototype.enterProgram = function(ctx) {             
    console.log("Program detected! Proceeding to PARSE....");
};

glGrammarListener.prototype.exitProgram = function(ctx) {
    console.log("Program END reached! Compilation successful!!!");
};

// Enter a parse tree produced by glGrammarParser#programName.
glGrammarListener.prototype.enterProgramName = function(ctx) {
};
    
ChildGlGrammarListener.prototype.exitProgramName = function(ctx) {      

}; 

// Enter a parse tree produced by glGrammarParser#statements.
glGrammarListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#statements.
glGrammarListener.prototype.exitStatements = function(ctx) {

};

// Enter a parse tree produced by glGrammarParser#action.
glGrammarListener.prototype.enterAction = function(ctx) {

    webglImpl.setAction(ctx.getText());

};

// Exit a parse tree produced by glGrammarParser#action.
glGrammarListener.prototype.exitAction = function(ctx) {
};

// Enter a parse tree produced by glGrammarParser#argument.
glGrammarListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#argument.
glGrammarListener.prototype.exitArgument = function(ctx) {
};

// Enter a parse tree produced by glGrammarParser#shape.
glGrammarListener.prototype.enterShape = function(ctx) {
    if (ctx.getText() == "CIRCLE"){
        webglImpl.setShapeCircle();
    } else if (ctx.getText() == "SQUARE"){
        webglImpl.setShapeSquare();
    }
};

// Exit a parse tree produced by glGrammarParser#shape.
glGrammarListener.prototype.exitShape = function(ctx) {
};


ChildGlGrammarListener.prototype.enterColor = function(ctx) {
    if (ctx.getText() == 'RED')
        webglImpl.setRedColor();
    else if (ctx.getText() == 'BLUE')
        webglImpl.setBlueColor();
    else if (ctx.getText() == 'BLACK')
        webglImpl.setBlackColor();
    else if (ctx.getText() == 'GREEN')
        webglImpl.setGreenColor();
};

// Exit a parse tree produced by glGrammarParser#color.
ChildGlGrammarListener.prototype.exitColor = function(ctx) {
};

// Enter a parse tree produced by glGrammarParser#position.
glGrammarListener.prototype.enterPosition = function(ctx) {
    webglImpl.setGlobalXCoord(ctx.DIGIT(0));
    webglImpl.setGlobalYCoord(ctx.DIGIT(1));
};

// Exit a parse tree produced by glGrammarParser#position.
glGrammarListener.prototype.exitPosition = function(ctx) {
    if (webglImpl.getAction() == 'DRAW')
        webglImpl.drawShape();
    else if (webglImpl.getAction() == 'ROTATE'){
        
    }
};

// Enter a parse tree produced by glGrammarParser#id.
glGrammarListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#id.
glGrammarListener.prototype.exitId = function(ctx) {
    webglImpl.setObjectId(ctx.getText());
};

// Enter a parse tree produced by glGrammarParser#alphaNum.
glGrammarListener.prototype.enterAlphaNum = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#alphaNum.
glGrammarListener.prototype.exitAlphaNum = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#start.
glGrammarListener.prototype.enterStart = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#start.
glGrammarListener.prototype.exitStart = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.enterSize = function(ctx) {
    webglImpl.setGlobalSize(ctx.getText());
};

// Exit a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.exitSize = function(ctx) {
    if (webglImpl.getAction() == 'ROTATE'){
        webglImpl.rotateObject();
    }
};

// Enter a parse tree produced by glGrammarParser#endProgram.
ChildGlGrammarListener.prototype.enterEndProgram = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#endProgram.
ChildGlGrammarListener.prototype.exitEndProgram = function(ctx) {
};


exports.ChildGlGrammarListener = ChildGlGrammarListener;
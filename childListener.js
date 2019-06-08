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
    //this.Res.write("<strong>");   
    console.log("Program detected! Proceeding to PARSE....");
};
    
ChildGlGrammarListener.prototype.exitProgramName = function(ctx) {      
    // this.Res.write(ctx.WORD().getText());
    // this.Res.write("</strong> ");
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
};


// Enter a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.enterSize = function(ctx) {
    webglImpl.setGlobalSize(ctx.getText());
};

// Exit a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.exitSize = function(ctx) {
};

// Enter a parse tree produced by glGrammarParser#endProgram.
ChildGlGrammarListener.prototype.enterEndProgram = function(ctx) {
    webglImpl.drawShape();
};

// Exit a parse tree produced by glGrammarParser#endProgram.
ChildGlGrammarListener.prototype.exitEndProgram = function(ctx) {
};



ChildGlGrammarListener.prototype.exitEmoticon = function(ctx) {      
    var emoticon = ctx.getText();        
    
    if(emoticon == ':-)' || emoticon == ':)')
    {
        this.Res.write("🙂");        
    }
    
    if(emoticon == ':-(' || emoticon == ':(')
    {
        this.Res.write("🙁");            
    }
}; 

ChildGlGrammarListener.prototype.enterCommand = function(ctx) {          
    if(ctx.SAYS() != null)
        this.Res.write(ctx.SAYS().getText() + ':' + '<p>');

    if(ctx.SHOUTS() != null)
        this.Res.write(ctx.SHOUTS().getText() + ':' + '<p style="text-transform: uppercase">');
};

ChildGlGrammarListener.prototype.exitLine = function(ctx) {              
    this.Res.write("</p>");
};

exports.ChildGlGrammarListener = ChildGlGrammarListener;
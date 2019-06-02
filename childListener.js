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
    console.log("program Entered!");
    webglImpl.createCylinder();
};
    
ChildGlGrammarListener.prototype.exitProgramName = function(ctx) {      
    // this.Res.write(ctx.WORD().getText());
    // this.Res.write("</strong> ");
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
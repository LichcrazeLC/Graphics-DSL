// Generated from glGrammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');

// This class defines a complete listener for a parse tree produced by glGrammarParser.
function glGrammarListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

glGrammarListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
glGrammarListener.prototype.constructor = glGrammarListener;

// Enter a parse tree produced by glGrammarParser#program.
glGrammarListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#program.
glGrammarListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#programName.
glGrammarListener.prototype.enterProgramName = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#programName.
glGrammarListener.prototype.exitProgramName = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#statements.
glGrammarListener.prototype.enterStatements = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#statements.
glGrammarListener.prototype.exitStatements = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#action.
glGrammarListener.prototype.enterAction = function(ctx) {
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


// Enter a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.enterSize = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#size.
glGrammarListener.prototype.exitSize = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#shape.
glGrammarListener.prototype.enterShape = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#shape.
glGrammarListener.prototype.exitShape = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#color.
glGrammarListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#color.
glGrammarListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#position.
glGrammarListener.prototype.enterPosition = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#position.
glGrammarListener.prototype.exitPosition = function(ctx) {
};


// Enter a parse tree produced by glGrammarParser#id.
glGrammarListener.prototype.enterId = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#id.
glGrammarListener.prototype.exitId = function(ctx) {
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


// Enter a parse tree produced by glGrammarParser#endProgram.
glGrammarListener.prototype.enterEndProgram = function(ctx) {
};

// Exit a parse tree produced by glGrammarParser#endProgram.
glGrammarListener.prototype.exitEndProgram = function(ctx) {
};



exports.glGrammarListener = glGrammarListener;
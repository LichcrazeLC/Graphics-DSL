// Generated from glGrammar.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('./antlr4/index');
var glGrammarListener = require('./glGrammarListener').glGrammarListener;
var grammarFileName = "glGrammar.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u001f]\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0007",
    "\u0004,\n\u0004\f\u0004\u000e\u0004/\u000b\u0004\u0003\u0005\u0003\u0005",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006",
    "D\n\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0007\u000bR\n\u000b",
    "\f\u000b\u000e\u000bU\u000b\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0002\u0002\u000f\u0002\u0004\u0006\b",
    "\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0006\u0003\u0002",
    "\u0003\u0006\u0003\u0002\n\u000b\u0003\u0002\f\u0014\u0003\u0002\u0017",
    "\u0018\u0002T\u0002\u001c\u0003\u0002\u0002\u0002\u0004#\u0003\u0002",
    "\u0002\u0002\u0006-\u0003\u0002\u0002\u0002\b0\u0003\u0002\u0002\u0002",
    "\nC\u0003\u0002\u0002\u0002\fE\u0003\u0002\u0002\u0002\u000eG\u0003",
    "\u0002\u0002\u0002\u0010I\u0003\u0002\u0002\u0002\u0012K\u0003\u0002",
    "\u0002\u0002\u0014O\u0003\u0002\u0002\u0002\u0016V\u0003\u0002\u0002",
    "\u0002\u0018X\u0003\u0002\u0002\u0002\u001aZ\u0003\u0002\u0002\u0002",
    "\u001c\u001d\u0005\u0018\r\u0002\u001d\u001e\u0005\u0004\u0003\u0002",
    "\u001e\u001f\u0007\u001c\u0002\u0002\u001f \u0005\u0006\u0004\u0002",
    " !\u0007\u001d\u0002\u0002!\"\u0005\u001a\u000e\u0002\"\u0003\u0003",
    "\u0002\u0002\u0002#$\u0005\u0014\u000b\u0002$\u0005\u0003\u0002\u0002",
    "\u0002%&\u0005\b\u0005\u0002&\'\u0007\u001a\u0002\u0002\'(\u0005\n\u0006",
    "\u0002()\u0007\u001b\u0002\u0002)*\u0007\u001e\u0002\u0002*,\u0003\u0002",
    "\u0002\u0002+%\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002-+\u0003",
    "\u0002\u0002\u0002-.\u0003\u0002\u0002\u0002.\u0007\u0003\u0002\u0002",
    "\u0002/-\u0003\u0002\u0002\u000201\t\u0002\u0002\u00021\t\u0003\u0002",
    "\u0002\u000223\u0005\u000e\b\u000234\u0005\u0014\u000b\u000245\u0007",
    "\u0007\u0002\u000256\u0005\f\u0007\u000267\u0007\b\u0002\u000278\u0005",
    "\u0010\t\u000289\u0007\t\u0002\u00029:\u0005\u0012\n\u0002:D\u0003\u0002",
    "\u0002\u0002;<\u0005\u0014\u000b\u0002<=\u0007\t\u0002\u0002=>\u0005",
    "\u0012\n\u0002>D\u0003\u0002\u0002\u0002?@\u0005\u0014\u000b\u0002@",
    "A\u0005\f\u0007\u0002AD\u0003\u0002\u0002\u0002BD\u0005\u0014\u000b",
    "\u0002C2\u0003\u0002\u0002\u0002C;\u0003\u0002\u0002\u0002C?\u0003\u0002",
    "\u0002\u0002CB\u0003\u0002\u0002\u0002D\u000b\u0003\u0002\u0002\u0002",
    "EF\u0007\u0018\u0002\u0002F\r\u0003\u0002\u0002\u0002GH\t\u0003\u0002",
    "\u0002H\u000f\u0003\u0002\u0002\u0002IJ\t\u0004\u0002\u0002J\u0011\u0003",
    "\u0002\u0002\u0002KL\u0007\u0018\u0002\u0002LM\u0007\u0019\u0002\u0002",
    "MN\u0007\u0018\u0002\u0002N\u0013\u0003\u0002\u0002\u0002OS\u0007\u0017",
    "\u0002\u0002PR\u0005\u0016\f\u0002QP\u0003\u0002\u0002\u0002RU\u0003",
    "\u0002\u0002\u0002SQ\u0003\u0002\u0002\u0002ST\u0003\u0002\u0002\u0002",
    "T\u0015\u0003\u0002\u0002\u0002US\u0003\u0002\u0002\u0002VW\t\u0005",
    "\u0002\u0002W\u0017\u0003\u0002\u0002\u0002XY\u0007\u0015\u0002\u0002",
    "Y\u0019\u0003\u0002\u0002\u0002Z[\u0007\u0016\u0002\u0002[\u001b\u0003",
    "\u0002\u0002\u0002\u0005-CS"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'DRAW'", "'MOVE'", "'SCALE'", "'ROTATE'", "'SIZE'", 
                     "'COLOR'", "'AT'", "'CIRCLE'", "'SQUARE'", "'BLACK'", 
                     "'BLUE'", "'BROWN'", "'GREEN'", "'RED'", "'ORANGE'", 
                     "'PURPLE'", "'YELLOW'", "'WHITE'", "'BEGIN'", "'END'", 
                     null, null, "','", "'('", "')'", "'{'", "'}'", "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, "ALPHA", "DIGIT", "COMMA", "LPAREN", 
                      "RPAREN", "LCBRACE", "RCBRACE", "PANDC", "WS" ];

var ruleNames =  [ "program", "programName", "statements", "action", "argument", 
                   "size", "shape", "color", "position", "id", "alphaNum", 
                   "start", "endProgram" ];

function glGrammarParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

glGrammarParser.prototype = Object.create(antlr4.Parser.prototype);
glGrammarParser.prototype.constructor = glGrammarParser;

Object.defineProperty(glGrammarParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

glGrammarParser.EOF = antlr4.Token.EOF;
glGrammarParser.T__0 = 1;
glGrammarParser.T__1 = 2;
glGrammarParser.T__2 = 3;
glGrammarParser.T__3 = 4;
glGrammarParser.T__4 = 5;
glGrammarParser.T__5 = 6;
glGrammarParser.T__6 = 7;
glGrammarParser.T__7 = 8;
glGrammarParser.T__8 = 9;
glGrammarParser.T__9 = 10;
glGrammarParser.T__10 = 11;
glGrammarParser.T__11 = 12;
glGrammarParser.T__12 = 13;
glGrammarParser.T__13 = 14;
glGrammarParser.T__14 = 15;
glGrammarParser.T__15 = 16;
glGrammarParser.T__16 = 17;
glGrammarParser.T__17 = 18;
glGrammarParser.T__18 = 19;
glGrammarParser.T__19 = 20;
glGrammarParser.ALPHA = 21;
glGrammarParser.DIGIT = 22;
glGrammarParser.COMMA = 23;
glGrammarParser.LPAREN = 24;
glGrammarParser.RPAREN = 25;
glGrammarParser.LCBRACE = 26;
glGrammarParser.RCBRACE = 27;
glGrammarParser.PANDC = 28;
glGrammarParser.WS = 29;

glGrammarParser.RULE_program = 0;
glGrammarParser.RULE_programName = 1;
glGrammarParser.RULE_statements = 2;
glGrammarParser.RULE_action = 3;
glGrammarParser.RULE_argument = 4;
glGrammarParser.RULE_size = 5;
glGrammarParser.RULE_shape = 6;
glGrammarParser.RULE_color = 7;
glGrammarParser.RULE_position = 8;
glGrammarParser.RULE_id = 9;
glGrammarParser.RULE_alphaNum = 10;
glGrammarParser.RULE_start = 11;
glGrammarParser.RULE_endProgram = 12;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.start = function() {
    return this.getTypedRuleContext(StartContext,0);
};

ProgramContext.prototype.programName = function() {
    return this.getTypedRuleContext(ProgramNameContext,0);
};

ProgramContext.prototype.LCBRACE = function() {
    return this.getToken(glGrammarParser.LCBRACE, 0);
};

ProgramContext.prototype.statements = function() {
    return this.getTypedRuleContext(StatementsContext,0);
};

ProgramContext.prototype.RCBRACE = function() {
    return this.getToken(glGrammarParser.RCBRACE, 0);
};

ProgramContext.prototype.endProgram = function() {
    return this.getTypedRuleContext(EndProgramContext,0);
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitProgram(this);
	}
};




glGrammarParser.ProgramContext = ProgramContext;

glGrammarParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, glGrammarParser.RULE_program);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 26;
        this.start();
        this.state = 27;
        this.programName();
        this.state = 28;
        this.match(glGrammarParser.LCBRACE);
        this.state = 29;
        this.statements();
        this.state = 30;
        this.match(glGrammarParser.RCBRACE);
        this.state = 31;
        this.endProgram();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ProgramNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_programName;
    return this;
}

ProgramNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramNameContext.prototype.constructor = ProgramNameContext;

ProgramNameContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

ProgramNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterProgramName(this);
	}
};

ProgramNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitProgramName(this);
	}
};




glGrammarParser.ProgramNameContext = ProgramNameContext;

glGrammarParser.prototype.programName = function() {

    var localctx = new ProgramNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, glGrammarParser.RULE_programName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        this.id();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StatementsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_statements;
    return this;
}

StatementsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StatementsContext.prototype.constructor = StatementsContext;

StatementsContext.prototype.action = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ActionContext);
    } else {
        return this.getTypedRuleContext(ActionContext,i);
    }
};

StatementsContext.prototype.LPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(glGrammarParser.LPAREN);
    } else {
        return this.getToken(glGrammarParser.LPAREN, i);
    }
};


StatementsContext.prototype.argument = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ArgumentContext);
    } else {
        return this.getTypedRuleContext(ArgumentContext,i);
    }
};

StatementsContext.prototype.RPAREN = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(glGrammarParser.RPAREN);
    } else {
        return this.getToken(glGrammarParser.RPAREN, i);
    }
};


StatementsContext.prototype.PANDC = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(glGrammarParser.PANDC);
    } else {
        return this.getToken(glGrammarParser.PANDC, i);
    }
};


StatementsContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterStatements(this);
	}
};

StatementsContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitStatements(this);
	}
};




glGrammarParser.StatementsContext = StatementsContext;

glGrammarParser.prototype.statements = function() {

    var localctx = new StatementsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, glGrammarParser.RULE_statements);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << glGrammarParser.T__0) | (1 << glGrammarParser.T__1) | (1 << glGrammarParser.T__2) | (1 << glGrammarParser.T__3))) !== 0)) {
            this.state = 35;
            this.action();
            this.state = 36;
            this.match(glGrammarParser.LPAREN);
            this.state = 37;
            this.argument();
            this.state = 38;
            this.match(glGrammarParser.RPAREN);
            this.state = 39;
            this.match(glGrammarParser.PANDC);
            this.state = 45;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ActionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_action;
    return this;
}

ActionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ActionContext.prototype.constructor = ActionContext;


ActionContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterAction(this);
	}
};

ActionContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitAction(this);
	}
};




glGrammarParser.ActionContext = ActionContext;

glGrammarParser.prototype.action = function() {

    var localctx = new ActionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, glGrammarParser.RULE_action);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << glGrammarParser.T__0) | (1 << glGrammarParser.T__1) | (1 << glGrammarParser.T__2) | (1 << glGrammarParser.T__3))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ArgumentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_argument;
    return this;
}

ArgumentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ArgumentContext.prototype.constructor = ArgumentContext;

ArgumentContext.prototype.shape = function() {
    return this.getTypedRuleContext(ShapeContext,0);
};

ArgumentContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

ArgumentContext.prototype.size = function() {
    return this.getTypedRuleContext(SizeContext,0);
};

ArgumentContext.prototype.color = function() {
    return this.getTypedRuleContext(ColorContext,0);
};

ArgumentContext.prototype.position = function() {
    return this.getTypedRuleContext(PositionContext,0);
};

ArgumentContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterArgument(this);
	}
};

ArgumentContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitArgument(this);
	}
};




glGrammarParser.ArgumentContext = ArgumentContext;

glGrammarParser.prototype.argument = function() {

    var localctx = new ArgumentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, glGrammarParser.RULE_argument);
    try {
        this.state = 65;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 48;
            this.shape();
            this.state = 49;
            this.id();
            this.state = 50;
            this.match(glGrammarParser.T__4);
            this.state = 51;
            this.size();
            this.state = 52;
            this.match(glGrammarParser.T__5);
            this.state = 53;
            this.color();
            this.state = 54;
            this.match(glGrammarParser.T__6);
            this.state = 55;
            this.position();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 57;
            this.id();
            this.state = 58;
            this.match(glGrammarParser.T__6);
            this.state = 59;
            this.position();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 61;
            this.id();
            this.state = 62;
            this.size();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 64;
            this.id();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SizeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_size;
    return this;
}

SizeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SizeContext.prototype.constructor = SizeContext;

SizeContext.prototype.DIGIT = function() {
    return this.getToken(glGrammarParser.DIGIT, 0);
};

SizeContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterSize(this);
	}
};

SizeContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitSize(this);
	}
};




glGrammarParser.SizeContext = SizeContext;

glGrammarParser.prototype.size = function() {

    var localctx = new SizeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, glGrammarParser.RULE_size);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 67;
        this.match(glGrammarParser.DIGIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ShapeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_shape;
    return this;
}

ShapeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ShapeContext.prototype.constructor = ShapeContext;


ShapeContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterShape(this);
	}
};

ShapeContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitShape(this);
	}
};




glGrammarParser.ShapeContext = ShapeContext;

glGrammarParser.prototype.shape = function() {

    var localctx = new ShapeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, glGrammarParser.RULE_shape);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 69;
        _la = this._input.LA(1);
        if(!(_la===glGrammarParser.T__7 || _la===glGrammarParser.T__8)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;


ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitColor(this);
	}
};




glGrammarParser.ColorContext = ColorContext;

glGrammarParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, glGrammarParser.RULE_color);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 71;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << glGrammarParser.T__9) | (1 << glGrammarParser.T__10) | (1 << glGrammarParser.T__11) | (1 << glGrammarParser.T__12) | (1 << glGrammarParser.T__13) | (1 << glGrammarParser.T__14) | (1 << glGrammarParser.T__15) | (1 << glGrammarParser.T__16) | (1 << glGrammarParser.T__17))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PositionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_position;
    return this;
}

PositionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PositionContext.prototype.constructor = PositionContext;

PositionContext.prototype.DIGIT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(glGrammarParser.DIGIT);
    } else {
        return this.getToken(glGrammarParser.DIGIT, i);
    }
};


PositionContext.prototype.COMMA = function() {
    return this.getToken(glGrammarParser.COMMA, 0);
};

PositionContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterPosition(this);
	}
};

PositionContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitPosition(this);
	}
};




glGrammarParser.PositionContext = PositionContext;

glGrammarParser.prototype.position = function() {

    var localctx = new PositionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, glGrammarParser.RULE_position);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73;
        this.match(glGrammarParser.DIGIT);
        this.state = 74;
        this.match(glGrammarParser.COMMA);
        this.state = 75;
        this.match(glGrammarParser.DIGIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.ALPHA = function() {
    return this.getToken(glGrammarParser.ALPHA, 0);
};

IdContext.prototype.alphaNum = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AlphaNumContext);
    } else {
        return this.getTypedRuleContext(AlphaNumContext,i);
    }
};

IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitId(this);
	}
};




glGrammarParser.IdContext = IdContext;

glGrammarParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, glGrammarParser.RULE_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 77;
        this.match(glGrammarParser.ALPHA);
        this.state = 81;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 78;
                this.alphaNum(); 
            }
            this.state = 83;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function AlphaNumContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_alphaNum;
    return this;
}

AlphaNumContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AlphaNumContext.prototype.constructor = AlphaNumContext;

AlphaNumContext.prototype.ALPHA = function() {
    return this.getToken(glGrammarParser.ALPHA, 0);
};

AlphaNumContext.prototype.DIGIT = function() {
    return this.getToken(glGrammarParser.DIGIT, 0);
};

AlphaNumContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterAlphaNum(this);
	}
};

AlphaNumContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitAlphaNum(this);
	}
};




glGrammarParser.AlphaNumContext = AlphaNumContext;

glGrammarParser.prototype.alphaNum = function() {

    var localctx = new AlphaNumContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, glGrammarParser.RULE_alphaNum);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 84;
        _la = this._input.LA(1);
        if(!(_la===glGrammarParser.ALPHA || _la===glGrammarParser.DIGIT)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_start;
    return this;
}

StartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartContext.prototype.constructor = StartContext;


StartContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterStart(this);
	}
};

StartContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitStart(this);
	}
};




glGrammarParser.StartContext = StartContext;

glGrammarParser.prototype.start = function() {

    var localctx = new StartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, glGrammarParser.RULE_start);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 86;
        this.match(glGrammarParser.T__18);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EndProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = glGrammarParser.RULE_endProgram;
    return this;
}

EndProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EndProgramContext.prototype.constructor = EndProgramContext;


EndProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.enterEndProgram(this);
	}
};

EndProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof glGrammarListener ) {
        listener.exitEndProgram(this);
	}
};




glGrammarParser.EndProgramContext = EndProgramContext;

glGrammarParser.prototype.endProgram = function() {

    var localctx = new EndProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, glGrammarParser.RULE_endProgram);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 88;
        this.match(glGrammarParser.T__19);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.glGrammarParser = glGrammarParser;

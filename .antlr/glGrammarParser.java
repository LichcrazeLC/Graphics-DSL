// Generated from d:\University\graphics-dsl\glGrammar.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class glGrammarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, ALPHA=21, DIGIT=22, COMMA=23, LPAREN=24, 
		RPAREN=25, LCBRACE=26, RCBRACE=27, PANDC=28, WS=29;
	public static final int
		RULE_program = 0, RULE_programName = 1, RULE_statements = 2, RULE_action = 3, 
		RULE_argument = 4, RULE_size = 5, RULE_shape = 6, RULE_color = 7, RULE_position = 8, 
		RULE_id = 9, RULE_alphaNum = 10, RULE_start = 11, RULE_endProgram = 12;
	public static final String[] ruleNames = {
		"program", "programName", "statements", "action", "argument", "size", 
		"shape", "color", "position", "id", "alphaNum", "start", "endProgram"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'DRAW'", "'MOVE'", "'SCALE'", "'ROTATE'", "'SIZE'", "'COLOR'", 
		"'AT'", "'CIRCLE'", "'SQUARE'", "'BLACK'", "'BLUE'", "'BROWN'", "'GREEN'", 
		"'RED'", "'ORANGE'", "'PURPLE'", "'YELLOW'", "'WHITE'", "'BEGIN'", "'END'", 
		null, null, "','", "'('", "')'", "'{'", "'}'", "';'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, "ALPHA", "DIGIT", 
		"COMMA", "LPAREN", "RPAREN", "LCBRACE", "RCBRACE", "PANDC", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "glGrammar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public glGrammarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class ProgramContext extends ParserRuleContext {
		public StartContext start() {
			return getRuleContext(StartContext.class,0);
		}
		public ProgramNameContext programName() {
			return getRuleContext(ProgramNameContext.class,0);
		}
		public TerminalNode LCBRACE() { return getToken(glGrammarParser.LCBRACE, 0); }
		public StatementsContext statements() {
			return getRuleContext(StatementsContext.class,0);
		}
		public TerminalNode RCBRACE() { return getToken(glGrammarParser.RCBRACE, 0); }
		public EndProgramContext endProgram() {
			return getRuleContext(EndProgramContext.class,0);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			start();
			setState(27);
			programName();
			setState(28);
			match(LCBRACE);
			setState(29);
			statements();
			setState(30);
			match(RCBRACE);
			setState(31);
			endProgram();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgramNameContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public ProgramNameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programName; }
	}

	public final ProgramNameContext programName() throws RecognitionException {
		ProgramNameContext _localctx = new ProgramNameContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_programName);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StatementsContext extends ParserRuleContext {
		public List<ActionContext> action() {
			return getRuleContexts(ActionContext.class);
		}
		public ActionContext action(int i) {
			return getRuleContext(ActionContext.class,i);
		}
		public List<TerminalNode> LPAREN() { return getTokens(glGrammarParser.LPAREN); }
		public TerminalNode LPAREN(int i) {
			return getToken(glGrammarParser.LPAREN, i);
		}
		public List<ArgumentContext> argument() {
			return getRuleContexts(ArgumentContext.class);
		}
		public ArgumentContext argument(int i) {
			return getRuleContext(ArgumentContext.class,i);
		}
		public List<TerminalNode> RPAREN() { return getTokens(glGrammarParser.RPAREN); }
		public TerminalNode RPAREN(int i) {
			return getToken(glGrammarParser.RPAREN, i);
		}
		public List<TerminalNode> PANDC() { return getTokens(glGrammarParser.PANDC); }
		public TerminalNode PANDC(int i) {
			return getToken(glGrammarParser.PANDC, i);
		}
		public StatementsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statements; }
	}

	public final StatementsContext statements() throws RecognitionException {
		StatementsContext _localctx = new StatementsContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_statements);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(43);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3))) != 0)) {
				{
				{
				setState(35);
				action();
				setState(36);
				match(LPAREN);
				setState(37);
				argument();
				setState(38);
				match(RPAREN);
				setState(39);
				match(PANDC);
				}
				}
				setState(45);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ActionContext extends ParserRuleContext {
		public ActionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_action; }
	}

	public final ActionContext action() throws RecognitionException {
		ActionContext _localctx = new ActionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_action);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__0) | (1L << T__1) | (1L << T__2) | (1L << T__3))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ArgumentContext extends ParserRuleContext {
		public ShapeContext shape() {
			return getRuleContext(ShapeContext.class,0);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public SizeContext size() {
			return getRuleContext(SizeContext.class,0);
		}
		public ColorContext color() {
			return getRuleContext(ColorContext.class,0);
		}
		public PositionContext position() {
			return getRuleContext(PositionContext.class,0);
		}
		public ArgumentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argument; }
	}

	public final ArgumentContext argument() throws RecognitionException {
		ArgumentContext _localctx = new ArgumentContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_argument);
		try {
			setState(65);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(48);
				shape();
				setState(49);
				id();
				setState(50);
				match(T__4);
				setState(51);
				size();
				setState(52);
				match(T__5);
				setState(53);
				color();
				setState(54);
				match(T__6);
				setState(55);
				position();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(57);
				id();
				setState(58);
				match(T__6);
				setState(59);
				position();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(61);
				id();
				setState(62);
				size();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(64);
				id();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SizeContext extends ParserRuleContext {
		public TerminalNode DIGIT() { return getToken(glGrammarParser.DIGIT, 0); }
		public SizeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_size; }
	}

	public final SizeContext size() throws RecognitionException {
		SizeContext _localctx = new SizeContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_size);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(67);
			match(DIGIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ShapeContext extends ParserRuleContext {
		public ShapeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_shape; }
	}

	public final ShapeContext shape() throws RecognitionException {
		ShapeContext _localctx = new ShapeContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_shape);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_la = _input.LA(1);
			if ( !(_la==T__7 || _la==T__8) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ColorContext extends ParserRuleContext {
		public ColorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_color; }
	}

	public final ColorContext color() throws RecognitionException {
		ColorContext _localctx = new ColorContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_color);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(71);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__9) | (1L << T__10) | (1L << T__11) | (1L << T__12) | (1L << T__13) | (1L << T__14) | (1L << T__15) | (1L << T__16) | (1L << T__17))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PositionContext extends ParserRuleContext {
		public List<TerminalNode> DIGIT() { return getTokens(glGrammarParser.DIGIT); }
		public TerminalNode DIGIT(int i) {
			return getToken(glGrammarParser.DIGIT, i);
		}
		public TerminalNode COMMA() { return getToken(glGrammarParser.COMMA, 0); }
		public PositionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_position; }
	}

	public final PositionContext position() throws RecognitionException {
		PositionContext _localctx = new PositionContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_position);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(73);
			match(DIGIT);
			setState(74);
			match(COMMA);
			setState(75);
			match(DIGIT);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode ALPHA() { return getToken(glGrammarParser.ALPHA, 0); }
		public List<AlphaNumContext> alphaNum() {
			return getRuleContexts(AlphaNumContext.class);
		}
		public AlphaNumContext alphaNum(int i) {
			return getRuleContext(AlphaNumContext.class,i);
		}
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_id);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(77);
			match(ALPHA);
			setState(81);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(78);
					alphaNum();
					}
					} 
				}
				setState(83);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,2,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AlphaNumContext extends ParserRuleContext {
		public TerminalNode ALPHA() { return getToken(glGrammarParser.ALPHA, 0); }
		public TerminalNode DIGIT() { return getToken(glGrammarParser.DIGIT, 0); }
		public AlphaNumContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_alphaNum; }
	}

	public final AlphaNumContext alphaNum() throws RecognitionException {
		AlphaNumContext _localctx = new AlphaNumContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_alphaNum);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(84);
			_la = _input.LA(1);
			if ( !(_la==ALPHA || _la==DIGIT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StartContext extends ParserRuleContext {
		public StartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_start; }
	}

	public final StartContext start() throws RecognitionException {
		StartContext _localctx = new StartContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_start);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(86);
			match(T__18);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EndProgramContext extends ParserRuleContext {
		public EndProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_endProgram; }
	}

	public final EndProgramContext endProgram() throws RecognitionException {
		EndProgramContext _localctx = new EndProgramContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_endProgram);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(88);
			match(T__19);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\37]\4\2\t\2\4\3\t"+
		"\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t\13\4"+
		"\f\t\f\4\r\t\r\4\16\t\16\3\2\3\2\3\2\3\2\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3"+
		"\4\3\4\3\4\3\4\7\4,\n\4\f\4\16\4/\13\4\3\5\3\5\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6D\n\6\3\7\3\7\3\b\3\b"+
		"\3\t\3\t\3\n\3\n\3\n\3\n\3\13\3\13\7\13R\n\13\f\13\16\13U\13\13\3\f\3"+
		"\f\3\r\3\r\3\16\3\16\3\16\2\2\17\2\4\6\b\n\f\16\20\22\24\26\30\32\2\6"+
		"\3\2\3\6\3\2\n\13\3\2\f\24\3\2\27\30\2T\2\34\3\2\2\2\4#\3\2\2\2\6-\3\2"+
		"\2\2\b\60\3\2\2\2\nC\3\2\2\2\fE\3\2\2\2\16G\3\2\2\2\20I\3\2\2\2\22K\3"+
		"\2\2\2\24O\3\2\2\2\26V\3\2\2\2\30X\3\2\2\2\32Z\3\2\2\2\34\35\5\30\r\2"+
		"\35\36\5\4\3\2\36\37\7\34\2\2\37 \5\6\4\2 !\7\35\2\2!\"\5\32\16\2\"\3"+
		"\3\2\2\2#$\5\24\13\2$\5\3\2\2\2%&\5\b\5\2&\'\7\32\2\2\'(\5\n\6\2()\7\33"+
		"\2\2)*\7\36\2\2*,\3\2\2\2+%\3\2\2\2,/\3\2\2\2-+\3\2\2\2-.\3\2\2\2.\7\3"+
		"\2\2\2/-\3\2\2\2\60\61\t\2\2\2\61\t\3\2\2\2\62\63\5\16\b\2\63\64\5\24"+
		"\13\2\64\65\7\7\2\2\65\66\5\f\7\2\66\67\7\b\2\2\678\5\20\t\289\7\t\2\2"+
		"9:\5\22\n\2:D\3\2\2\2;<\5\24\13\2<=\7\t\2\2=>\5\22\n\2>D\3\2\2\2?@\5\24"+
		"\13\2@A\5\f\7\2AD\3\2\2\2BD\5\24\13\2C\62\3\2\2\2C;\3\2\2\2C?\3\2\2\2"+
		"CB\3\2\2\2D\13\3\2\2\2EF\7\30\2\2F\r\3\2\2\2GH\t\3\2\2H\17\3\2\2\2IJ\t"+
		"\4\2\2J\21\3\2\2\2KL\7\30\2\2LM\7\31\2\2MN\7\30\2\2N\23\3\2\2\2OS\7\27"+
		"\2\2PR\5\26\f\2QP\3\2\2\2RU\3\2\2\2SQ\3\2\2\2ST\3\2\2\2T\25\3\2\2\2US"+
		"\3\2\2\2VW\t\5\2\2W\27\3\2\2\2XY\7\25\2\2Y\31\3\2\2\2Z[\7\26\2\2[\33\3"+
		"\2\2\2\5-CS";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
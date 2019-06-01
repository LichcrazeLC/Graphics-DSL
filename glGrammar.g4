grammar glGrammar;

program
	: start programName LCBRACE statements RCBRACE endProgram
	;

programName
	: id
	;

statements
	: (action LPAREN argument RPAREN PANDC)*
	;


action
	: 'DRAW'
	| 'MOVE'
	| 'SCALE'
	| 'ROTATE'
	;

argument
	: shape id 'SIZE' size 'COLOR' color 'AT' position
	| id 'AT' position
	| id size
	| id
	;

size 
	: DIGIT
	;

shape
	: 'CIRCLE'
	| 'SQUARE'
	;

color
	: 'BLACK'
	| 'BLUE'
	| 'BROWN'
	| 'GREEN'
	| 'RED'
	| 'ORANGE'
	| 'PURPLE'
	| 'YELLOW'
	| 'WHITE'
	;

position
	: DIGIT COMMA DIGIT
	;

id
	: ALPHA alphaNum*
	;
ALPHA
	: ('a' .. 'z')+
	| ('A' .. 'Z')+
	;

alphaNum
	: ALPHA
	| DIGIT
	;

DIGIT
	: ('0' .. '9')+
	;

COMMA
   : ','
   ;

LPAREN
   : '('
   ;


RPAREN
   : ')'
   ;
start
    :'BEGIN'
    ;
endProgram
    :'END'
    ;
LCBRACE
    :'{'
    ;
RCBRACE
    :'}'
    ;
PANDC
    :';'
    ;
WS
   : [ \r\n\t] + -> skip
   ;
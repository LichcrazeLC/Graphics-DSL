"use strict";

var gl;
var canvas;
var program;

var i = 0;

var thetaLoc;

var objects = [];
var obj_buttons_array = [];

var obj_index = 1;
var currently_selected_index = 0;

var rotating = false;
var color = vec4(0.5, 0.5, 0.5, 1);

var globalPosition;
var globalScale;

var v_Position;
var colorPosition;

var shape_to_draw;

var global_size = 0;
var global_x = 0;
var global_y = 0;

var action;
var targetObject;

//ANTLR STUFF
const antlr4 = require('./antlr4/index');
const glGrammarLexer = require('./glGrammarLexer');
const glGrammarParser = require('./glGrammarParser');
var ChildGlGrammarListener = require('./childListener').ChildGlGrammarListener;

//INPUT CODE
const txt = require('text-loader!./code.txt');

window.onload = function init () {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) { alert("WebGL isn't available"); }

    console.log("Input code is ----> " + (txt));

    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.clearColor(1.0, 1.0, 1.0, 1.0);

    program = initShaders(gl, "vertex-shader", "fragment-shader");

    gl.useProgram(program);

    v_Position = gl.getAttribLocation(program, "v_Position");
    colorPosition = gl.getAttribLocation(program, "a_color");
    
    thetaLoc = gl.getUniformLocation(program, "theta");
    globalPosition = gl.getUniformLocation(program, "tr");
    globalScale = gl.getUniformLocation(program, "scale");

    var input = txt;   
    var chars = new antlr4.InputStream(input);
    var lexer = new glGrammarLexer.glGrammarLexer(chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new glGrammarParser.glGrammarParser(tokens);
    parser.buildParseTrees = true;   
    var tree = parser.program();   
    var customListener = new ChildGlGrammarListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(customListener, tree);

    // var sliderScalex = document.getElementById("X_scale_slider");
    // sliderScalex.oninput = function() {objects[currently_selected_index].saxis = objects[currently_selected_index].sxAxis; objects[currently_selected_index].scale = sliderScalex.value;};


    function render_scene() {

        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        for (var i = 0; i < objects.length; i++) {
            objects[i].render();
        }

        requestAnimFrame(render_scene);

    }

    render_scene();

};

function builder () {
    
    this.square = function(x, y, z, scl, id) {  

        this.translation = 0;
        this.id = id;
        
        this.center_matrix = [0, 0, 0];
        
        this.select_color = vec4(0, 0, 1, 0.1);

        this.selected = false;

        this.txAxis = 0;
        this.tyAxis = 1;
        this.tzAxis = 2;
        this.taxis = this.txAxis;

        this.theta = [0, 0, 0];
        this.xAxis = 0;
        this.yAxis = 1;
        this.zAxis = 2;
        this.axis = this.xAxis;

        this.sxAxis = 0;
        this.syAxis = 1;
        this.szAxis = 2;
        this.saxis = this.sxAxis;
        this.scale_x = 1;
        this.scale_y = 1;
        this.scale_z = 1;
        this.scale_matrix = [this.scale_x, this.scale_y, this.scale_z];
        this.scale = 1;

        this.rotationSpeed;
        
        this.rotating = false;
        this.vertices = [];
        this.colors = [];
        this.rotation = 0;
        this.translation_x = x;
        this.translation_y = y;
        this.translation_z = z;
        this.scaleparam = scl;
        this.translation_matrix = [this.translation_x, this.translation_y, this.translation_z];

        this.bottom_left_corner = vec3(this.translation_x, this.translation_y, this.translation_z);
        this.top_left_corner = vec3(this.translation_x, this.translation_y + this.scaleparam, this.translation_z);
        this.bottom_right_corner = vec3(this.translation_x + this.scaleparam, this.translation_y, this.translation_z);
        this.top_right_corner = vec3(this.translation_x + this.scaleparam, this.translation_y + this.scaleparam, this.translation_z);

        this.top_right_corner_2 = vec3(this.translation_x + this.scaleparam, this.translation_y + this.scaleparam, this.translation_z + this.scaleparam);
        this.bottom_right_corner_2 = vec3(this.translation_x + this.scaleparam, this.translation_y, this.translation_z + this.scaleparam);
        this.bottom_left_corner_2 = vec3(this.translation_x, this.translation_y, this.translation_z + this.scaleparam);
        this.top_left_corner_2 = vec3(this.translation_x, this.translation_y + this.scaleparam, this.translation_z + this.scaleparam);

        this.draw = function () {

            this.vertices.push(this.bottom_left_corner);
            this.vertices.push(this.top_left_corner);
            this.vertices.push(this.bottom_right_corner);
            this.vertices.push(this.top_left_corner);
            this.vertices.push(this.bottom_right_corner);
            this.vertices.push(this.top_right_corner);

            for (i = 0; i <= 5; i++) {
                this.colors.push(color);
            }

        }

        this.render = function () {

            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(this.vertices), gl.STATIC_DRAW);

            gl.vertexAttribPointer(v_Position, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(v_Position);

            var colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(this.colors), gl.STATIC_DRAW);

            gl.vertexAttribPointer(colorPosition, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(colorPosition);

            if (this.rotating){
               this.rotation += this.rotationSpeed;
            }   


                gl.uniform3fv(globalPosition, this.center_matrix);          

                this.theta[this.axis] = this.rotation;
                gl.uniform3fv(thetaLoc, this.theta);

                this.scale_matrix[this.saxis] = this.scale;
                gl.uniform3fv(globalScale, this.scale_matrix);

                //this.translation_matrix[this.taxis] = this.translation;
                gl.uniform3fv(globalPosition, this.translation_matrix);  

                gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);


        }
    }

    this.circle = function(x, y, z, r, id) {

        this.theta = [0, 0, 0];

        this.id = id;

        this.center_matrix = [0, 0, 0];

        this.txAxis = 0;
        this.tyAxis = 1;
        this.tzAxis = 2;
        this.taxis = this.txAxis;

        this.xAxis = 0;
        this.yAxis = 1;
        this.zAxis = 2;
        this.axis = this.xAxis;

        this.sxAxis = 0;
        this.syAxis = 1;
        this.szAxis = 2;
        this.saxis = this.sxAxis;
        this.scale_x = 1;
        this.scale_y = 1;
        this.scale_z = 1;
        this.scale_matrix = [this.scale_x, this.scale_y, this.scale_z];
        this.scale = 1;

        this.translation = 0;

        this.rotationSpeed;

        this.rotating = false;
        this.vertices = [];
        this.colors = [];
        this.rotation = 0;
        this.translation_x = x;
        this.translation_y = y;
        this.translation_z = z;
        this.translation_matrix = [this.translation_x, this.translation_y, this.translation_z];

        this.j = 0;
        this.center = vec3(this.translation_x, this.translation_y, this.translation_z);
        this.second_point = vec3(this.translation_x, this.translation_y + 0.15, this.translation_z);
        this.color = color;
        this.r = r;

        this.draw = function () {

            for (i = 0; i <= 200; i += 1) {

                this.vertices.push(this.center);
                this.vertices.push(vec3(this.r * Math.cos((i+1) * 2 * Math.PI / 200) + this.translation_x, this.r * Math.sin((i+1) * 2 * Math.PI / 200) + this.translation_y, this.translation_z));
                this.vertices.push(vec3(this.r * Math.cos(i * 2 * Math.PI / 200) + this.translation_x, this.r * Math.sin(i * 2 * Math.PI / 200) + this.translation_y, this.translation_z));
                this.colors.push(this.color);
                this.colors.push(this.color);
                this.colors.push(this.color);
            }

        }


        this.render = function () {

            var buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(this.vertices), gl.STATIC_DRAW);

            gl.vertexAttribPointer(v_Position, 3, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(v_Position);

            var colorBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, flatten(this.colors), gl.STATIC_DRAW);

            gl.vertexAttribPointer(colorPosition, 4, gl.FLOAT, false, 0, 0);
            gl.enableVertexAttribArray(colorPosition);

            if (this.rotating){
                this.rotation += this.rotationSpeed;
            }

                gl.uniform3fv(globalPosition, this.center_matrix);          

                this.theta[this.axis] = this.rotation;
                gl.uniform3fv(thetaLoc, this.theta);

                this.scale_matrix[this.saxis] = this.scale;
                gl.uniform3fv(globalScale, this.scale_matrix);

        
                //this.translation_matrix[this.taxis] = this.translation;
                gl.uniform3fv(globalPosition, this.translation_matrix);

            
            gl.drawArrays(gl.TRIANGLES, 0, this.vertices.length);

        }


    }

    this.createCircle = function (x,y,r,id) {
        var newCircle = new this.circle(0, 0, 0, r, id);
        newCircle.draw();

        newCircle.translation_matrix = [x,y,0];

        objects.push(newCircle);
    }

    this.createSquare = function (x,y,scl,id) {
        var newSquare = new this.square(0, 0, 0, scl, id);
        newSquare.draw();

        newSquare.translation_matrix = [x,y,0];
     
        objects.push(newSquare);
      
    }

}

exports.drawShape = function () {
    if (shape_to_draw == "circle"){
        new builder().createCircle(global_x, global_y, global_size, targetObject);
    }
    else {
        new builder().createSquare(global_x, global_y, global_size, targetObject); 
    }
}; 

exports.setRedColor = function ()
{
    color = new vec4(1,0,0,1);
};

exports.setGreenColor = function ()
{
    color = new vec4(0,1,0,1);
};

exports.setBlueColor = function ()
{
    color = new vec4(0,0,1,1);
};

exports.setBlackColor = function ()
{
    color = new vec4(0,0,0,1);
};

exports.setShapeSquare = function ()
{
    shape_to_draw = "square";
};

exports.setShapeCircle = function ()
{
    shape_to_draw = "circle";
};

exports.setGlobalSize = function (size)
{
    global_size = size / 4;
};

exports.setGlobalXCoord = function (x)
{
    global_x = x / 10;
};

exports.setGlobalYCoord = function (y)
{
    global_y = y / 10;
};

exports.setAction = function (act)
{
    action = act;
}

exports.getAction = function ()
{
    return action;
}

exports.setObjectId = function (id)
{
    targetObject = id;
}

exports.rotateObject = function ()
{
    objects.forEach(element => {
        if (element.id == targetObject){
            element.axis = element.zAxis;
            element.rotationSpeed = global_size;
            element.rotating = true;
        }
    });
}

exports.moveObject = function ()
{
    objects.forEach(element => {
        if (element.id == targetObject){
            element.translation_matrix = [global_x, global_y, 0];
        }
    });
}
















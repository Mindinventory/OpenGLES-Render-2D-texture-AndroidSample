precision highp float;

uniform sampler2D u_Texture;
varying vec2 v_TexCoord;

void main(void){
    gl_FragColor = texture2D(u_Texture, v_TexCoord);
}
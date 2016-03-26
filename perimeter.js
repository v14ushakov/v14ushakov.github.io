function calctriangle() 
{
document.triangle.result.value=parseInt(document.triangle.lengtha.value) + parseInt(document.triangle.lengthb.value) + parseInt(document.triangle.lengthc.value);
 }
 
 function calcparallelogram() 
{
document.parallelogram.result.value=parseInt(2 * (document.parallelogram.base.value)) + parseInt(2 * (document.parallelogram.height.value));
}

function calcrhombus() {
document.rhombus.result.value= 4 *  (document.rhombus.length.value);
 }
 
 function calctrapezium() {
document.trapezium.result.value= parseInt(document.trapezium.lengtha.value) + parseInt(document.trapezium.lengthb.value) + parseInt(document.trapezium.lengthc.value) + parseInt(document.trapezium.lengthd.value);
document.trapezium.measure.value=(document.trapezium.unit.value);
 }
 
 function calcsquare() {
document.square.result.value=4 * (document.square.length.value);
 }
 
 function calcrectangle() {
document.rectangle.result.value=parseInt(2 * (document.rectangle.base.value)) +  parseInt(2 *(document.rectangle.height.value));
 }
 
 function calcellipse() {
document.ellipse.result.value= (2  *  Math.PI * Math.sqrt((parseInt((document.ellipse.radius1.value)*(document.ellipse.radius1.value))+ parseInt((document.ellipse.radius2.value)*(document.ellipse.radius2.value)))/2)).toPrecision(6) ;
 }
 
 function calcpolygon() {
document.polygon.result.value= (document.polygon.number.value)* (document.polygon.length.value) ;
 }
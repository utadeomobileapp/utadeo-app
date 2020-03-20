var parseString = require('react-native-xml2js').parseString;
var XMLParser = require('react-xml-parser');


var url = 'http://nike.utadeo.loc:9701/uxxi-ac/actas/Pservices/MisNotas?wsdl';


var response;

export function * fuListaNotas (user) {
  //var request = new XMLHttpRequest();
  //request.open('POST', this.url', true);
  var xmlsoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:mis="http://www.ocu.es/xsd/MisNotas">'+
  '<soapenv:Header/>'+
  '<soapenv:Body>'+
  '<mis:fuListaNotasRequest>'+
  '<mis:TIPDC_USU>'+'NCE'+'</mis:TIPDC_USU>'+
  '<mis:NIF_USU>'+1019053053+'</mis:NIF_USU>'+
  '<mis:CURSO>'+'2014-1S'+'</mis:CURSO>'+
  '<mis:IDM_USU>es</mis:IDM_USU>'+
  '</mis:fuListaNotasRequest>'+
  '</soapenv:Body>'+
  '</soapenv:Envelope';

  /*  request.onreadystatechange = function () {
  if (request.readyState !== 4) {
  return;
}
if (request.status === 200) {
if(__DEV__){console.log('success ');}
var res = (request.responseText.match(/<AddResult.*[^</AddResult>]<\/AddResult>/g))+"";
parseString(res, function (err, result) {
this.responseAdd = result.AddResult
});
} else {
this.responseAdd = request.responseText
if(__DEV__){console.warn('error '+ this.responseAdd);;}
}
};
request.setRequestHeader('Content-Type','text/xml')
request.send(xmlsoap);*/
//var xml = '<mis:CONVOCATORIA VALOR="Tipo de convocatoria Única" TOTAL="2">';
//xml= xml+'</mis:CONVOCATORIA>';

var xml =
'<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">'+
'   <soap-env:Body xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">'+
'      <mis:fuListaNotasResponse TOTAL="1" xmlns:mis="http://www.ocu.es/xsd/MisNotas">'+
'         <mis:PLAN VALOR="DISEÑO INDUSTRIAL. 2009-1S" NUM="1">'+
'            <mis:CONVOCATORIA VALOR="Tipo de convocatoria Única" TOTAL="2"'+
'     <mis:ASIGNATURA NUM="1" NOMBRE="PROSPECTIVA TECNOLÓGICA" INFO="Aprobado">'+
'        <mis:CREDITOS>3.00</mis:CREDITOS>'+
'        <mis:CREDITOSECTS/>'+
'        <mis:TIPO>(T) F. Específica</mis:TIPO>'+
'        <mis:CALIFICACION>APROBADA</mis:CALIFICACION>'+
'        <mis:INCOMPATIBLE>N</mis:INCOMPATIBLE>'+
'        <mis:NOTA>4.3</mis:NOTA>'+
'        <mis:FORMULA/>'+
'        <mis:DEFINITIVA>S</mis:DEFINITIVA>'+
'        <mis:OBSERVACIONES/>'+
'        <mis:PARCIALES TOTAL=""/>'+
'     </mis:ASIGNATURA>'+
'     <mis:ASIGNATURA NUM="2" NOMBRE="PROYECTO DE GRADO" INFO="Aprobado">'+
'        <mis:CREDITOS>5.00</mis:CREDITOS>'+
'        <mis:CREDITOSECTS/>'+
'        <mis:TIPO>(P) Opción de grado</mis:TIPO>'+
'        <mis:CALIFICACION>APROBADA</mis:CALIFICACION>'+
'        <mis:INCOMPATIBLE>N</mis:INCOMPATIBLE>'+
'        <mis:NOTA>4.0</mis:NOTA>'+
'        <mis:FORMULA/>'+
'        <mis:DEFINITIVA>S</mis:DEFINITIVA>'+
'        <mis:OBSERVACIONES/>'+
'        <mis:PARCIALES TOTAL=""/>'+
'     </mis:ASIGNATURA>'+
'</mis:CONVOCATORIA>'+
'</mis:PLAN>'+
'</mis:fuListaNotasResponse>'+
'</soap-env:Body>'+
'</soapenv:Envelope>';
var res = (xml.match(/\mis:CONVOCATORIA+[^\>]+\>/g))+"";
res = res.match(/\TOTAL="([0-9]{0,2})"/g)+"";
res = res.match(/([0-9]{0,1})?\d/g,":")+"";
var array = xml.match(/<mis:ASIGNATURA.*[^</mis:ASIGNATURA>]<\/mis:ASIGNATURA>/g)+"";
var resxml = array.replace(/\mis:/g, " ");
console.log(resxml);
for(var i=0;i<array.length;i++){
//console.log(array[i]);
}
//  '/\mis:CONVOCATORIA+[^\>]+\>/g'
//  '/\TOTAL="[0-9]">/g'
//var resxml = xml.replace(/\mis:/g, " ");
/*parseString(resxml, function (err, result) {
  this.response = result
  console.log(result);
});*/
var parser = new XMLParser().parseFromString(resxml);    // Assume xmlText contains the example XML
console.log(parser.getElementsByTagName('CREDITOS')[0].value);


}

export function * waitUntilSoapCallResponse(){
  return this.responseAdd
}

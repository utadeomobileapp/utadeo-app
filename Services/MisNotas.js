import Config from '../Config/DebugConfig'

"use strict";

var soap = require('strong-soap').soap;
// wsdl of the web service this client is going to invoke. For local wsdl you can use, url = './wsdls/MisNotas.wsdl'
var url;
// useTestWDSL is for DEV and QA environment PRODUCTION URL is missing
if (Config.useTestWDSL) {
url = 'http://10.2.4.2:9701/uxxi-ac/actas/Pservices/MisNotas?wsdl';
}
else{
url = 'https://UXXI production server /uxxi-ac/actas/Pservices/MisNotas?wsdl';
}


var requestArgs = {
  symbol: 'IBM'
};

var options = {};
soap.createClient(url, options, function(err, client) {
  var method = client['StockQuote']['StockQuoteSoap']['GetQuote'];
  method(requestArgs, function(err, result, envelope, soapHeader) {
    //response envelope
    console.log('Response Envelope: \n' + envelope);
    //'result' is the response body
    console.log('Result: \n' + JSON.stringify(result));
  });
});

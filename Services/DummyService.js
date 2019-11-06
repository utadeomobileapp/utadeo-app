var parseString = require('react-native-xml2js').parseString;

var url = 'http://www.dneonline.com/calculator.asmx?wsdl';

var responseAdd;

export function * add (numbers) {
  var request = new XMLHttpRequest();
  request.open('POST', 'http://www.dneonline.com/calculator.asmx', true);
  var xmlsoap = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">'+
  '<soapenv:Header/>'+
  '<soapenv:Body>'+
  '<tem:Add>'+
  '<tem:intA>'+numbers[0]+'</tem:intA>'+
  '<tem:intB>'+numbers[1]+'</tem:intB>'+
  '</tem:Add>'+
  '</soapenv:Body>'+
  '</soapenv:Envelope>';
  request.onreadystatechange = function () {
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
  request.send(xmlsoap);
}

export function * waitUntilSoapCallResponse(){
  return this.responseAdd
}


export function * divide (requestArgs) {
  return "divided"
}
export function * multiply (requestArgs) {
  return "multiplied"
}
export function * subtract (requestArgs) {
  return "subtracted"
}

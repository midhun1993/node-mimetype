const readFileSync = require('fs').readFileSync;
const signatures = require('./file-signatures.json');
module.exports = async function (_fp, _returnPossibleExtensionsList = false) {
  const file = readFileSync(_fp);
  const hexToMatch = file.toString('hex').substring(0,99).toLocaleUpperCase();
  let _fInfo = null;
  let hexAddition = '';
  let _sig = signatures;
  while(hexToMatch.length > hexAddition.length ){
      let _filteredSig = _sig.filter((item) =>{ 
          return item.signature.match(new RegExp(hexAddition));
      });
      if(_filteredSig.length == 1){
        _fInfo = _filteredSig[0]['detail'];
        break;
      }
      _sig = _filteredSig;
      hexAddition = hexAddition+hexToMatch.substring(hexAddition.length, hexAddition.length+1);
  }
  if(!_fInfo){
    return _fInfo;
  }
  return _returnPossibleExtensionsList ? _fInfo : _fInfo[0];
}

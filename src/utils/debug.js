import $global from './global';

$global.debugAdd = function debugAdd(key, memory) {
  $global.debugAddSave = $global.debugAddSave || {};
  $global.debugAddSave[key] = memory;
};

function globalAdd(key, memory) {
  $global[key] = memory;
};
$global.globalAdd = globalAdd;

export default debugAdd;

export {
  globalAdd,
  debugAdd,
};

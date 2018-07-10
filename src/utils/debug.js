import $global from './global';

function debugAdd(key, memory) {
  $global.debugAddSave = $global.debugAddSave || {};
  $global.debugAddSave[key] = memory;
};
$global.debugAdd = debugAdd;

function globalAdd(key, memory) {
  $global[key] = memory;
};
$global.globalAdd = globalAdd;

export default debugAdd;

export {
  globalAdd,
  debugAdd,
};

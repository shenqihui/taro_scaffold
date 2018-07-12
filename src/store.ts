// import { globalAdd } from './utils/debug';
import * as dvaCore from './dva-core';

const dvaApp = dvaCore.create();
/* eslint-disable import/newline-after-import */
dvaApp.model(require('./models/student').default);
/* eslint-enable */
dvaApp.start();
const store = dvaApp._store;

export default store;

import { debugAdd, globalAdd } from './utils/debug';
const weappx = require('weappx');

const app = weappx();

console.log("require('./models/student').default", require('./models/student').default);

app.model(require('./models/student').default);

const store = app.start();

globalAdd('weappx', app);
export default app;
export { store };

import Taro, { Component } from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';

import Index from './pages/index';
import configStore from './store';
import $global from './utils/global';
import { debugAdd } from './utils/debug';

import './app.scss';

$global.Taro = Taro;

const store = configStore();

$global.store = store;

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
    },
  }

  constructor(props) {
    super(props);
    debugAdd('app', this);
  }

  componentDidMount = () => {}

  componentDidShow = () => {}

  componentDidHide = () => {}

  componentCatchError = () => {}

  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById('app'));

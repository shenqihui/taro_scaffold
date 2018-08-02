import Taro from '@tarojs/taro';
import '@tarojs/async-await';
import { Provider } from '@tarojs/redux';

import { debugAdd, globalAdd } from './utils/debug';
import Index from './pages/index';
import store from './store';
import Services from './services';
import User from './utils/user';

import './app.scss';

class Component extends Taro.Component {
  config = {
    pages: [
      'pages/index/index',
      // 雪碧图，图片的处理
      'pages/img/index',
      'pages/dva/index',
      'pages/wxs/index',
      'pages/component/index',
      'pages/iview/index',
      'pages/jump/index',
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

Taro.render(<Component />, document.getElementById('app'));

globalAdd('Services', Services);
globalAdd('Taro', Taro);
globalAdd('store', store);
globalAdd('User', User);

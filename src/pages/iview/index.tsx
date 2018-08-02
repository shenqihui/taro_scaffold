import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

class Component extends Taro.Component {
  config = {
    navigationBarTitleText: 'iview 第三方组件例子',
    "usingComponents": {
       "IAvatar": '../../iview-weapp/avatar/index',
       "i-button": "../../iview-weapp/button/index",
    }
  }

  constructor(props) {
    super(props);
    debugAdd('iview', this);
    console.log('暂时不可用');
    this.state = {};
  }

  componentDidMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props, nextProps);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render() {
    return (<View>
      <View>iView 组件</View>
      <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
      <IAvatar size="small">梁山东省三</IAvatar>
      <View className="division">---</View>

    </View>);
  }
}

export default Component;

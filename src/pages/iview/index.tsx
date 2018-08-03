import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

export default class PageComponent extends Taro.Component {
  config = {
    navigationBarTitleText: 'iview 第三方组件例子',
    usingComponents: {
       'i-avatar': '../../iview-weapp/avatar/index',
       'i-button': '../../iview-weapp/button/index',
    }
  }

  constructor(props) {
    super(props);
    debugAdd('iview', this);
    console.log('第三方组件，暂时不可用');
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

  handleClick = () => {
    console.log('handleClick');
  }

  render() {
    return (<View>
      <View>iView 组件</View>
      <i-avatar size="small">梁山东省三</i-avatar>
      <i-button type="primary" onClick={this.handleClick}>这是一个按钮</i-button>
      <View className="division">---</View>

    </View>);
  }
}

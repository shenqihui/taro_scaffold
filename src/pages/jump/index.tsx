import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

export default class PageComponent extends Taro.Component {
  config = {
    navigationBarTitleText: '跳转的页面',
  }

  constructor(props) {
    super(props);
    debugAdd('jump', this);
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

  jump = () => {
    Taro.navigateBack({
      delta: '1',
    });
  }

  render() {
    return (<View>
      <View className="" onClick={this.jump}>跳转的页面，点击跳回</View>
    </View>);
  }
}

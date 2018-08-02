// import 的骚操作
import * as moment from 'moment';
import * as get from 'lodash/get';

import Taro from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

class Component extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  constructor(props) {
    super(props);
    debugAdd('index', this);
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
    Taro.navigateTo({
      url: '/pages/jump/index',
    });
  }

  render() {
    return (<View>
      <View url="/pages/component/index">点击一下例子，进行查看 </View>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/component/index">组件引用 </Navigator>
      <View className="division">---</View>

      <View className="link" onClick={this.jump}>点击后 api 跳转</View>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/img/index">图片/雪碧图 </Navigator>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/dva/index">dva redux</Navigator>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/iview/index">iview 第三方组件(暂未通)</Navigator>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/wxs/index">WXS (不建议使用)</Navigator>
      <View className="division">---</View>
    </View>);
  }
}

export default Component;

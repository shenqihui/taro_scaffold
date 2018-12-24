import Taro from '@tarojs/taro';
import { View, Text, Navigator } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

export default class PageComponent extends Taro.Component {
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

  // renderOtherJsx = () => {
  //   let data = '';
  //   try {
  //     data = (<View>
  //       <Text>这是render外的 jsx</Text>
  //     </View>);
  //   }
  //   catch (error) {
  //     data = '暂时不支持';
  //   }
  //   return data;
  // }

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

      <Navigator className="link" url="/pages/iview/index">iview 第三方组件</Navigator>
      <View className="division">---</View>

      <Navigator className="link" url="/pages/wxs/index">WXS (不建议使用)</Navigator>
      <View className="division">---</View>

      <View>render 外部的 jsx 渲染</View>
      {/*{ this.renderOtherJsx() }*/}
      <View className="division">---</View>
    </View>);
  }
}

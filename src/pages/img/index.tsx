import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';

import { debugAdd } from '../../utils/debug';

import './index.scss';

export default class PageComponent extends Taro.Component {
  config = {
    navigationBarTitleText: '图片/雪碧图',
  }

  constructor(props) {
    super(props);
    debugAdd('img', this);
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
      <View className="">图片</View>
      <Image style={{ width: '22px', height: '22px' }} src={require('../../images/camera.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/checked_cyan.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/circle_green.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/exclamation_circle.png')} />

      <View className="division">---</View>

      <View className="">雪碧图</View>
      <View className="sp sp-camera" />
      <View className="sp sp-checked_cyan" />
      <View className="sp sp-circle_green" />
      <View className="sp sp-exclamation_circle" />

    </View>);
  }
}

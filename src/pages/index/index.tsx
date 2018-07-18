import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { debugAdd } from '../../utils/debug';

import './index.scss';

@connect((state) => {
  return {
    studentState: state.student,
    studentStateLoading: !!state.loading.models.student,
  };
})
class Component extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  constructor(props) {
    super(props);
    debugAdd('index', this);
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.props.dispatch({
        type: 'student/list',
        payload: {},
      });
    }, 3000);
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

      <View>---</View>

      <View className="">雪碧图</View>
      <View className="sp sp-camera" />
      <View className="sp sp-checked_cyan" />
      <View className="sp sp-circle_green" />
      <View className="sp sp-exclamation_circle" />

      <View>---</View>

      <View>componentDidMount 后三秒会调用更新学生列表的请求。</View>

      <View>---</View>
      <View>studentStateLoading: { JSON.stringify(this.props.studentStateLoading) }</View>
      <View className='index'>
        { JSON.stringify(this.props.studentState) }
      </View>
    </View>);
  }
}

export default Component;

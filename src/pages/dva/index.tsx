import Taro from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { debugAdd } from '../../utils/debug';

import './index.scss';

@connect((state) => {
  return {
    studentState: state.student,
    studentStateLoading: !!state.loading.models.student,
  };
})
export default class PageComponent extends Taro.Component {
  config = {
    navigationBarTitleText: 'dva 例子',
  }

  constructor(props) {
    super(props);
    debugAdd('dva', this);
    this.state = {};
  }

  componentDidMount = () => {
    setTimeout(() => {
      console.log('开始数据获取')
      this.props.dispatch({
        type: 'student/list',
        payload: {},
      }).then((res) => {
        console.log('数据获取成功', res);
      }).catch((rej) => {
        console.log('数据获取失败', rej);
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
      <View>componentDidMount 后三秒会调用更新学生列表的请求。</View>
      <View className="division">---</View>
      <View className="">dva redux</View>
      <View className="division">---</View>
      <View>studentStateLoading: { JSON.stringify(this.props.studentStateLoading) }</View>
      <View className="division">---</View>
      <View className='index'>
        { JSON.stringify(this.props.studentState) }
      </View>
    </View>);
  }
}


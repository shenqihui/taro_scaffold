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
class Component extends Taro.Component {
  config = {
    navigationBarTitleText: 'dva 例子',
  }

  constructor(props) {
    super(props);
    debugAdd('dva', this);
    this.state = {
    };
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

export default Component;

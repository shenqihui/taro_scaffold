import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
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

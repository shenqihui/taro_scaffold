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

export default Component;

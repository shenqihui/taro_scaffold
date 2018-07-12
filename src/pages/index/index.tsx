import Taro from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import store from '../../store';

import { debugAdd } from '../../utils/debug';

import './index.scss';

@connect((state) => {
  return {
    studentState: state.student,
  };
})
class Component extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
  }

  constructor(props) {
    super(props);
    debugAdd('index', this);
    this.store = store;
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (<View>
      <View>试下调用： debugAddSave.index.store.dispatcher.student.addTotal()</View>

      <View>---</View>

      <View className='index'>
        { JSON.stringify(this.props.studentState) }
      </View>
    </View>);
  }
}

export default Component;

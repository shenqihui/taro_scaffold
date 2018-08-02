// import 的骚操作
import * as moment from 'moment';
import * as get from 'lodash/get';

import Taro from '@tarojs/taro';
import { View, Navigator } from '@tarojs/components';

// import IAvatar from '../../iview-weapp/avatar'

import { debugAdd } from '../../utils/debug';

import './index.scss';

class Component extends Taro.Component {
  config = {
    navigationBarTitleText: '首页',
    // "usingComponents": {
    //    "IAvatar": IAvatar,
    // }
  }

  constructor(props) {
    super(props);
    debugAdd('iview', this);
    console.log('暂时不可用');
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

      <View>iView 组件</View>
      {/*<IAvatar size="small">梁</IAvatar>*/}
      <View className="division">---</View>

    </View>);
  }
}

export default Component;

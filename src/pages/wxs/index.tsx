// import 的骚操作
import * as moment from 'moment';
import * as get from 'lodash/get';

import Taro from '@tarojs/taro';
import { View, Image, Navigator } from '@tarojs/components';
import A from '../../components/a';
import B from '../../components/b';

import { debugAdd } from '../../utils/debug';

import './index.scss';

class Component extends Taro.Component {
  config = {
    navigationBarTitleText: 'wxs 例子',
  }

  constructor(props) {
    super(props);
    debugAdd('wxs', this);
    this.state = {
      age: 153137899,
    };
  }

  componentDidMount = () => {
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props, nextProps);
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  age = (second) => {
    return moment().year() - moment.unix(this.state.age).year();
  }

  render() {
    return (<View>
      <View className="">WXS</View>
      <View>jsx 中，不建议使用 wxs 了，直接使用内部函数即可。
      </View>
      <View className="division">---</View>
      <View>如果一定要用，看这个东西下面的 data-age 属性，不过要先把 wxs 文件拷贝到 dist 目录，解除下一行的注释(目前 taro 不自动输出过去)</View>
      {/*<wxs src="../../wxs/index.wxs" module="filters" />*/}
      <View className="division">---</View>
      <View>get: { get(this.state, 'age') }</View>
      <View data-age="{{ filters.age(153137899) }}">{ this.age(this.state.age) } </View>

    </View>);
  }
}

export default Component;

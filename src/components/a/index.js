import Taro from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';

import { debugAdd } from '../../utils/debug';

// 定义组件的时候，这个组件的名字必须跟使用的地方的一致。
// 如 import A from '../../components/a';
// 使用 <A />
export default class A extends Taro.Component {
  constructor(props) {
    super(props);
    debugAdd('componentsA', this);
  }

  componentWillMount () {
    // console.log(this.$router.params)
  }

  componentDidMount () {
    console.log(this.props);
  }

  componentWillReceiveProps = (nextProps) => {
    console.log(this.props);
    console.log(nextProps);
  }

  componentWillUnmount = () => { }

  componentDidShow () { }

  componentDidHide () { }

  onClickHandler () {
    this.props.onClick();
  }

  render () {
    return (
      <View className='a'>
        <Button onClick={this.onClickHandler.bind(this)}>点我</Button>
        <Text>a component {this.props.t}</Text>
      </View>
    );
  }
}

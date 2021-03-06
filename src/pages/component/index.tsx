// import 的骚操作
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import A from '../../components/a';
import B from '../../components/b';

import { debugAdd } from '../../utils/debug';

import './index.scss';

class PageComponent extends Taro.Component {
  config = {
    navigationBarTitleText: 'component 例子',
  }

  constructor(props) {
    super(props);
    debugAdd('component', this);
    this.state = {
      x: [1, 2],
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

  componentCallBack = () => {
    console.log('componentCallBack');
  }

  render() {
    return (<View>
      <View>组件引用</View>
      <View>使用文档查看 '../../components/a'</View>
      <View>定义组件的时候，组件名字必须和引用一直</View>
      <View className="division">---</View>
      {
        this.state.x.map((item, index) => {
          return <div key={index}>
            <A key={index} t={item} onClick={this.componentCallBack} />
            <View className="division">---</View>
          </div>
         })
      }
      <B onClick={this.componentCallBack} />
      <View className="division">---</View>
      <B onClick={this.componentCallBack} />
      <View className="division">---</View>

    </View>);
  }
}

export default PageComponent;

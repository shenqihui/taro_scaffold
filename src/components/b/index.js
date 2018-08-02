import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

export default class Component extends Taro.Component {
  onClickHandler = () => {
    this.props.onClick();
  }

  render () {
    return (
      <View className='b' onClick={this.onClickHandler.bind(this)}>
        <Text>b component</Text>
      </View>
    );
  }
}

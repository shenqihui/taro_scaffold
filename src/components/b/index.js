import Taro from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import './index.scss';

import { debugAdd } from '../../utils/debug';

export default class B extends Taro.Component {
  constructor(props) {
    super(props);
    debugAdd('componentsB', this);
  }

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

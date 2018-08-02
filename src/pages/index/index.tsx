// import 的骚操作
import * as moment from 'moment';
import * as get from 'lodash/get';

import Taro from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { connect } from '@tarojs/redux';
// import A from '../../components/A/index';
import B from '../../components/B/index';

// import IAvatar from '../../iview-weapp/avatar'

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
    this.state = {
      age: 153137899,
      x: [1, 2],
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

  age = (second) => {
    return moment().year() - moment.unix(this.state.age).year();
  }

  jump = () => {
    Taro.navigateTo({
      url: '/pages/jump/index',
    });
  }

  componentCallBack = () => {
    console.log('componentCallBack');
  }

  render() {
    return (<View>
      <View>组件引用</View>
      {/*{
        this.state.x.map((item, index) => {
          return <A key={index} t={item} onClick={this.componentCallBack} />
         })
      }*/}
      <B onClick={this.componentCallBack} />
      <B onClick={this.componentCallBack} />

      <View>---</View>

      <View className="" onClick={this.jump}>点击跳转</View>
      <View>---</View>

      <View className="">图片</View>
      <Image style={{ width: '22px', height: '22px' }} src={require('../../images/camera.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/checked_cyan.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/circle_green.png')} />
      <Image style={{ width: '19px', height: '19px' }} src={require('../../images/exclamation_circle.png')} />

      <View>---</View>

      <View className="">雪碧图</View>
      <View className="sp sp-camera" />
      <View className="sp sp-checked_cyan" />
      <View className="sp sp-circle_green" />
      <View className="sp sp-exclamation_circle" />

      <View>---</View>

      <View>componentDidMount 后三秒会调用更新学生列表的请求。</View>
      <View className="">dva redux</View>
      <View>studentStateLoading: { JSON.stringify(this.props.studentStateLoading) }</View>
      <View className='index'>
        { JSON.stringify(this.props.studentState) }
      </View>

      <View>---</View>

      {
         /*
          <View>iView 组件</View>
          <IAvatar size="small">梁</IAvatar>
          <View>---</View>
        */
      }

      <View className="">WXS</View>
      <View>jsx 中，不建议使用 wxs 了，直接使用内部函数即可。
      </View>
      <View>如果一定要用，看这个东西下面的 data-age 属性，不过要先把 wxs 文件拷贝到 dist 目录，解除下一行的注释(目前 taro 不自动输出过去)</View>
      {/*<wxs src="../../wxs/index.wxs" module="filters" />*/}
      <View>get: { get(this.state, 'age') }</View>
      <View data-age="{{ filters.age(153137899) }}">{ this.age(this.state.age) } </View>
      <View>---</View>

    </View>);
  }
}

export default Component;

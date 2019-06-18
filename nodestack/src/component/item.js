import React,{Component} from 'react';
//Item组件负责显示单个的信息
class Item extends Component{
    render(){
      return (
        <p>用户id:{this.props.id},用户名称:{this.props.name} &nbsp;<a href={`/${this.props.id}`}>查看详情</a></p>
      )
    }
}
export default Item;


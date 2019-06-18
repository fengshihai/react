import React,{Component} from 'react';
import Item from './item'
//List组件负责显示用户的列表信息,组合多个Item组件
class List extends Component{
    constructor(...args){
        super(...args)
        this.state = {
            items:[]
        }
    }
    componentDidMount(){
        fetch("http://localhost:8080/list")
            .then(response=>{return response.json()})
            .then(data=>{
                //修改状态
                this.setState({
                    items:data 
                })
            })
    }
    render(){
      let items = this.state.items.map( (item,index)=>{
          return <Item id={item.id} name={item.name} key={index} />
      } ) 
      return (
        <div>
            {items}
        </div>
      )
    }
}
export default List;


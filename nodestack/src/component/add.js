import React,{Component} from 'react';
class Add extends Component{
    addUser(){
        let name = this.refs["name"].value 
        let age = this.refs["age"].value 
        fetch("http://localhost:8080/add",{
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            mode:"cors",
            //post的数据
            body:`name=${name}&age=${age}`
      })
      .then((response)=>{ 
          return response.json().then(json=>({json,response}));
      })
      .then(({json,response})=>{
              window.location.href="http://localhost:3000"
      })
    }
    render(){
      return (
        <div>
        	姓名:<input type="text" ref="name" />
            年龄:<input type="text" ref="age" />
            <button type="submit" onClick={this.addUser.bind(this)}>submit</button>
        </div>
      )
    }
}
export default Add;


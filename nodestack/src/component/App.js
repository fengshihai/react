import React,{Component} from 'react';
import List from './list'
import Add from './add'
//BrowserRouter : 路由组件的容器
//Switch : 用于判断路由的请求
//Route : 路由要指向组件
import {BrowserRouter,Switch,Route} from 'react-router-dom'
class App extends Component{
	render(){
		return(
			<BrowserRouter>
				<div>
			        <a href="/add">添加用户</a>&nbsp; <a href="/">查看用户列表</a><br /><br />
			        <Switch>
			            <Route path="/" exact component={List}></Route>
			            <Route path="/add" exact component={Add}></Route>
			        </Switch>
			    </div>
			</BrowserRouter>
		)
	}
}
export default App;

# React 

React是一个js开源框架，可以运用在客户端(前端)也运行在服务器端(next.js).

React的组成主要包括三个部分:

* react.min.js --- react的核心库

* react-dom.min.js --- react用于操作前端DOM渲染的核心库

* babel.min.js     --- 类似html的的语法名为jsx的解析器


# React的安装方式

方式1：引入库文件的方式,一般学习时使用

```html
<script src="./react.min.js"></script>
<script src="./react-dom.min.js"></script>
<script src="./babel.min.js"></script>
<script type="text/babel">
    .....
</script>
```


方式2：使用create-react-app脚手架创建和整合项目(以太坊,php,nodejs,react组件)

> npm i create-react-app -g 


# React的组件定义方式

```javascript
class Test extends React.Component{

    render(){
        return (
            <div>
                    <p>xxxx</p>
                    <p>xxxx</p>
            </div>
        )
    }
}
```

定义react的组件使用class声明,类名必须首字母大写.

在组件内render方法必须定义.

render方法必须具备return的返回值.

jsx当中标签必须是闭合的<Test></Test>等同于<Test />


# React中的属性

在react中可以通过this.props来对属性进行访问，this.props来自于父类React.Component,其内部实现原理与constructor函数有关

```
class Test extends React.Component{
    constructor(...args){
        super(...args) 
        //父类的内容实现如下代码
        this.props = args[0]  //args[0]存储组件中出入的属性对象
    }

    render(){
        .....
    }
}
```

`this.props`所有的属性都是只读，无法发生修改也无法实现组件渲染,在react当中只有`this.state`被修改时可以发生渲染.


# React其他重要知识点

1.React的传值方式有{}和""

2.{}的传值方式可以实现语句和表达式的传值

3.className接收的传值方式是`{数组.join(" ")}`

4.style的接收传值方式是`{ 对象 }`

5.触发事件必须使用`this.eventName.bind(this,参数列表)`


# React的生命周期

React的生命周期是通过触发事件来表现的,这些事件函数都来自于React.Component这个类,重要的函数如下:

componentWillMount --- 当render函数被触发之前调用,我通过不使用这个事件而是使用constructor来替代

componentDidMount  --- 当render函数完成渲染后触发

componentWillUnmount --- 当组件被删除时候触发,`ReactDOM.unmountComponentAtNode(根节点容器)`配合使用

componentWillUpdate --- 当状态即将发生改变时触发,在this.setState之前发生

componentDidUpdate --- 当this.setState完成后发生

实际应用场景

```javascript
class List extends React.Component{
       
    constructor(...args){
        super(...args)
　　　　　console.log("Constructor..")
        this.state = {
            now:0
        }
    }


    componentDidMount(){
        console.log("componentDidMount..")
        
        this.dt = setInterval(() => {
            console.log("发起一个node的api请求")
        }, 2000);

        setTimeout(() => {
            ReactDOM.unmountComponentAtNode( document.getElementById("root") )
        }, 5000);
    }


    componentWillUnmount(){
        console.log("componentWillUnmount on delete")
        clearInterval(this.dt)
    }

    render(){
        console.log("render..")
        return "life"
    }

}
```
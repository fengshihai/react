import React from 'react';
import ReactDOM from 'react-dom';
//导入自定义组件
import App from './component/App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

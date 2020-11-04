//grandson.js 孙类
import React from 'react';
import { Consumer } from "./App.js";//引入父组件的Consumer容器
function Grandson(props) {
    return (
         //Consumer容器,可以拿到上文传递下来的name属性,并可以展示对应的值
         //孙组件可以不同过子组件直接拿到父组件的age属性的值
        <Consumer>
            {(value) =>
                   <div style={{border:'1px solid green',width:'60%',margin:'50px auto',textAlign:'center'}}>
                   <p>孙组件:{value.name}:{value.age}</p>
               </div>
            }
        </Consumer>
    );
}
export default Grandson;
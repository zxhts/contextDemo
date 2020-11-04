
// // import ReactDOM from 'react-dom';
// import React from 'react';
// import PropTypes from 'prop-types';

// // Children component
// class Children extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     console.log(context);
//     this.state = {
//       name: this.context.name,
//       gender: this.context.gender
//     };
//   }

//   render() {
//     return(
//       <ul>
//         <li>
//           {`child context is: ${this.context.age}`} 
//         </li>
//         <li>
//           {`state from context: ${this.state.name}`} 
//         </li>
//         <li>
//           {`print age: ${this.context.print(this.context.age)}`} 
//         </li>
//         <li>
//           {`state from context: ${this.state.gender}`} 
//         </li>
//       </ul>
//     );
//   }
// }

// Children.contextTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number,
//   print: PropTypes.func,
//   gender: PropTypes.string
// };


// // Parent component
// class Parent extends React.Component {
//   constructor(props,context){
//     super(props,context);
//     console.log(context);
//   }
//   getChildContext() {
//     return {
//       // name: 'mars',
//       age: 18
//     };
//   }

//   render() {
//     return (
//       <div>
//         {`from App component: ${this.context.name}`} 
//         <div>
//           {/* {this.props.children} */}
//           <Children/>
//         </div>
//       </div>
//     );
//   }
// }

// Parent.contextTypes = {
//   name: PropTypes.string,
//   // gender: PropTypes.string
// };
// Parent.childContextTypes = {
//   age: PropTypes.number,
//   name: PropTypes.string,
//   // gender: PropTypes.string,
// };

// // App component
// class App extends React.Component {
//   getChildContext() {
//     return { 
//         name: 'mars',
//         print: (m) => m,
//         gender: '男'
//      };
//   }

//   render() {
//     return (
//       <Parent>
//         <Children />
//       </Parent>
//     );
//   }
// }

// App.childContextTypes = {
//   name: PropTypes.string,
//   print: PropTypes.func,
//   gender: PropTypes.string
// };

//export default App;

import React from 'react';
import Son from './son';//引入子组件
// 创建一个 theme Context,
export const {Provider,Consumer} = React.createContext("默认名称");
export default class App extends React.Component {
    render() {
        // let name ="小人头";
        // let age = 18;

        let value = {
           name: "小人头",
           age: 18
        }
        return (
            //Provider共享容器 接收一个name属性
            <Provider value={value}>
                <div style={{border:'1px solid red',width:'30%',margin:'50px auto',textAlign:'center'}}>
                    <p>父组件定义的值:{value.name}</p>
                    <Son />
                </div>
            </Provider>
        );
    }
}




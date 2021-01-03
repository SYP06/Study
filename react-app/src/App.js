import React from 'react'
import './App.css'
import { Link, Route } from 'react-router-dom'

import Home from './component/Home'
import About from './component/About'
import Course from './component/Course'
import Details from './component/Details'






function App() {
  return (
    <div className="App">
      <Link to='/'>首页</Link>|
      <Link to='/course'>课程</Link>|
      {/* <Link to='/about'>关于我们</Link>| */}
      <Link to={{
        pathname:'/about',
        search:'id=666&age=18',
        hash:'lalal',
        // 如果用hashrouter,页面刷新丢失
        state:{
          name:'lisi',
          age:19
        },
        // 页面刷新，参数丢失
        query:{
          name:'wangwu',
          age:20
        }
      }}>关于我们</Link>|


      {/* exact 精确匹配 */}
      <Route path='/' exact component={Home} />
      <Route path='/course/' component={Course} />
      <Route path='/about' component={About} />
      <Route path='/course/:id' component={Details} />


      {/*仅会渲染他所包裹的route中最先匹配到的那个页面，所以一定要注意顺序 */}
      {/* <Switch>
        <Route path='/' component={Home} />
        <Route path='/course' component={Course} />
        <Route path='/about' component={About} />
      </Switch> */}

    </div>
  );
}

export default App;

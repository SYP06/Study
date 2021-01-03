import React, { Component } from 'react'

export default class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      data:{}
    }
  }
  
  shouldComponentUpdate(nextProps,nextState){
    return nextProps.match.params.id !== this.props.match.params.id || nextState.data.id !== this.state.data.id
  }

  componentDidUpdate() {
    fetch(`/data/course${this.props.match.params.id}.json`)
      .then(response => {
        return response.json()
      })
      .then(res => {
        console.log(res);
        if (res.errno * 1 === 0) {
          this.setState({
            data: res.data
          })
        } else {
          alert(res.errmsg)
        }
      }).catch(err => {
        console.log(err);
      })
  }

  
  componentDidMount(){
    fetch(`/data/course${this.props.match.params.id}.json`)
    .then(response=>{
      return response.json()
    })
    .then(res=>{
      console.log(res);
      if(res.errno * 1 ===0) {
        this.setState({
          data:res.data
        })
      }else{
        alert(res.errmsg)
      }
    }).catch(err=>{
      console.log(err);
    })
  }

  // 静态方法，存在异步问题，promise
  // static getDerivedStateFromProps(nextProps, nextState){}


  render() {
    // let {params} = this.props.match
    // console.log(params);
    let {data} = this.state
    return (
      <div>
        <h2>课程详情</h2>
        <p>课程id:{data.id}</p>
        <p>课程名称:{data.title}</p>
        <p>授课教师:{data.teacher}</p>
        <p>课程简介:{data.intro}</p>


      </div>
    )
  }
}

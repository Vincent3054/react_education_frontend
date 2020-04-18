import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Studenlist.css';

export default class Studenlist extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    text: "請填寫內容...",
    i: "",
    showme: [],


  }

  componentDidMount() {
    this.setState({
      showme: JSON.parse(localStorage.getItem("userinfo"))
    }) //

  }
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })

  }
  handelDel = (e) => {
    console.log(e, 28)
    const {showme}=this.state;
    const data=showme.filter((item,index,array)=>{
      
      return index !== e ;
  })

  localStorage.setItem("userinfo",JSON.stringify(data))
  this.setState({
    showme:data
  })
  }
  //handSet = () => {
  // const { content } = this.state;
  // const { text } = this.state;
  // const { id } = this.state
  // this.setState({
  //   content: text
  //  })

  //}


  render() {
    const { showme } = this.state;
    const labeltext = showme.map((item, index, array) => {
      return <ul key={index}>
        <li>{index}</li>
        <li><input type="checkbox" aria-label="Checkbox for following text input" /></li>
        <li className="content"><span>{item}</span></li>
        <li>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button type="button" className="btn btn-outline-primary"><Link to={`/Edit/${index}`}>編輯</Link></button>
            <button type="button" className="btn btn-outline-primary" onClick={() => this.handelDel(index)}>刪除</button>
          </div>
        </li>
      </ul>

    })
    return (
      <div>

        <div className="title">
          <strong><p>To-Do List</p></strong>
        </div>
        <div className="body">


          <div className="add">


            <Link to={``}><button type="button" className="btn btn-primary btn-lg btn-block btn-width" >新增</button></Link>
          </div>

          <div className="list">
            {labeltext}
          </div>
        </div>
      </div>
    );
  }
}


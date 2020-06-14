import React, { Component } from "react";
import axios from "axios";
import "../../mixin/main.css";
import "./Register.css";
export default class StudentRegister extends Component {
  state = {
    Account: "",
    Name: "",
    Password: "",
    PasswordCheck: "",
    Email: "",
    Phone: "",
    Sex: "",
    Class_Id: "",
    Grage: "",
    Role_Id: "R004",
    //班級資料
    classlist:[],
  };
  componentDidMount(){
    axios.get(`http://studytutor_backend.hsc.nutc.edu.tw/api/ClassStudent`)
    .then((res) => {
      // console.log(res.data.Data.DataList);
      const datalist = res.data.Data.DataList;
      this.setState({
        classlist: datalist
      })
    }).catch((err) => {
      console.error({ err }, 90);
    })
  }
  handleSubmit = (e) => {
    const {
      Account,
      Name,
      Password,
      PasswordCheck,
      Email,
      Phone,
      Sex,
      Class_Id,
      Grage,
      Role_Id,
    } = this.state;
    const payload = {
      Account,
      Password,
      PasswordCheck,
      Name,
      Email,
      Phone,
      Grage,
      Class_Id,
      Sex,
      Role_Id,
    };
    if (
      Account === "" ||
      Password === "" ||
      PasswordCheck === "" ||
      Name === "" ||
      Email === "" ||
      Phone === "" ||
      Grage === "" ||
      Class_Id === "" ||
      Sex === ""
    ) {
      alert("欄位不可空白");
    } else if (Password !== PasswordCheck) {
      alert("確認密碼錯誤");
    } else {
      e.preventDefault();
      axios
        .post(`http://studytutor_backend.hsc.nutc.edu.tw/api/Members`, payload)
        .then((res) => {
          console.log(res.data);
          // alert(res.data.Message);
          // localStorage.setItem("Token", JSON.stringify(res.data.Data.Token));
          this.props.history.push("/Register/Complete");
        })
        .catch((error) => {
          const status = error.response.status;
          //錯誤狀態碼
          console.log(status);
          const err = JSON.parse(error.request.response);
          //錯誤訊息
          alert(err.Message);
        });
    }
  };
  render() {
    const { Account, Password, PasswordCheck, Name, Email, Phone } = this.state;
    const {classlist}=this.state;
    const classlistData = classlist.map((item, index, array) => {
      return (
          <option key={index} value={item.Class_Id}>{item.ClassName}</option>
      );
    });
   
    return (
      <div className="Register">
        <div className="limiter">
          <div className="container">
            <div className="wrap">
              <form className="form" onSubmit={this.handleSubmit}>
                <span className="title">學生註冊</span>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">性別</span>
                  <input
                    type="radio"
                    name="gender"
                    value="男"
                    id="male"
                    onChange={(e) => {
                      this.setState({ Sex: e.target.value });
                    }}
                  />
                  <label for="male">男</label>
                  <input
                    type="radio"
                    name="gender"
                    value="女"
                    id="female"
                    onChange={(e) => {
                      this.setState({ Sex: e.target.value });
                    }}
                  />
                  <label for="female">女</label>
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">真實姓名</span>
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                    value={Name}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">帳號</span>
                  <input
                    className="input"
                    type="text"
                    onChange={(e) => {
                      this.setState({ Account: e.target.value });
                    }}
                    value={Account}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">密碼</span>
                  <input
                    className="input"
                    type="password"
                    onChange={(e) => {
                      this.setState({ Password: e.target.value });
                    }}
                    value={Password}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">確認密碼</span>
                  <input
                    className="input"
                    type="password"
                    onChange={(e) => {
                      this.setState({ PasswordCheck: e.target.value });
                    }}
                    value={PasswordCheck}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">電子信箱</span>
                  <input
                    className="input"
                    type="email"
                    onChange={(e) => {
                      this.setState({ Email: e.target.value });
                    }}
                    value={Email}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">連絡電話</span>
                  <input
                    className="input"
                    type="tel"
                    onChange={(e) => {
                      this.setState({ Phone: e.target.value });
                    }}
                    value={Phone}
                  />
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">入學年度</span>
                  <select
                    className="input"
                    onChange={(e) => {
                      this.setState({ Grage: e.target.value });
                    }}
                    value={this.state.Grage}
                  >
                    <option></option>
                    <option value="2040">2040</option>
                    <option value="2039">2039</option>
                    <option value="2038">2038</option>
                    <option value="2037">2037</option>
                    <option value="2036">2036</option>
                    <option value="2035">2035</option>
                    <option value="2034">2034</option>
                    <option value="2033">2033</option>
                    <option value="2032">2032</option>
                    <option value="2031">2031</option>
                    <option value="2030">2030</option>
                    <option value="2029">2029</option>
                    <option value="2028">2028</option>
                    <option value="2027">2027</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1995</option>
                    <option value="1994">1994</option>
                    <option value="1993">1993</option>
                    <option value="1992">1992</option>
                    <option value="1991">1991</option>
                    <option value="1990">1990</option>
                  </select>
                </div>
                <div className="list">
                  <span className="red-dot">*</span>
                  <span className="list-text">班級</span>
                  <select
                    className="input"
                    onChange={(e) => {
                      this.setState({ Class_Id: e.target.value });
                    }}
                    value={this.state.Class_Id}
                  >
                    <option></option>
                    {classlistData}
                  </select>
                </div>
                <div className="list">
                  <button className="login-btn">註冊</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//<Link to="/Loging/Register/Complete"></Link>

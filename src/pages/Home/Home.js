import React,{Component} from 'react';
import { Button  } from 'antd';
import Link from 'umi/link';
import tabs from './home.json'
export default class Home extends Component {
  constructor(props){
    super(props);
    let userName = localStorage.getItem('antd-pro-authority')
    console.log(userName);
    this.state = {
      tabs
    }
  }
  componentDidMount() {

  }
  onHandlePage = (e,val)=>{
    const {key} = val,{onHandlePage} = this.props.location;
    onHandlePage({key});
  }
  render() {
    return (
      <div style={{width:'100%',height:'calc(100vh - 64px)',textAlign:'center',background:'#fff'}}>
        <div style={{userSelect:'none'}}>
          <h2 style={{color:'rgb(144, 159, 172)',fontFamily:'cursive',fontSize:'42px',fontWeight:'700',padding:"40px "}}>欢迎使用多标签Ant-Tabs</h2>
          <div className="myHome" >
            <ul >
              {
                this.state.tabs.map((val)=>{
                  return(<li key={"key_" + val.fd_fsid}
                             onClick={(e)=>this.onHandlePage(e,val)}>
                    <div><img  src={val.IconUrl} alt=""/></div>
                    <p>{val.Name}</p>
                  </li>)
                })
              }
              {/*<li onClick={this.handleAdd}>*/}
                {/*<img style={{width:112,background:'#d4c49b',borderRadius:'50%'}} src={''} alt="1"/>*/}
                {/*<p>编辑模块</p>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}


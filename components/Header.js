import style from "../styles/componentsStyle/Header.module.css"
import { Button, Dropdown, Input,Select,message} from "antd"
// import { ActionSheet} from 'react-vant';
import React,{useState} from "react"
import { DownOutlined} from '@ant-design/icons';
import {MoreApp,}from '@icon-park/react';
import '@icon-park/react/styles/index.css';
import Link from "next/link";
import { useRouter } from "next/router";
const { Option } = Select;
import Image from "next/image";

function Header(props){



  // const actions1 = [
  //   { name: '选项一' },
  //   { name: '选项二' },
  //   { name: '选项三', subname: '描述信息' },
  // ]//下拉列表的相关信息


  // const [visible, setVisible] = useState(-1)//下拉列表的控制信息
  // const onCancel = () => setVisible(-1)//下拉列表的控制函数



    const route=useRouter();




     let changeRouter=(value)=>{
        return(event)=>{
          if(value==1){
            message.open({type: 'warning',content: '技术分享模块暂时未区分专栏，下一版本增添', duration: 5,})
          }
          else if(value==3){
            message.open({type: 'warning',content: '生活分享模块暂时未区分专栏，下一版本增添', duration: 5,})
          }
            route.push(`/list/?kind=${value}`)
            // list?kind=2&column=所有专栏

        }

      }


      let goHome=()=>{
        route.push("/")
      }




      const items = [
        {
          key: '20',
          label: (
            <Link href="/list/?kind=2&column=所有专栏">
              前端笔记模块
            </Link>
          ),
        },
        {
          key: '21',
          label: (
            <Link href="/list/?kind=1"
            onClick={()=>{message.open({type: 'warning',content: '技术分享模块暂时未区分专栏，下一版本增添', duration: 5,})}}>
              技术分享模块
            </Link>
          ),
        },
        {
          key: '22',
          label: (
            <Link href="/list/?kind=3"
            onClick={()=>{message.open({type: 'warning',content: '生活分享模块暂时未区分专栏，下一版本增添', duration: 5,})}}>
              生活分享模块
            </Link>
          ),
        },
        {
          key: '23',
          label: (
            <Link href="/websiteCli">
              更多探索模块
            </Link>
          ),
        },
      ];

      const handleToColumn=(value)=>{
        route.push(`/list/?kind=2&column=${value}`)
      }

      const toWebsite=(value)=>{
        if(value=="网站建设"){
          route.push("/websiteCli")
        }
        else if(value=="帮助中心"){
          props.value(true);
        }
      }



      



      
    return(
        <div className={style.header}>
            <div className={style.panel}>
                <div className={style.naviLeft} >
                    <div className={style.logo} onClick={goHome}>
                      <div className={style.img1}>
                        <Image src="https://www.electronjs.org/zh/assets/img/logo.svg" 
                        alt="blogLogo" width={38} height={38}/>
                      </div>
                      <span>hfLiu.com</span>
                    </div>
                    <span className={style.logoDes}>技术&nbsp;生活分享站</span>
                </div>
                <div className={style.naviRight}>
                        {/* <Search theme="outline" size="18" fill="#ffffff" strokeWidth={3} strokeLinecap="square" className={style.searchIcon}/>
                        <Input placeholder={"搜索你的Todo"} className={style.iptTop} >
                        </Input> */}
                  
                  <div className={style.commonBox}>
                    <Button type="text" className={style.commonBtn1}  onClick={changeRouter(1)}>
                      技术分享
                    </Button>
                  </div>
                    &nbsp;
                    <div className={style.commonBox}>
                      <Button type="text"  onClick={changeRouter(3)} className={style.commonBtn1} >
                      生活分享
                      </Button>
                  </div>
                    &nbsp;
                    &nbsp;
                    <div className={style.commonBox}>
                      <Button type="text" onClick={changeRouter("2&column=所有专栏")} className={style.commonBtn1} >
                      前端学习
                      </Button>
                  </div>
                    &nbsp;
                    &nbsp;
                    <div className={style.commonBox}>
                      <Button type="text" onClick={()=>{route.push("/websiteCli")}}  className={style.commonBtn1} >
                      网站探索
                      </Button>
                  </div>


                    {/* <Select defaultValue={"前端笔记"} size="normal"
                    style={{fontWeight:700,color:"#9FEAF9"}} onChange={handleToColumn} className={style.commonBtn2}>
                      <Option key="所有专栏" value="所有专栏" ></Option>
                      <Option key="HTML" value="HTML"></Option>
                      <Option key="CSS" value="CSS"></Option>
                      <Option key="JavaScript" value="JavaScript"></Option>
                      <Option key="后台开发" value="后台开发"></Option>
                      <Option key="数据库" value="数据库"></Option>
                      <Option key="框架学习" value="框架学习"></Option>
                      <Option key="Http网络" value="Http网络"></Option>

                    </Select> */}
                    {/* &nbsp;
                    &nbsp;
                    &nbsp; */}

                    {/* <Select defaultValue={"更多探索"} size="normal" 
                    style={{fontWeight:700,color:"#fff"}} onChange={toWebsite} className={style.commonBtn2}>
                      <Option key="网站建设" value="网站建设" ></Option>
                      <Option key="帮助中心" value="帮助中心"></Option>
                      <Option key="等待开发" value="等待开发" disabled ></Option>

                    </Select> */}

                    <Dropdown menu={{items,}}placement="bottomLeft" arrow className={style.flexTarget}>
                            <Button type="text" style={{color:"#fff"}} >
                              <MoreApp theme="outline" size="22" fill="#fff" strokeWidth={3} strokeLinecap="square"/><DownOutlined onClick={()=>{setVisible(1)} }/>
                            </Button>
                    </Dropdown>

                    {/* <ActionSheet
                      visible={visible === 1}
                      onCancel={onCancel}
                      description='这是一段描述信息'
                      actions={actions1}
                      cancelText='取消'
                    /> */}
                </div>
            </div>
        </div>
    )

}
export default Header
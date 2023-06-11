
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb,Affix, Button, Card,Timeline,FloatButton,Tabs,Collapse,Drawer,Tooltip } from 'antd'
import {DesktopOutlined,ClusterOutlined,CloudServerOutlined} from '@ant-design/icons';
import HelpCenter from '@/components/HelpCenter'

import Header from '@/components/Header'
import React,{useEffect, useState} from "react"
import Author from '@/components/Author'
import Footer from '@/components/Footer'
import Advert from '@/components/Advert'


import Image from 'next/image'
import consPng from "../public/test.drawio.png"
import Png1 from "../public/pic1.png"
import Png2 from "../public/pic9.png"
import Png3 from "../public/pic0.jpg"
import Png4 from "../public/Next.png"
import Png5 from "../public/pic12.png"
import Png6 from "../public/pic8.jpg"



import { ClockCircleOutlined } from '@ant-design/icons';

import { useRouter } from 'next/router'
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import ColumnList from '@/components/columnList'

const { Panel } = Collapse;

const { Meta } = Card;




const styles ={
  bgd:{
      // color: 'rgba(0,0,0,.25)',
      backgroundImage: `url(https://picture-test-1316646528.cos.ap-beijing.myqcloud.com/%E4%B8%8B%E8%BD%BD.png)`,
      // backgroundSize: '100%,100%',
      zIndx:-1,
  }
}






const text = `
test   test   test    test
`;


const items = [
    {
      key: '1',
      label:<div> <DesktopOutlined />前台构建</div>,
      children: 
      <Collapse>
      <Panel header="采用技术栈" key="1">
        <ul className='ulListCli'>
          <li>&nbsp;&nbsp;Next.js</li>
          <li>&nbsp;&nbsp;React-Hooks</li>
          <li>&nbsp;&nbsp;Axios</li>
        </ul>
      </Panel>
      <Panel header="用户体验改善" key="2">
        <ol>
          <li>兼容性</li>
          <li>响应式设计:划分3个主流响应区间
              <ul className='ulListCli'>
                  <li>390px-680px--手机移动端设备：展示主要信息，导航及次要信息以折叠面板形式展示</li>
                  <li>681px-986px--平板移动端设备：展示主要信息/次要信息，导航信息以折叠面板形式展示，进行比例留白</li>
                  <li>987px-1200px--电脑设备缩略窗口状态：展示全部信息</li>
                  <li>大于1201px--电脑端设备全屏状态：上层基础上进行比例留白展示</li>
              </ul>
          </li>
          <li>交互设计</li>
        </ol>
      </Panel>
      <Panel header="性能优化改善" key="3">
        <p>{text}</p>
      </Panel>
      <Panel header="SEO问题的解决" key="4">
        <ul className='ulListCli'>
          <li>采用React基础上的Next.js框架，进行服务端渲染的形式有利于SEO优化</li>
          <li>对应Head尽最大可能表达本界面内容</li>
        </ul>
      </Panel>
    </Collapse>,
    },
    {
      key: '2',
      label:<div><CloudServerOutlined />中台构建</div>,
      children: 
      <Collapse>
      <Panel header="采用技术栈" key="5">
        <ul className='ulListCli'>
          <li>&nbsp;&nbsp;Node.js</li>
          <li>&nbsp;&nbsp;Egg.js</li>
          <li>&nbsp;&nbsp;MySql</li>
        </ul>
      </Panel>
      <Panel header="权限与安全问题改善" key="6">
        <p>{text}</p>
      </Panel>
      <Panel header="性能优化改善" key="7">
        <p>{text}</p>
      </Panel>
      <Panel header="集中式管理与维护" key="8">
        <p>{text}</p>
      </Panel>
    </Collapse>,
    },
    {
      key: '3',
      label:<div><ClusterOutlined />后台构建</div>,
      children: 
      <Collapse>
      <Panel header="采用技术栈" key="9">
        <ul className='ulListCli'>
          <li>&nbsp;&nbsp;React</li>
          <li>&nbsp;&nbsp;React-Hooks</li>
          <li>&nbsp;&nbsp;React-RouterV6</li>
          <li>&nbsp;&nbsp;Redux</li>
          <li>&nbsp;&nbsp;Axios</li>
        </ul>
      </Panel>
      <Panel header="集中式管理与维护" key="10">
        <p>{text}</p>
      </Panel>
      <Panel header='将&nbsp;&nbsp;"简易"&nbsp;&nbsp;贯彻到底' key="11">
        <p>{text}</p>
      </Panel>
    </Collapse>,
    },
  ];






function Detailed(){


  const [openFlex,setOpenFlex]=useState(false);

  const getflexCanel=(value)=>{

    setOpenFlex(value);
  }




    const routes=useRouter();





    const colorArr=["#87d068","#f50","#2db7f5","#108ee9"];

    return (
        <div  style={styles.bgd}>
          <Head>
            <title>博客详细页</title>
          </Head>
          <Header value={getflexCanel}/>
          <div className="bread-div" style={{marginBottom:"15px"}}>
                <Breadcrumb>
                  <Breadcrumb.Item>
                      <Button type='text' size='small' onClick={()=>routes.push("/")}>首页</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Button type='text' size='small' onClick={()=>routes.push("/websiteCli")}>更多探索模块</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Button type='text' size='small' onClick={()=>routes.push("/websiteCli")}>网站建设</Button>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
      <div className='content-mid'>
      <div className='right'>
          <Author/>
          <ColumnList/>
          <Advert/>
        </div>
        <div className='left detailNoneWhite'>
            <div className='webConstructor whitePage'>
                <div className='consTitle'>网站基本建构图：</div>
                <div className='consPic'>
                    <Image src="/test.drawio.svg" alt="预计轮播图的位置" width="500" height="500" className='img1'/>
                </div>
            </div>
            <div className='webCli whitePage' style={{paddingLeft:"1.6vw"}}>
                <div className='consTitle' style={{marginLeft:"10px"}}>项目建构介绍：</div>
                <Tabs defaultActiveKey="1" items={items} size="small" tabPosition='left'/>
            </div>
            <div className='webCli whitePage'>
                <div className='consTitle'>项目技术栈：</div>
                <div className='consPic'>
                <Row gutter={{ xs: 16, sm: 16, md: 16, lg: 16 }}>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"22px"}} className="colName">
                        <Card hoverable style={{ width: 240, } }
                            cover={<Image src={Png1} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://react.docschina.org/")}
                            >
                            <Meta title="React" 
                            description="React 使创建交互式 UI 变得轻而易举。" 
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"15px"}}>
                        <Card hoverable style={{ width: 240, }}
                            cover={<Image src={Png2} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://www.mysql.com/")}
                            >
                            <Meta title="MySQL"
                             description="在 WEB 应用开发方面 MySQL 是最优的关系型数据库" 
                             />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"15px"}}>
                        <Card hoverable style={{ width: 240, }}
                            cover={<Image src={Png3} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://ant.design/index-cn")}
                            >
                            <Meta title="Ant Design " 
                            description="基于 Ant Design 设计体系的 React UI 组件库，用于研发企业级中后台产品。"
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"15px"}}>
                        <Card hoverable style={{ width: 240, }}
                            cover={<Image src={Png4} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://www.nextjs.cn/")}
                            >
                            <Meta title="Next.js" 
                            description="Next.js 支持规模化的生产级 React 应用程序。大量世界领先的公司都在使用" 
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"15px"}}>
                        <Card hoverable style={{ width: 240, }}
                            cover={<Image src={Png5} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://www.axios-http.cn/")}
                            >
                            <Meta title="Axios"
                             description="Axios 是一个基于 promise 的网络请求库，可以用于浏览器和 node.js"
                             />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={12} xl={8} style={{marginBottom:"15px"}}>
                        <Card hoverable style={{ width: 240, }}
                            cover={<Image src={Png6} alt="Picture of the author" className='img1'/>}
                            onClick={()=>routes.push("https://www.eggjs.org/zh-CN")}
                            >
                            <Meta title="Egg.js"
                             description="Egg.js 为企业级框架和应用而生 "
                             />
                        </Card>
                    </Col>
                </Row>
                </div>
            </div>
            <div className='webPlan whitePage'>
                <div className='consTitle'>网站建设时间线：</div>
                <div className='consPic'>
                    <Timeline mode="alternate">
                        <Timeline.Item color="red">
                            敬请期待！更加精彩
                            <br/>
                            <br/>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            敬请期待！更加精彩
                            <br/>
                            <br/>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                            敬请期待！更加精彩
                            <br/>
                            <br/>
                        </Timeline.Item>
                        <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px',}}/>}>
                                <div className='listTitle'>博客1.0正式版本建设中--预计-2023年4月</div>
                                <br/>
                                <ul>
                                    <li>计划设立留言管理、文章讨论区</li>
                                    <li>增加沉浸式阅读模式</li>
                                    <li>..........</li>
                                    <li>..........</li>
                                </ul>
                        </Timeline.Item>


                        <Timeline.Item color="green">
                            <div className='listTitle'>博客2.0Beta版本建设完成---2023年1月28日</div>
                                <br/>
                                <ul>
                                    <li>前台文章UI优化</li>
                                    <li>前台完成标签管理</li>
                                    <li>前台设立专栏作为二级模块</li>
                                    <li>前台新增网站建设模块</li>
                                    <li>-------------------</li>
                                </ul>
                                <ul>
                                    <li>后台React路由迁移至RouterV6 建立路由表</li>
                                    <li>后台搭建Redux集中状态管理机,减少中台拉取频率</li>
                                    <li>后台转用基于React高阶组件的路由守卫</li>
                                </ul>
                        </Timeline.Item>
                        <Timeline.Item color="green">
                            <div className='listTitle'>博客1.0Beta版本建设完成---2023年1月18日</div>
                            <br/>
                            <ul>
                                <li>前台完成基本展示</li>
                                <li>前台完成模块分布</li>
                                <li>-------------------</li>
                            </ul>
                            <ul>
                                <li>后台完成基本增删改查</li>
                                <li>后台完成基于中台的路由守卫</li>
                            </ul>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>

        </div>
        
      </div>
      <Drawer title={<div style={{fontSize:"12px",}}><span className='helpTitle'>帮助中心</span>你可以在这里进行问题反馈和建议</div>} 
      placement="left" onClose={()=>{setOpenFlex(false)}} open={openFlex}>
        <HelpCenter value={getflexCanel}/>
      </Drawer>


        <FloatButton.Group shape="circle" style={{right: 28,}}>
          <Tooltip title="建议反馈" placement='left'>
              <FloatButton icon={<QuestionCircleOutlined />} onClick={()=>{setOpenFlex(true)}} type="primary" />
          </Tooltip>
          <Tooltip title="返回顶部" placement='left'>
              <FloatButton.BackTop visibilityHeight={0} type="primary" />
          </Tooltip>
        </FloatButton.Group>
      <Footer/>
          
    
       </div>
      )
}


export default Detailed
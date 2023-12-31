import Head from 'next/head'
import {Button,List,Tag,Select,FloatButton,message,Calendar,Drawer,Tooltip } from "antd"
import Header from '@/components/Header'
import React,{useEffect, useState} from "react"
import Author from '@/components/Author'
import Advert from '@/components/Advert'
import Footer from '@/components/Footer'
import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import png1 from "../public/pic1.png"
import png2 from "../public/pic9.png"
import png3 from "../public/Next.png"
import {FolderOpen}from '@icon-park/react';
import Media from '@/components/media'
import ColumnList from '@/components/columnList'
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import HelpCenter from '@/components/HelpCenter'
const {Option}=Select;




const styles ={
  bgd:{
      // color: 'rgba(0,0,0,.25)',
      backgroundImage: `url(https://picture-test-1316646528.cos.ap-beijing.myqcloud.com/bg.jpg)`,
      // backgroundSize: '100%,100%',
      zIndx:-1,
  }
}



function MyList({listArr}) {

  const route=useRouter();//启动路由钩子
  

  const [ mylist , setMylist ] = useState(listArr.reverse());
  const[isShowDrop,setShowDrop]=useState(route.query.kind)//用于判断是否展示学习具体栏目选择框
  const [openFlex,setOpenFlex]=useState(false);

  useEffect(()=>{
    setMylist(listArr.reverse());
    setShowDrop(route.query.kind)
  })



  const getflexCanel=(value)=>{

    setOpenFlex(value);
}



  const colorArr=["#87d068","#f50","#2db7f5","#108ee9"];//设置颜色数组，为了是标签是彩色

  const handleToColumn=(value)=>{
    route.push(`/list/?kind=2&column=${value}`)
  }


  let modules;
  let pngSelected;
  if(route.query.kind==1){
    modules="技术分享"
    pngSelected=png2
  }else if(route.query.kind==2){
    modules="前端学习"
    pngSelected=png1
  }else if(route.query.kind==3){
    modules="生活分享"
    pngSelected=png3
  }else if(route.query.kind==4){
    modules="更多探索"
  }





  return (
    <div style={styles.bgd}>
      <Head>
        <title>峰哥博客&nbsp;&nbsp;{modules}模块&nbsp;全新开启</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header value={getflexCanel}/>
      <div className='content-mid topMargin52'>
        <div className='left'>
        <div className='content-topMain'>
          <Image src={pngSelected} alt="Picture of the author" className='img1'/>
        </div>
        <List
        className='listf6 listDector'
          header={
              <div className='headerTitle'>
                <div className='listDes'>
                    <div>
                      <FolderOpen theme="outline" size="22" fill="#d0021b" strokeWidth={3} strokeLinecap="square"/>
                      &nbsp;&nbsp;&nbsp;{modules}模块----目前共{mylist.length}篇文章
                    </div>
                </div>
                  <div style={{display:isShowDrop==2? "block" : "none"}}> 
                  具体专栏：&nbsp;&nbsp;               
                    <Select defaultValue={"所有专栏"} size="normal" style={{fontWeight:700,color:"#fff"}} onChange={handleToColumn}>
                      <Option key="所有专栏" value="所有专栏" ></Option>
                      <Option key="HTML" value="HTML"></Option>
                      <Option key="CSS" value="CSS"></Option>
                      <Option key="JavaScript" value="JavaScript"></Option>
                      <Option key="后台开发" value="后台开发"></Option>
                      <Option key="数据库&nbsp;" value="数据库"></Option>
                      <Option key="框架学习" value="框架学习"></Option>
                      <Option key="Http网络" value="Http网络"></Option>
                    </Select>
                  </div>
              </div>}
          itemLayout="vertical"
          dataSource={mylist}
          renderItem={item => (
            <List.Item className='listItemAll' style={{position:"relative"}}>
              <Link href={`/detail?id=${item.id}`}>            
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <div>
                    {item.tags.map((value,index2)=>{
                      return <Tag color={colorArr[index2]} key={index2}>{value}</Tag>
                    })}
                  </div>
                  <div className='InfoSmallTag'>
                    <span>{item.addtime}&nbsp;</span>
                    <span>{item.type_id}&nbsp;</span>
                    <span>阅读：{item.viewcount}人</span>
                  </div>
                </div>
                <div className="list-context">{item.introduce}</div>  
                <Button type='primary' size='small' style={{position:"absolute",bottom:"15px",right:"20px"}} danger>Read more</Button>
            </Link>

            </List.Item>
    )}
  />  
        </div>
        <div className='right'>
          <Author/>
          <Media/>
          <div className='calendarSearch'>
            <div className='claendarTitle' >
              日期筛选：
              <Button type='primary' danger size='small'
               onClick={()=>{ 
                 message.open({type: 'warning',content: '注意！！！日期筛选尚未开放，预计将下一版本开放', duration: 6,});}}>筛选</Button>
              </div>
            <div style={{width: 300,border: `1px solid #f5f5f5`,borderRadius:"6px",marginRight:"0px",width:"100%"}}>
              <Calendar fullscreen={false} />
            </div>
          </div>
          <ColumnList/>
        </div>
      </div>
      <Drawer title={<div style={{fontSize:"12px",}}><span className='helpTitle'>帮助中心</span>你可以在这里进行问题反馈和建议</div>} 
      placement="left" onClose={()=>{setOpenFlex(false)}} open={openFlex}>
        <HelpCenter value={getflexCanel}/>
      </Drawer>


        <FloatButton.Group shape="circle" style={{right: 28,}}>
          <Tooltip title="建议反馈" placement='left' >
              <FloatButton icon={<QuestionCircleOutlined />} onClick={()=>{setOpenFlex(true)}} type="primary" />
          </Tooltip>
          <Tooltip title="返回顶部" placement='left'>
              <FloatButton.BackTop visibilityHeight={0} type="primary"/>
          </Tooltip>
        </FloatButton.Group>
      <Footer/>
    </div>
  )
}

MyList.getInitialProps = async (context) => {
  let res;
  if(context.query.kind==2){
    res=await axios(`https://apii.hfliu.com/default/getArticleListByKind?kind=${context.query.kind}&column=${context.query.column}`);
  }
  else{
    res=await axios(`https://apii.hfliu.com/default/getArticleListByKind?kind=${context.query.kind}`);
  }
  return {listArr:res.data};
}



export default MyList

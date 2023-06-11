import Head from 'next/head'
import {Button,List,Tag,FloatButton,Calendar,message,Pagination,Select,Input,Drawer,Tour,Space, Alert,
  notification,Tooltip,ConfigProvider,Result} from "antd"
import Header from '@/components/Header'
import React,{useEffect, useState,useRef} from "react"
import Author from '@/components/Author'
import Advert from '@/components/Advert'
import Footer from '@/components/Footer'
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import Media from '@/components/media'
import Links from '@/components/Links'
import ColumnList from '@/components/columnList'
import picMain from "../public/pic1.png"
import picWelcome from "../public/picWel.gif"
import Image from 'next/image'
import zhCn from 'antd/locale/zh_CN';
import Marquee from 'react-fast-marquee';

// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import { set } from 'lodash'
import HelpCenter from '@/components/HelpCenter'
import { Square } from '@icon-park/react'
const { Option } = Select;
const { Search } = Input;




const styles ={
  bgd:{
      // color: 'rgba(0,0,0,.25)',
      backgroundImage: `url(https://picture-test-1316646528.cos.ap-beijing.myqcloud.com/bg.jpg)`,
      // backgroundSize: '100%,100%',
      zIndx:-1,
  }
}

function Home({listArr,is500}) {

  const routes=useRouter();





    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const [openNavi, setOpenNavi] = useState(false);



    const steps = [
      {
        title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>欢迎来到峰哥博客</p>,
        description: 
        <div>
          <ul className='listStyle'>
            <li>首先，这是一个内容全面的技术博客平台（包括计算机相关新型技术和相关理论知识的分享平台。</li>
            <li>内容相对以前端开发相关为主</li>
          </ul>
          <p style={{color:"#7ed321",textAlign:"center",fontWeight:"700",fontSize:"15px"}}>在此，将会讲述博客   2.0 beta版本的全新功能</p>
        </div>,
        cover: (
          <img
            alt="tour.png"
            src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
          />

        ),
        placement:"bottom",
        target: null,
      },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>这里是顶部快捷导航栏</p>,
          description: 
          <ul className='listStyle'>
            <li>你可以通过这里快速的访问相应模块</li>
            <li>其中你也可以在前端开发模块选择相应专栏</li>
          </ul>,
          placement:"bottom",
          target: () => ref1.current,
        },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>这里是文章搜索框</p>,
          description: 
          <ul className='listStyle'>
            <li>你可以在这里快速的搜索你想要的相关知识，</li>
            <li>它同样也支持模糊查找</li>
          </ul>,
          placement:"top",
          target: () => ref2.current,
        },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>文章专区</p>,
          description: 
          <ul className='listStyle'>
            <li>这里是文章专区，下面展示这目前网站的所有文章</li>
            <li>文章较多，一页装不下，可以通过下方的分页器翻页即可</li>
            <li>右侧的文章排序选项，你可以在这里以你喜欢的相识对文章进行排序</li>
          </ul>,
          placement:"top",
          target: () => ref3.current,
        },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>其他信息区域</p>,
          description: 
          <ul className='listStyle'>
            <li>这里是关于作者的相关信息与媒体连接</li>
            <li>想获得相关开源项目，可以到我的github主页获取</li>
            <li>想要看他的其他相关文章，可以到我的其他媒体主页</li>
          </ul>,
          placement:"left",
          target: () => ref4.current,
        },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>专栏导航区域</p>,
          description: 
          <ul className='listStyle'>
            <li>打开相应模块的折叠面板，去选择相应的专栏即可</li>
          </ul>,
          placement:"left",
          target: () => ref5.current,
        },
        {
          title: <p style={{color:"#7ed321",fontWeight:"700",fontSize:"15px"}}>恭喜你完成了功能指导</p>,
          description: 
          <div>
            <ul className='listStyle'>
              <li>主页主要功能的导航到这就结束了</li>
              <li>还有更多功能与文章等待着你的探索</li>
              <li>更多有趣实用的功能也将在未来开放</li>
            </ul>       
            <p style={{color:"#7ed321",textAlign:"center",fontWeight:"700",fontSize:"15px"}}>慢慢探索吧，再见！</p>
          </div>,
          cover: (
            <img
              alt="tour.png"
              src="https://user-images.githubusercontent.com/5378891/197385811-55df8480-7ff4-44bd-9d43-a7dade598d70.png"
            />
  
          ),
          target:null
        },
      ];




  const [ mylist , setMylist ] = useState(listArr)//所有数据信息
  const [pageNum,setPageNum]=useState(1);//记录分页器页数
  const [searchStr,setSearchStr]=useState("");
  const [sortKind,setSortKind]=useState("时间降序")
  const [openFlex,setOpenFlex]=useState(false);
  const [is500Int,setIs500Int]=useState(is500);

  const colorArr=["#87d068","#f50","#2db7f5","#108ee9","#f8a4cb"];


  const handleSearchInfo=(value)=>{
    if(value.trim()==""){
      message.open({type:"warning",content:"注意！搜索关键字不能为空",duration:4});
      return;
    }
    else{
      setSearchStr(value.trim())
    }
  }
  const handleSortKind=(value)=>{
    setSortKind(value);
  }

  const getflexCanel=(value)=>{

      setOpenFlex(value);
  }

  const handleNaviClose=()=>{
    setOpenNavi(false);
    window.scrollTo({"behavior": "smooth", "top": 0});
    notification.success({
      message:"恭喜你完成引导教程",
      description:
      <div>
        <p>快去寻找你需要的知识或文章。</p>
        <p>如果该博客还没有，可以点击反馈中心，去反馈相应信息</p>
      </div>
      ,
      placement:"topLeft",
      duration:5,
    })

  }


  let displayListPre=mylist.filter((value,index)=>{
    return value.title.indexOf(searchStr)!=-1;
  })

  if(sortKind=="时间升序"){
    displayListPre=displayListPre.reverse();
  }
  else if(sortKind=="阅读量"){

    displayListPre=displayListPre.sort((a,b)=>{
        return b.viewcount-a.viewcount;

    }) 
  }

  if((displayListPre.length/11)+1<pageNum){
    setPageNum(1);
  }

  const displayListLast=displayListPre.filter((value,index)=>{

    return index>=pageNum*10-10&&index<=pageNum*10-1;
  })//根据分页器信息展示相应数据（可避免重复向数据拉取信息）

  useEffect(()=>{
    if(displayListLast.length==0){
      message.open({type:"info",content:"抱歉，还没有相关文章，看看别的吧",duration:4});
    }
  })



  return (
    <div  style={styles.bgd}>
      <Head>
        <title>峰哥博客&nbsp;&nbsp;你想看的都在这里</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div style={{height:"52px",width:"100%"}} ref={ref1}>
          <Header value={getflexCanel} />
      </div>

      <Alert banner
        message={
        <Marquee pauseOnHover gradient={false} style={{color:"red"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            由于本网站需进行公安备案等原因，本网站将于2023年2月20日至2023年2月23日临时关闭，请需要资源的游客提前下载或保存！！！
        </Marquee>
        }
        closeText="不再显示"
        className='banerInfo'
        />
        <Alert banner
        message={
        <Marquee pauseOnHover gradient={false} style={{color:"red"}}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            本网站将于2023年2月23日进行第二次网站更新维护，进入1.0正式版本，评论区，消息反馈，文章评分，更多筛选功能等模块将会加入，目前部分功能和文章删除，敬请谅解！！!
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Marquee>
        }
        closeText="不再显示"
        className='banerInfo'
        />
      <div className='content-mid' style={{marginTop:"6px"}}>
        <div className='left'>
          <div className='TopLeft'>
              <Image src={picWelcome} alt="预计轮播图的位置" className='img1'/>
              {/* <Swiper
              className='testSwiper'
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              style={{height:"100%",marginLeft:"0",marginRight:"0"}}
              >
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 1</SwiperSlide>
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 2</SwiperSlide>
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 3</SwiperSlide>
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 4</SwiperSlide>
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 5</SwiperSlide>
              <SwiperSlide style={{width:"60px",marginRight:"0px"}}>Slide 6</SwiperSlide>
              ...
              </Swiper> */}
          </div>
          <div ref={ref2} >
              <Search placeholder="文章搜索"  enterButton size='large' onSearch={handleSearchInfo} className='inputMain'/>
          </div>
          <div style={{display: is500Int===true? "block" : "none",width:"100%",backgroundColor:"#fff"}} className="listDector">
            <Result
              status="500"
              title="502"
              subTitle={<div className='p500Title'>
                特殊原因，中台服务器临时关闭，敬请谅解！
                </div>}
              extra={<Button type="primary" onClick={()=>{setOpenFlex(true)}}>
                反馈意见</Button>}
            />
          </div>
          <div style={{display: is500Int===true? "none" : "block"}}>
              <List 
                className='listf6 listDector'
                  header={<div className='headerTitle' ref={ref3}>&nbsp;&nbsp;&nbsp;&nbsp;最新日志
                            <Select defaultValue={"时间倒序"} size="normal" style={{fontWeight:700}} onChange={handleSortKind} >
                                <Option key="时间降序" value="时间降序" ></Option>
                                <Option key="时间升序" value="时间升序"></Option>
                                <Option key="阅读量" value="阅读量"></Option>
                            </Select>
                          </div>}
                  itemLayout="vertical"
                  dataSource={ displayListLast}
                  renderItem={item => (
                    <List.Item className='listItemAll' style={{position:"relative"}} >
                      <Link href={`/detail?id=${item.id}`}>            
                        <div className="list-title">{item.title}</div>
                        <div className="list-icon">
                          <div>
                            {item.tags.map((value,index2)=>{
                              return <Tag key={index2} color={colorArr[index2]}>{value}</Tag>
                            })}
                          </div>
                          <div className='InfoSmallTag'>
                            <span>{item.addtime}&nbsp;</span>
                            <span>{item.type_id}&nbsp;</span>
                            <span>阅读：{item.viewcount}人</span>
                          </div>
                        </div>
                        <div className="list-context">{item.introduce}</div>  
                        <Button type='primary' size='small' style={{position:"absolute",bottom:"6px",right:"20px"}} danger>Read more</Button>
                    </Link>

                    </List.Item>
            )}
            footer={ 
            <div className='pageUI'>
              <Pagination total={ displayListPre.length}  showQuickJumper showTotal={(total) => `共有 ${total}篇 文章`}
              onChange={(value)=>{setPageNum(value)}}/>
            </div>
                  }
                /> 
          </div>   
  
        </div>
        <div className='right'>
          <div ref={ref4}>
            <Author/>
            <Media/>
          </div>
          <div className='calendarSearch'>
            <div className='claendarTitle' >
              日期筛选：
              <Button type='primary' danger size='small'
               onClick={()=>{ 
                 message.open({type: 'warning',content: '注意！！！日期筛选尚未开放，预计将下一版本开放', duration: 6,});}}>筛选</Button>
              </div>
            <div style={{width: 300,border: `1px solid #f5f5f5`,borderRadius:"6px",marginRight:"0px",width:"100%"}}>
              <ConfigProvider locale={zhCn}>
                  <Calendar fullscreen={false} />
              </ConfigProvider>
            </div>
          </div>
            <Links/>
            <div ref={ref5}>
              <ColumnList/>
            </div>
          <Advert/>
          
        </div>
      </div>
      <Drawer title={<div style={{fontSize:"12px",}}><span className='helpTitle'>帮助中心</span>你可以在这里进行问题反馈和建议</div>} 
      placement="left" onClose={()=>{setOpenFlex(false)}} open={openFlex}>
        <HelpCenter value={getflexCanel}/>
      </Drawer>

        <FloatButton.Group shape="circle" style={{right: 44,}} >
          <Tooltip title="帮助导航" placement='left'>
              <FloatButton icon={<QuestionCircleOutlined />} onClick={()=>{setOpenNavi(true)}} type="primary"/>
          </Tooltip>

          <Tooltip title="建议反馈" placement='left' >
              <FloatButton icon={<SyncOutlined />}  onClick={()=>{setOpenFlex(true)}} type="primary"/>
          </Tooltip>
          <Tooltip title="返回顶部" placement='left'>
              <FloatButton.BackTop visibilityHeight={0} type="primary" />
          </Tooltip>
        </FloatButton.Group>
      <Footer/>
      <Tour open={openNavi} onClose={handleNaviClose} steps={steps} />
    </div>
  )
}
Home.getInitialProps = async () => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const show = await res.json()
  // let res=await axios("http://101.42.225.134:7001/default/getArticleList");
  // console.log(res);
  // const data = await res.json()
  // return {listArr:res.data};
  try {
    let res=await axios("https://apii.hfliu.com/default/getArticleList");
    return {listArr:res.data,is500:false};
  } catch (error) {
    return{listArr:[],is500:true};
    
  }
}




export default Home

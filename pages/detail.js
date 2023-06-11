
import Head from 'next/head'
import {Row, Col , Icon ,Breadcrumb,Affix, Button, Divider,Tag ,Modal,Rate,Input,List,notification,Drawer,Tooltip } from 'antd'

import { ExclamationCircleOutlined } from '@ant-design/icons';

import Header from '@/components/Header'
import React,{use, useState,useRef, useEffect} from "react"
import Author from '@/components/Author'
import Footer from '@/components/Footer'
import MarkNav from 'markdown-navbar';
import axios from 'axios'
import { useRouter } from 'next/router'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { FloatButton } from 'antd';
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons';
import HelpCenter from '@/components/HelpCenter'
import { Download } from '@icon-park/react'
const { TextArea } = Input;




const styles1 ={
  bgd:{
      // color: 'rgba(0,0,0,.25)',
      backgroundImage: `url(https://picture-test-1316646528.cos.ap-beijing.myqcloud.com/bg.jpg)`,
      // backgroundSize: '100%,100%',
      zIndx:-1,
  }
}


function Detailed({article}){

  const desc = ['糟糕的文章，全是问题', '文章大体不理想', '还可以，略微有问题', '文章结构清晰', '简直完美，没任何问题！'];
  const [isToFocus,setToFocus]=useState([false,"沉浸式阅读"]);
  const [open, setOpen] = useState(false);
  const [openFlex,setOpenFlex]=useState(false);
  const [isdownModalOpen,setdownOpen]=useState(false);
  const [downStatus,setdownStatus]=useState("")
  const [commentsGroup,setComments]=useState([])
  const [rate,setRate]=useState("5");
  const downInput=useRef();
  const refKidName=useRef();
  const refText=useRef();

  const commentsHeight=useRef();


  const commentsData = [
    {
      title:
       <div style={{fontSize:"16x",color:"#1e90ff"}}>hfLiu<Tag color="#f50" style={{marginLeft:"20px"}} size="small">作者</Tag></div>,
       description:"讨论区逻辑模块尚未完成，等待下一版本，会以更安全的方式实现！"
    },
    {
      title: 
      <div style={{fontSize:"16x",color:"#1e90ff"}}>游客1001<Tag color="#f50" style={{marginLeft:"20px"}} size="small">游客</Tag></div>,
      description:"test    test    test"
    },
    {
      title:
       <div style={{fontSize:"16x",color:"#1e90ff"}}>游客1002<Tag color="#f50" style={{marginLeft:"20px"}} size="small">游客</Tag></div>,
       description:"test    test    test"
    },
    {
      title: 
      <div style={{fontSize:"16x",color:"#1e90ff"}}>游客1003<Tag color="#f50" style={{marginLeft:"20px"}} size="small">游客</Tag></div>,
      description:"test    test    test"
    },
  ];

  const getflexCanel=(value)=>{

    setOpenFlex(value);
}



  const changeToFocus=()=>{
    if(isToFocus[0]==false){
      setToFocus([true,"显示目录"]);
    }
    else{
      setToFocus([false,"沉浸式阅读"]);
    }
  }

  const handleSubmitComments=()=>{

    let name=refKidName.current.input.value;
    let description=refText.current.resizableTextArea.textArea.value;
    let storeValue={name,description,rate:rate,articleId:article.id};

    axios.post("http://101.42.225.134:7001/default/getComments",storeValue)
    .then((value)=>{
      setOpen(false);
      notification.success({
      message:"评论发布",
      description:"评论发布成功，感谢您的支持与建议！",
      duration:7
    })

    })
    .catch(()=>{
      console.log("评论发布失败，之后再发吧");
      notification.error({
      message:"评论发布",
      description:"评论发布失败，之后再发吧，我们会尽快维护！",
      duration:7
    })
    })

  }

  useEffect(()=>{
    
    axios.get("http://101.42.225.134:7001/default/pullComments?id="+article.id)
    .then((value)=>{
      console.log(value.data.data);
      setComments(value.data.data);
    })
    .catch(()=>{
      console.log("error 文章评论拉取失败");

  })},[])//文章开启时向服务器拉取该篇文章的评论信息

  const toCommentsPart=()=>{
    window.scrollTo({"behavior": "smooth", "top": commentsHeight.current.offsetTop-75});
  }

  const destroyAll = () => {
    Modal.destroyAll();
  };


  const gethtml = (title) => {
    let html = `<!DOCTYPE html>
    <html lang="en">
      ...${title}
    </html>
    `;
    return html;
  };





  const downLoad=(value)=>{
    return()=>{
      let codePass=downInput.current.input.value
      let password="lhf";
      for(let i=0;i<article.tags.length;i++){
        password+=article.id;
      }
      for(let i=0;i<article.tags.length;i++){
        password+=article.tags.length;
        password+="pa";
      }
      if(codePass!=password){
        notification.error({
          message:"错误的提取码",
          description:"请输入正确的提取码！！！",
          duration:4

        })
        setdownStatus("error")
      }
      else{
        if(value=="md"){
            for (let i = 0; i < 3; i += 1) {
              setTimeout(() => {
                Modal.warn({
                  title: '版权信息提示',
                  content: (
                    <div>
                      <p>本文章版权所有为：hfLiu.com</p>
                      <p>未经所有人许可，禁止用于任何商业行为！</p>
                      <p>非商业行为应标注文章相关链接！</p>
                    </div>
                  ),
                  onOk() {

                    setdownOpen(false);
                    Modal.destroyAll();

                    const blobs = new Blob([article.content], {
                      type: 'text/markdown'
                      })
          
                      let url = window.URL.createObjectURL(blobs);
                      let a = document.createElement('a');
                      a.href = url;
                      a.download = `${article.title}.md`;
                      a.click();

                      downInput.current.input.value="1";


                    notification.success({
                      message:"MarkDown文件成功导出",
                      description:`文件名为：${article.title}.md`,
                      duration:4
                    });  
                  },
                  okText:"明白",
                });
              }, i * 500);
            }

        }
        else if(value=="html"){



          for (let i = 0; i < 3; i += 1) {
            setTimeout(() => {
              Modal.warn({
                title: '版权信息提示',
                content: (
                  <div>
                    <p style={{color:"red",fontWeight:"700", marginBottom:"15px",marginTop:"20px"}}>本文章版权所有为：hfLiu.com</p>
                    <p style={{color:"red",fontWeight:"700", marginBottom:"15px"}}>未经所有人许可，禁止用于任何商业行为！</p>
                    <p style={{color:"red",fontWeight:"700", marginBottom:"15px"}}>非商业行为应标注文章相关链接！</p>
                  </div>
                ),
                onOk() {

                  Modal.destroyAll();
                  setdownOpen(false);

                  let htmlStr=marked(article.content)
                  // 生成html字符串
                  const html = gethtml(htmlStr);
                  // 创建一个a标签
                  var a = document.createElement("a");
                  // 创建一个包含blob对象的url
                  var url = window.URL.createObjectURL(
                      new Blob([html], {
                          type: "",
                      })
                  );
                  a.href = url;
                  a.download = `${article.title}.html`;
                  a.click();
                  window.URL.revokeObjectURL(url);

                  downInput.current.input.value="1";

                  notification.success({
                    message:"MarkDown文件成功导出",
                    description:`文件名为：${article.title}.html`+"\n"+"注意！该HTML文件没有样式，仍然建议采用MarkDown文档",
                    duration:4
                  });  
                },
                okText:"明白",
              });
            }, i * 500);
          }

        }
      }
    }

  }//文章下载功能的处理函数







  const handleDownLoad=()=>{

    setdownOpen(true)
    // const blobs = new Blob([article.content], {
    //   type: 'text/markdown'
    // })

    // let url = window.URL.createObjectURL(blobs);
    // let a = document.createElement('a');
    // a.href = url;
    // a.download = `${article.title}.md`;
    // a.click();

  }



  const renderer = new marked.Renderer();

  marked.setOptions({
      renderer: renderer, 
      gfm: true,
      pedantic: false,
      sanitize: false,
      tables: true,
      breaks: false,
      smartLists: true,
      smartypants: false,
      highlight: function (code) {
              return hljs.highlightAuto(code).value;
      }
    }); //markdown转html的相关设置


    let html=marked(article.content)
    let htmlIntroduce=marked(article.introduce);
    const routes=useRouter();


    let kindKey;
    if(article.type_id=="技术分享")
    {
      kindKey=1;
    }else if(article.type_id=="前端学习"){
      kindKey=2;
    }
    else if(article.type_id=="生活分享"){
      kindKey=3;
    }
    else if(article.type_id=="更多探索"){
      kindKey=4;
    }


    const colorArr=["#87d068","#f50","#2db7f5","#108ee9"];

    return (
        <div style={styles1.bgd}>
          <Head>
            <title>峰哥博客&nbsp;&nbsp;{article.title}</title>
          </Head>
          <Header value={getflexCanel}/>
          <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item>
                      <Button type='text' size='small' onClick={()=>routes.push("/")}>首页</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Button type='text' size='small' onClick={()=>routes.push("/list?kind="+kindKey+"&column=所有专栏")}>{article.type_id}列表</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Button type='text' size='small'>{article.title}</Button>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                      <Button type='primary' size='small' className='downLoadBtn' onClick={handleDownLoad}>导出文章</Button>
                      <Modal title="导出文章" open={isdownModalOpen} onCancel={()=>{setdownOpen(false)}}
                       footer={[
                        <Button type='primary' onClick={()=>{
                          setdownOpen(false)
                        }}>
                          返回
                        </Button>,
                      ]}
                      >
                        <div>
                          <div className='downInput'>
                            <Input addonBefore="提取码:" placeholder='请输入提取码！' type='password'
                            ref={downInput} status={downStatus} style={{border:"4px"}}/>
                          </div>
                          <div className='downBtn'>
                            <Button type='primary' danger onClick={downLoad("md")}>MarkDown文档（推荐）</Button>
                            <Button type='primary' danger onClick={downLoad("html")}>HTML文档（无样式）</Button>
                          </div>
                        </div>
                      </Modal>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>
      <div className='content-mid' >
        <div className='left detailNoneWhite' style={{marginRight: isToFocus[0]==false ? "20px" : "0px"}}>
            <div className='content-topDetail' id='blackStyle'>
              <div className='topTitle'>{article.title}</div>
              <div className='topInfo'>
                <span>文章类型：{article.type_id}</span>
                <span>阅读：{article.viewcount}</span>
                <span>更新于：{article.addtime}</span>
              </div>
              <div className='topInfo'>
                <span>文章标签：
                {article.tags.map((value,index2)=>{
                      return <Tag color={colorArr[index2]} size="large" key={index2}>{value}</Tag>
                    })}
                </span>
              </div>
              <Divider plain>文章简介</Divider>
              <div className='topIntroduce' dangerouslySetInnerHTML={{__html:htmlIntroduce}}>
              </div>
              {/* <Button type="primary" shape="round"  size="large" className='btn_focus' onClick={changeToFocus}>
                {isToFocus}
              </Button> */}
            </div>
            <div className="show-html" dangerouslySetInnerHTML={{__html:html}} id='blackStyle'>
            </div>
            <div className='commentsPart' >
              <div className='commentsTop' ref={commentsHeight}>
                <Button className='toComments' type='primary' size='large' onClick={()=>{setOpen(true)}} >
                  为文章评论与打分！
                </Button>
                <Modal
                open={open}
                title={<div style={{fontSize:"17px",fontWeight:"bold",color:"#00B96B"}}>为这篇文章打分或评论<Divider/></div>}
                onCancel={()=>{setOpen(false)}}
                footer={[
                  <div key={"mainFootre"}>
                    <Button type='primary' className='greenBtn' key={"submit"} onClick={handleSubmitComments}>
                      现在发布
                    </Button>
                    <Button onClick={()=>{setOpen(false)}} type='primary' className='greenBtn' key={"canel"}>
                      取消发布
                    </Button>
                  </div>
                ]}
              >
                <div className='mainComments'>
                <div className='partComments'>
                    <Button type='dashed' className='greenBtnSpe' style={{marginRight:"3.8vw"}}>你的昵称</Button>
                    <Input placeholder='输入你的昵称，随便取！' className='greenTextarea' ref={refKidName}/>
                  </div>
                  <div className='partComments'>
                    <Button type='dashed' className='greenBtnSpe'>文章打分</Button>
                    <Rate allowHalf defaultValue={5}  tooltips={desc} 
                    onChange={(value)=>{setRate(value.toString())}}/>
                  </div>
                  <div className='partComments'>
                    <Button type='dashed' className='greenBtnSpe' style={{marginRight:"3.8vw"}}>文章评论</Button>
                    <TextArea placeholder="评论最长50字，请注意篇幅！ 输入框会自动适应高度" maxLength={50} className="greenTextarea"
                            autoSize={{minRows: 4,maxRows: 6,}}
                            ref={refText}/>
                  </div>
                </div>
              </Modal>
              </div>
              <Divider/>
              <div className='commentsList'>
              <List
                id='blackStyle'
                className='listf6'
                itemLayout="horizontal"
                dataSource={commentsGroup}
                header={<div className='titleComments'>全部评论</div>}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      title={
                      <div style={{fontSize:"16x",color:"#1e90ff"}}>
                        {item.name}
                        <Tag color={item.name=="hfLiu" ? "#f50" : "#108ee9"}
                         style={{marginLeft:"20px"}} 
                         size="small">
                        {item.name=="hfLiu" ? "作者" : "游客"}</Tag></div>
                    }
                      description={
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                          <div style={{fontWeight:"700"}}>{item.description}</div>
                          <div><Rate disabled value={item.rate} allowHalf/></div>
                        </div>
                      }
                    />
                  </List.Item>
                )}
              />
              </div>
            </div>
        </div>
        <div className='right' style={{display: isToFocus[0]==true ? "none" : "block"}}>
          <Author/>
          {/* <Advert/> */}
          <Affix offsetTop={5}>
                <div className="affix1">
                    <div className="nav-title">文章目录</div>
                    <MarkNav className="article-menu" source={article.content} ordered={false} updateHashAuto={true}
                    headingTopOffset={60}/>
                </div>
            </Affix>
        </div>
      </div>
      <Drawer title={<div style={{fontSize:"12px",}}><span className='helpTitle'>帮助中心</span>你可以在这里进行问题反馈和建议</div>} 
      placement="left" onClose={()=>{setOpenFlex(false)}} open={openFlex}>
        <HelpCenter value={getflexCanel}/>
      </Drawer>

        <FloatButton.Group shape="circle" style={{right: 28,}}>
          <Tooltip title="评论区" placement='left' >
              <FloatButton icon={<QuestionCircleOutlined />} onClick={toCommentsPart} type="primary"/>
          </Tooltip>
          <Tooltip title="反馈建议" placement='left' >
              <FloatButton icon={<SyncOutlined />}  onClick={()=>{setOpenFlex(true)}} type="primary"/>
          </Tooltip>
          <Tooltip title="返回顶部" placement='left' >
              <FloatButton.BackTop visibilityHeight={0} type="primary"/>
          </Tooltip>
        </FloatButton.Group>
      <Footer/>
    
       </div>
      )
}

Detailed.getInitialProps = async (context) => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const show = await res.json()

  let res=await axios(`https://apii.hfliu.com/default/getArticleDetail?id=${context.query.id}`);
  // const data = await res.json()
  return {article:res.data};
}

export default Detailed
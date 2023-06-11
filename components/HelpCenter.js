import style from "../styles/componentsStyle/HelpCenter.module.css"
import { Button, Divider,Input,Select,notification,Space,Tour } from "antd";
import { useRef, useState,useEffect } from 'react';
import axios from "axios";
const { TextArea } = Input;
const {Option}=Select;
const HelpCenter = (props)=>{


    // const ref1 = useRef(null);
    // const ref2 = useRef(null);
    // const ref3 = useRef(null);
    // const [open, setOpen] = useState(true);

    const [kidName,setKidName]=useState("游客");

    const [errorKind,setErrorKind]=useState("");

    const [webAdviseKind,setWebAdviseKind]=useState("");

    const [articleAdviseKind,setArticleAdviseKind]=useState("");



    const refKidName=useRef();
    const refWebAdvise=useRef();
    const refArticleAdvise=useRef();
    const refErrorDes=useRef();








    const handleSubmit=(item)=>{
        return ()=>{
            let userKidName=refKidName.current.input.value;
            let userErrorDes=refErrorDes.current.resizableTextArea.textArea.value;
            let userWebDes=refWebAdvise.current.resizableTextArea.textArea.value;
            let userArticleDes=refArticleAdvise.current.resizableTextArea.textArea.value;
            if(userKidName.trim()==""){
                notification.error({
                    message:"信息错误错误！",
                    description:"错误原因：昵称不能为空        随便取个就行",
                    duration:7,
                })
                
            }
            else{
                if(item==1){
                    if(userErrorDes.trim()==""||errorKind.trim()==""){
                        notification.error({
                            message:"信息错误错误！",
                            description:"错误原因：反馈类型或反馈信息为空哦",
                            duration:7,
                        })
                    }
                    else{
                        let value={kidName:userKidName,type:["异常反馈",errorKind],description:userErrorDes}
                        axios.post("http://101.42.225.134:7001/default/getCallBack",value)
                        .then((value)=>{
                            props.value(false);
                            notification.success({
                                message:"网站异常反馈成功",
                                description:"游客您好！非常感激你能够发现网站漏洞，bug会尽快修复，网站将会更加稳定、完美",
                                duration:8
                            })
                        })
                        .catch(()=>{console.log("失败了");})
                    }
                }
                else if(item==2){
                    if(userWebDes.trim()==""||webAdviseKind.trim()==""){
                        notification.error({
                            message:"信息错误错误！",
                            description:"错误原因：建议类型或建议信息为空哦",
                            duration:7,
                        })
                    }
                    else{
                        let value={kidName:userKidName,type:["网站建设",webAdviseKind],description:userWebDes}
                        axios.post("http://101.42.225.134:7001/default/getCallBack",value)
                        .then((value)=>{
                            props.value(false);
                            notification.success({
                                message:"网站异常反馈成功",
                                description:"游客您好！非常感激你能够发现网站漏洞，bug会尽快修复，网站将会更加稳定、完美",
                                duration:8
                            })
                        })
                        .catch(()=>{console.log("失败了");})
                    }
                }
                else if(item==3){
                    if(userArticleDes.trim()==""||articleAdviseKind.trim()==""){
                        notification.error({
                            message:"信息错误错误！",
                            description:"错误原因：建议类型或建议信息为空哦",
                            duration:7,
                        })
                    }
                    else{
                        let value={kidName:userKidName,type:["文章建议",articleAdviseKind],description:userArticleDes}

                        axios.post("http://101.42.225.134:7001/default/getCallBack",value)
                        .then((value)=>{
                            props.value(false);
                            notification.success({
                                message:"网站异常反馈成功",
                                description:"游客您好！非常感激你能够发现网站漏洞，bug会尽快修复，网站将会更加稳定、完美",
                                duration:8
                            })
                        })
                        .catch(()=>{console.log("失败了");})
                    }
                }
            }


        }
    }


    return (
        <div className={style.mainDiv}>
            <div className={style.partItem} style={{marginBottom:"36px"}}>
                <Button type="dashed" style={{marginRight:"30px"}} >你的昵称</Button>
                <Input placeholder="随便取就行" ref={refKidName}/>
            </div>
            <div className={style.partPanel} >
                <div className={style.partItem}>
                    <span style={{color:"#1e90ff",fontWeight:"700",fontSize:"18px",marginBottom:"26px"}}>异常信息反馈</span>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" >异常类型</Button>
                    <Select defaultValue={"异常类型"} size="normal"
                    style={{fontWeight:700}}  onChange={(value)=>{setErrorKind(value)}}>
                      <Option key="功能失效" value="功能失效" ></Option>
                      <Option key="页面样式" value="页面样式"></Option>
                      <Option key="信息输入" value="信息输入"></Option>
                      <Option key="其它类型" value="其它类型"></Option>
                    </Select>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" style={{marginRight:"30px"}}>具体异常</Button>
                    <TextArea placeholder="输入异常信息" allowClear ref={refErrorDes}/>
                </div>
                <div className={style.partItem}>
                    <Button onClick={handleSubmit(1)}
                    style={{width:"100%",backgroundColor:"#00B96B",marginTop:"14px"}} type="primary">提交异常</Button>
                </div>
            </div>
            <div className={style.partPanel} >
                <div className={style.partItem}>
                    <span style={{color:"#1e90ff",fontWeight:"700",fontSize:"18px",marginBottom:"26px",marginTop:"20px"}}>网站建设建议</span>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" >建设类型</Button>
                    <Select defaultValue={"建设类型"} size="normal"
                    style={{fontWeight:700}} onChange={(value)=>{setWebAdviseKind(value)}}>
                      <Option key="网站UI" value="网站UI" ></Option>
                      <Option key="功能交互" value="功能交互"></Option>
                      <Option key="技术建构" value="技术建构"></Option>
                      <Option key="网络安全" value="网络安全"></Option>
                      <Option key="其它类型" value="其它类型"></Option>

                    </Select>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" style={{marginRight:"30px"}}>具体建议</Button>
                    <TextArea placeholder="输入具体建议" allowClear ref={refWebAdvise}/>
                </div>
                <div className={style.partItem}>
                    <Button onClick={handleSubmit(2)}
                    style={{width:"100%",backgroundColor:"#00B96B",marginTop:"14px"}} type="primary" >提交建议</Button>
                </div>
            </div>
            <div className={style.partPanel} style={{border:"0px"}}>
                <div className={style.partItem}>
                    <span style={{color:"#1e90ff",fontWeight:"700",fontSize:"18px",marginBottom:"26px",marginTop:"20px"}}>文章内容建议</span>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" >内容类型</Button>
                    <Select defaultValue={"内容类型"} size="normal"
                    style={{fontWeight:700}} onChange={(value)=>{setArticleAdviseKind(value)}}>
                      <Option key="前端技术" value="前端技术"></Option>
                      <Option key="理论学习" value="理论学习"></Option>
                      <Option key="生活分享" value="生活分享"></Option>
                      <Option key="通用技术" value="通用技术"></Option>
                      <Option key="其它类型" value="其它类型"></Option>

                    </Select>
                </div>
                <div className={style.partItem}>
                    <Button type="dashed" style={{marginRight:"30px"}}>具体内容</Button>
                    <TextArea placeholder="输入具体建议" allowClear ref={refArticleAdvise}/>
                </div>
                <div className={style.partItem}>
                    <Button onClick={handleSubmit(3)}
                    style={{width:"100%",backgroundColor:"#00B96B",marginTop:"14px"}} type="primary">提交建议</Button>
                </div>
            </div>
            {/* <Tour open={open} onClose={() => setOpen(false)} steps={steps} mask="true" type="primary"/> */}
        </div>
    )
 }

 export default HelpCenter
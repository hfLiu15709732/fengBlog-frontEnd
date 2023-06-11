import style from "../styles/componentsStyle/columnList.module.css"
import { Button, Divider,Collapse } from "antd";
import { useRouter } from "next/router";
const { Panel } = Collapse;
const ColumnList = ()=>{

    const routed=useRouter();


    const onChange = (key) => {
        console.log(key);
      };


    return (
        <div className={style.mediaDiv}>
            <span style={{color:"#1e90ff",fontWeight:"700",marginLeft:"10px"}}>网页专栏导航</span>
            <Divider style={{marginBottom:"9px",marginTop:"14px"}}/>
            <Collapse  onChange={onChange}>
            <Panel header="前端学习板块" key="1">
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=HTML")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>HTML</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=CSS")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>CSS</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=JavaScript")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>JavaScript</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=后台开发")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>后台开发</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=数据库")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>数据库</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=框架学习")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>框架学习</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=2&column=Http网络")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>Http网络</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
            </Panel>
            <Panel header="技术分享板块" key="2">
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/list?kind=1")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>后端开发</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns}  onClick={()=>{routed.push("/list?kind=1")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>数据结构与算法</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <div className={style.mediaBtns}  onClick={()=>{routed.push("/list?kind=1")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>计算机网络</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <Button disabled className={style.mediaBtn} type="text">等待后续开发</Button>
            </Panel>
            <Panel header="生活分享板块" key="3">
                    <div className={style.mediaBtns}  onClick={()=>{routed.push("/list?kind=3")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>摄影</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <Button disabled className={style.mediaBtn} type="text">等待后续开发</Button>
            </Panel>
            <Panel header="更多产品板块" key="4"  >
                    <div className={style.mediaBtns} onClick={()=>{routed.push("/websiteCli")}}>
                        <div style={{fontWeight:700,fontSize:"16px"}}>网站建设</div>
                        <div><Button type="primary" size="small" >Run</Button></div>
                    </div>
                    <Button disabled className={style.mediaBtn} type="text">等待后续开发</Button>
            </Panel>
            </Collapse>

        </div>
    )
 }

 export default ColumnList
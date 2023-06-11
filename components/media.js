import style from "../styles/componentsStyle/media.module.css"
import { Button, Divider } from "antd";
import { useRouter } from "next/router";
const Media = ()=>{

    const routed=useRouter();


    return (
        <div className={style.mediaDiv}>
            <span style={{color:"#1e90ff",fontWeight:"700",marginLeft:"10px"}}>Medias</span>
            <Divider style={{marginBottom:"9px",marginTop:"14px"}}/>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://github.com/hfLiu15709732")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Github</div>
                <div><Button type="primary" size="small"   >To</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://react.docschina.org/")}} >
                <div style={{fontWeight:700,fontSize:"16px"}}>WeChat</div>
                <div><Button type="primary" size="small" >To</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://www.bootcdn.cn/")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Weibo</div>
                <div><Button type="primary" size="small" >To</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://juejin.cn/user/2388600888493912")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>稀土掘金</div>
                <div><Button type="primary" size="small" >To</Button></div>
            </div>

        </div>
    )
 }

 export default Media
import style from "../styles/componentsStyle/links.module.css"
import { Button, Divider } from "antd";
import { useRouter } from "next/router";
const Links = ()=>{
    const routed=useRouter();
    return (
        <div className={style.mediaDiv}>
            <span style={{color:"#1e90ff",fontWeight:"700",marginLeft:"10px"}}>Links</span>
            <Divider style={{marginBottom:"9px",marginTop:"14px"}}/>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://www.ruanyifeng.com/")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>阮一峰博客</div>
                <div><Button type="primary" size="small" danger  >Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://react.docschina.org/")}} >
                <div style={{fontWeight:700,fontSize:"16px"}}>React中文文档</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://www.bootcdn.cn/")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>BootCDN</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://ant.design/index-cn")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Ant-Design</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://www.eggjs.org/zh-CN")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Egg.js文档</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://cn.vuejs.org/")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Vue.js文档</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
            <div className={style.mediaBtns} onClick={()=>{routed.push("https://www.nextjs.cn/")}}>
                <div style={{fontWeight:700,fontSize:"16px"}}>Next.js中文文档</div>
                <div><Button type="primary" size="small" danger>Link</Button></div>
            </div>
        </div>
    )
 }

 export default Links
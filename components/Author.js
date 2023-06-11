import style from "../styles/componentsStyle/Author.module.css"
import { Avatar,Divider,Button } from "antd" 
import { useRouter } from "next/router";
function Author(){


    const routed=useRouter();
    return(
        <div className={style.authorDiv}>
            <div> <Avatar size={120} style={{border:"3px solid #f7bd0c"}} src="https://testpic-1316646528.cos.ap-guangzhou.myqcloud.com/pic1111.jpg" /></div>
            <div className={style.authorIntroduction}>
                2021级计算机科学与技术学生--前端开发方向
                <p>&nbsp;</p>
                <p>主要技术栈:</p>
                    React&nbsp;&nbsp;
                    Egg.js&nbsp;&nbsp;
                    MySQL&nbsp;&nbsp;
                    Next.js&nbsp;&nbsp;

                <br></br>
                <Button className={style.btnSource} type="primary" onClick={()=>{routed.push("https://github.com/hfLiu15709732")}}>所有资源</Button>
                <br></br>
                <div className={style.infoCardDiv}>
                    <span className={style.infoCard}>
                        <p>文章总数</p>
                        <br></br>
                        <p>10</p>
                    </span>
                    <span className={style.infoCard}>
                        <p>阅读总数</p>
                        <br></br>
                        <p>1876</p>
                    </span>
                    <span className={style.infoCard}>
                        <p>前端相关</p>
                        <br></br>
                        <p>8</p>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Author
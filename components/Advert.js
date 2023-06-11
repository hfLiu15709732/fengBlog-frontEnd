import style from "../styles/componentsStyle/Advert.module.css"
import {Ad}from '@icon-park/react';
import { Button } from "antd";
const Advert = ()=>{
    return (
        <div className={style.adDiv}>
          <Button type="text">
          <Ad theme="outline" size="19" fill="#d0021b" strokeWidth={3} strokeLinecap="square"/>&nbsp;
          公益广告
          </Button>
          <img src="https://img.zcool.cn/community/0120c658895d22a8012060c8999a45.JPG@1280w_1l_2o_100sh.jpg"/>
        </div>
    )
 }

 export default Advert
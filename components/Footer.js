import style from "../styles/componentsStyle/Footer.module.css"
function Footer(){


    return(
        <div className={style.footerDiv}>
            <div style={{marginBottom:"7px"}}>
                <a href="https://beian.miit.gov.cn/" target="_blank" style={{color:"#fff"}}>津ICP备2023000487号</a>
            </div>
            <div style={{marginBottom:"15px"}}>
                Copyright&nbsp;2023&nbsp;&nbsp;&nbsp;hfLiu.com&nbsp;版权所有
            </div>
        </div>
    )

}

export default Footer
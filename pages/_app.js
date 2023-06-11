import '@/styles/globals.css'
import "../styles/pagesStyle/common.css"
import "../styles/pagesStyle/index.css"
import '@icon-park/react/styles/index.css';
import "../styles/pagesStyle/myList.css"
import "../styles/pagesStyle/detailed.css"
import "../styles/pagesStyle/websiteCli.css"
import 'markdown-navbar/dist/navbar.css';
import "highlight.js/styles/monokai-sublime.css";
import "swiper/css/bundle"

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}



import { create } from 'zustand'//导入zustand的create方法

export const useStuStore = create((set) => ({
    articleList:[],

  	updateArticle: (newList) => {    
    	set((state) => ({articleList:newList}))
  	},//因为是博客前台不涉及增删等操作，核心文章仅涉及更新与检索
    
}))

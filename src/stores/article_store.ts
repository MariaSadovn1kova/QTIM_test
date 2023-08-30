import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('acticle', () => {

  async function getArticles(){
    const res = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/')
    const data = await res.json()

    return data
  }

  async function getOneArticle(articleID: number){
    const res = await fetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/' + articleID)
    const data = await res.json()

    return data
  }

  return { getArticles, getOneArticle }
})

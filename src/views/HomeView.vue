<script setup lang="ts">
import { useArticleStore } from '../stores/article_store';
import { onBeforeMount, ref } from 'vue';
import ArticleMinCard from '../components/ArticleMinCard.vue';

interface Article {
  id: number;
  image: string;
  preview: string, 
  title: string,
  description: string
}

const articleStore = useArticleStore();
const articlesList = ref<Article[]>([]);
const loading = ref(true);
const pageNumber = ref(0);

function setPage(page: number){
  pageNumber.value = page
}

function pageCount(){
  let l = articlesList.value.length,
      s = 8;
  return Math.ceil(l/s);
}

function paginatedData(){
  const start = pageNumber.value * 8,
        end = start + 8;
  return articlesList.value.slice(start, end);
}

onBeforeMount(async () => { 
  const data = await articleStore.getArticles();

  for (let i = 0; i < data.length; i++){
    let article: Article = {
      id: data[i].id, 
      image: data[i].image, 
      preview: data[i].preview,
      title: data[i].title,
      description: data[i].description
    }
    
    loading.value = false;
    articlesList.value.push(article)
  }
})
</script>

<template>
  <div class="articles">

    <div class="articles__header">Articles</div>

    <div class="spin" v-if="loading"></div>
    <div class="articles__container" v-else>
      <article-min-card v-for="article in paginatedData()" :key="article.id" :article = 'article'/>
    </div>

    <div class="articles__pagination">
      <div v-for="page in pageCount()" :key="page" class="articles__pagination__item" :class="{'active': page == pageNumber + 1}" @click="setPage(page - 1)">{{ page }}</div>
      <div @click="setPage(pageNumber + 1)" class="articles__pagination__item">></div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@keyframes spinner {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
.spin::before {
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px var(--grey-soft);
  border-bottom-color: var(--pink);
  border-radius: 50%;
  content: "";
  height: 40px;
  width: 40px;
  position: absolute;
  top: 10%;
  left: 10%;
  transform: translate3d(-50%, -50%, 0);
  will-change: transform;
}

.articles{
  padding: 120px 140px;

  &__header{
    font-size: 84px;
    margin-bottom: 19px;
  }

  &__container{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  &__pagination{
    display: flex;

    &__item{
      width: 44px;
      height: 44px;
      padding: 5px 0;
      text-align: center;
      margin-right: 10px;
      border-radius: 10px;
      background-color: var(--white-soft);
      transition: 0.3s;

      &:hover{
        cursor: pointer;
        background-color: var(--grey-soft);
      }

      &.active{
        background-color: var(--black);
        color: var(--white);
      }
    }
  }
}
</style>

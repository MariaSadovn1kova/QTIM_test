<script setup lang="ts">
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from 'vue';
import { useArticleStore } from '../stores/article_store';

interface Article {
  id: number;
  image: string;
  preview: string, 
  title: string,
  description: string
}
let defautAcrticle: Article = {
    id: 0, 
    image: "", 
    preview: "",
    title: "",
    description: ""
}

const route = useRoute();
const idArticle = Number(route.params.id);
const articleStore = useArticleStore();
const article = ref(defautAcrticle);
const loading = ref(true);

onBeforeMount(async () => { 
  article.value = await articleStore.getOneArticle(idArticle)
  loading.value = false
})
</script>

<template>
    <div class="spin" v-if="loading"></div>
    <div class="article" v-else>
        <div class="article__title">{{ article.title }}</div>

        <div class="article__img">
            <img :src="article.image" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80';">
        </div>

        <div class="article__info">
            <p class="article__info__about">About</p>
            <p class="article__info__descr">{{ article.description }}</p>
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

.article{
    padding: 120px 144px;

    &__title{
        font-size: 84px;
    }

    &__img{
        margin-top: 40px;

        img{
            width: 100%;
            height: 700px;
            object-fit:cover;
        }
    }

    &__info{
        margin-top: 80px;

        &__about{
            font-size: 16px;
        }

        &__descr{
            margin-top: 32px;
            font-size: 36px;
            width: 60%;
        }
    }
}
</style>
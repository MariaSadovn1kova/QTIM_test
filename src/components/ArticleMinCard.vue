<script setup lang="ts">
const props = defineProps({
    article: {
        type: Object, 
        required: true
    },
})
</script>

<template>
    <router-link :to="'/article/' + article.id" class="link__container">

        <div class="article-card">
            <img class="article-card__img" :src="article.image"  onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80';">

            <div class="article-card__info">
                <p>{{ article.preview.slice(0, 65) + '...'}}</p>
                <li>Read more</li>
            </div>
            
        </div>

    </router-link>
</template>

<style lang="scss" scoped>
.link__container{
    text-decoration: none;
    
    .article-card{
        width: 280px;
        height: 385px;
        margin: 47px 32px 0 0;
        overflow: hidden; 
        transition: 0.3s;
        color: var(--black);

        &:hover{
            cursor: pointer;
            margin-top: 10px;
            height: 415px;
        }

        &__img{
            width: 280px;
            height: 280px;
            object-fit:cover;
        }

        &__info{

            p {
                height: 100px;
            }

            li {
                list-style-type: none;
                color: var(--pink);
            }
        }
    }
}
</style>
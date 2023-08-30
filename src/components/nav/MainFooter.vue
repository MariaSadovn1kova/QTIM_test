<script setup lang="ts">
</script>

<template>
    <div class="footer">

        <div class="footer__info">

            <div class="footer__info__left">
                <div class="footer__info__left__sub">Is there a project?</div>
                <div class="footer__info__left__main">Let’s work together</div>
            </div>

            <div class="footer__info__right">
            
                <div class="info__block">   
                    <div class="info__block__title">For all questions</div>
                    <div class="info__block__deskr">+7 (920) 278—00—68</div>
                    <div class="info__block__deskr">qtim@agency.com</div>
                </div>

                <div class="info__block">   
                    <div class="info__block__title">Office in Russia</div>
                    <div class="info__block__deskr">139 Ruben Station Lake Drew, NM 52678</div>
                    <div class="info__block__img">
                        <img src="../../assets/img/button-location.svg">
                    </div>
                </div>

                <div class="info__block">   
                    <div class="info__block__title">Office in Dubai</div>
                    <div class="info__block__deskr">139 Ruben Station Lake Drew, NM 52678</div>
                    <div class="info__block__img">
                        <img src="../../assets/img/button-location.svg">
                    </div>
                </div>

            </div>
        </div>

        <div class="footer__links">

            <div class="footer__links__container">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Telegram</li>
            </div>

            <div class="footer__links__btn">Go</div>

            <div class="footer__links__container">
                <li>Behance</li>
                <li>Linkedn</li>
                <li>Privacy Policy</li>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.footer{
    height: 900px;
    background-color: var(--pink);
    display: flex;
    flex-direction: column;

    &__info{
        display: flex;
        padding: 140px 112px 0 112px;

        &__left{

            &__sub{
                font-size: 16px;
            }

            &__main{
                width: 500px;
                font-size: 112px;
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 20px;
                line-height: 1.3em;
                &:hover{
                    cursor: default;
                }
            }
        }

        &__right{
            margin-left: auto;
            width: 30%;

            .info__block{
                margin-bottom: 36px;

                &__title{
                    margin-bottom: 12px;
                }

                &__deskr{
                    width: 200px;
                }

                &__img{
                    margin-top: 10px;

                    img{
                        height: 40px;

                        &:hover{
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }

    &__links{
        display: flex;
        justify-content: space-between;
        margin-top: auto;
        padding: 0px 82px;

        &__container{
            display: flex;

            li{
                list-style-type: none;
                text-decoration: underline;
                text-decoration-thickness: 1px;
                text-underline-offset: 10px;
                padding: 30px;
                transition: 0.3s;
                padding-top: 90px;

                &:hover{
                    cursor: pointer;
                    text-underline-offset: 15px;
                }
            }

        }

        &__btn{
            width: 358px;
            height: 179px; 
            border-radius: 50% 50% 0 0 / 100% 100% 0 0;
            background: var(--black);
            color: var(--white);
            padding: 105px 0 0 160px;
            font-size: 32px;

            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>
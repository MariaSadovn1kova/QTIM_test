<script>
</script>

<template>
  <div class="navbar">

    <div class="navbar__logo">
        <img src="../../assets/img/Qtim.svg">
    </div>

    <div class="navbar__links">
        <li>Works</li>
        <li>About</li>
    </div>

    <div class="navbar__buttons">
        <button class="navbar__buttons__item lang">
            <img src="../../assets/img/united kingdom.svg">
        </button>
        <button class="navbar__buttons__item action">Let’s work</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.navbar{
    height: 121px;
    display: flex;
    padding: 35px;

    &__links{
        margin-left: auto;
        display: flex;

        li{
            list-style-type: none;
            padding: 5px 30px;
            transition: 0.3s;

            &:hover{
                cursor: pointer;
                color: var(--grey);
            }
        }
    }

    &__buttons{
        display: flex;
        margin-left: 60px;

        &__item{
            border: none;
            background: none;

            &:hover{
                cursor: pointer;
            }

            &.lang{
                width: 52px;
                height: 52px;
                padding: 2px 0 0 0;
                border-radius: 100%;
                border: 1px solid var(--grey-soft);
                margin-right: 20px;

                img{
                    width: 24px;
                    height: 24px;
                }
            }

            &.action{
                background-color: var(--black);
                color: var(--white);
                height: 52px;
                width: 142px;
                border-radius: 50px;
                font-size: 20px;
            }
        }
    }
}
</style>
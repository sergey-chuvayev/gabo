<script setup lang="ts">
import { ref } from "vue";
import ArticleArea from "../components/ArticleArea.vue";
import ClockHomeVue from "@/components/ClockHome.vue";

let secondsAngle = ref<number>();
let minutesAngle = ref<number>();
let hoursAngle = ref<number>();
setInterval(() => {
  const time = new Date();
  secondsAngle.value = (360 / 60) * time.getSeconds();
  minutesAngle.value = (360 / 60) * time.getMinutes();
  hoursAngle.value = (360 / 12) * time.getHours();
}, 1000);
</script>

<template>
  <ArticleArea>
    <div class="app_container__block">
      <div class="home">
        <img src="/Logogabocropped.png" class="home__logo" />
        <div class="home__title">
          <img src="/delimiter1.svg" alt="delimiter" />
          <div class="title__text">Amicale du Gabo</div>
          <img src="/delimiter2.svg" alt="delimiter" />
        </div>
        <ClockHomeVue />
        <div class="home__quote">
          <div class="home__quote__text">
            "Le temps s'écoule sans faire de bruit"
          </div>
          <div class="home__quote__author">
            Gabriel Garcia Marquez, La Mala Hora (1962)
          </div>
        </div>
      </div>
    </div>
  </ArticleArea>
</template>

<style scoped>
.menu-btn {
  height: 25px;
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 24px;
}

.home__logo {
  height: 141px;
  margin-top: 75px;
}

.home__title {
  font-family: "Milonga", cursive;
  font-size: 54px;
  text-align: center;
}

.home__quote {
  font-family: "Lancelot", cursive;
  text-align: center;
  margin-bottom: 30px;
}
.home__quote__text {
  font-size: 38px;
}
.home__quote__author {
  font-size: 26px;
}
</style>

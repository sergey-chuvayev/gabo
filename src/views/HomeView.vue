<script setup lang="ts">
import { ref } from "vue";
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
  <div class="app_container__block">
    <div class="home">
      <img src="/logo.svg" class="home__logo mb-6" />
      <div class="home__title">
        <img src="/delimiter1.svg" class="delimiter" alt="delimiter" />
        <div class="title__text mb-4">Amicale du Gabo</div>
        <img src="/delimiter2.svg" class="delimiter" alt="delimiter" />
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
}

.delimiter {
  margin: 0 auto;
}

.home__logo {
  height: 141px;
}

.home__title {
  font-family: "Milonga", cursive;
  font-size: 44px;
  text-align: center;
  line-height: 50px;
}

.home__quote {
  font-family: "Lancelot", cursive;
  text-align: center;
  margin-bottom: 30px;
}
.home__quote__text {
  font-size: 38px;
  line-height: 42px;
  margin-top: 24px;
}
.home__quote__author {
  font-size: 26px;
  line-height: 31px;
  margin-top: 30px;
}
</style>

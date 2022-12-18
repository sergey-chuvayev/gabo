<script setup lang="ts">
import { ref } from "vue";
import ArticleArea from "../components/ArticleArea.vue";

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
  <ArticleArea> home </ArticleArea>
  <div class="watch">
    <div :style="{ transform: `rotate(${secondsAngle}deg)` }" class="arrow" />
    <div :style="{ transform: `rotate(${minutesAngle}deg)` }" class="arrow" />
    <div :style="{ transform: `rotate(${hoursAngle}deg)` }" class="arrow" />
  </div>
</template>

<style scoped>
.watch {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
}
.arrow {
  height: 100px;
  width: 1px;
}
.arrow::after {
  content: "";
  background: #000;
  width: 1px;
  height: 50px;
  position: absolute;
}
</style>

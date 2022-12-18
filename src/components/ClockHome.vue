<script setup lang="ts">
import { ref } from "vue";

let secondsAngle = ref<number>();
let minutesAngle = ref<number>();
let hoursAngle = ref<number>();
setInterval(() => {
  const time = new Date();
  secondsAngle.value = (360 / 60) * time.getSeconds();
  minutesAngle.value = (360 / 60) * time.getMinutes() + 90;
  hoursAngle.value = (360 / 12) * time.getHours() + 90;
}, 1000);
</script>

<template>
  <div class="watch">
    <div
      :style="{ transform: `rotate(${secondsAngle}deg)` }"
      class="seconds arrow"
    />
    <div
      :style="{ transform: `rotate(${minutesAngle}deg)` }"
      class="minutes arrow"
    />
    <div
      :style="{ transform: `rotate(${hoursAngle}deg)` }"
      class="hours arrow"
    />
  </div>
</template>

<style scoped>
.watch {
  width: 120px;
  height: 120px;
  position: relative;
  display: flex;
  justify-content: center;
  background: url("https://github.com/umarcbs/AnalogCLock/blob/master/clock-face2.png?raw=true");
  background-size: 100% 100%;
}
.arrow {
  width: 35%;
  height: 5px;
  background-color: var(--color-dark);
  position: absolute;
  border-radius: 2px;
  top: 49.5%;
  left: 17.5%;
  transform-origin: 95%;
  transform: rotate(90deg);
  transition: all 0.1s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}
.seconds {
  height: 1px;
}
.minutes {
  height: 2px;
}
.hours {
  height: 4px;
  width: 20%;
  left: 31.8%;
  top: 50%;
}
</style>

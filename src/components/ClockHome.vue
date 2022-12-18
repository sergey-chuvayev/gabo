<!-- <script setup lang="ts">
import { defineProps } from "vue";




  public time: Date = new Date();
  public secondHandStyle: string = '';
  public minutesHandStyle: string = '';
  public hoursHandStyle: string = '';
  private interval = setInterval(() => {
    this.refreshTime();
 }, 1000);




  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  refreshTime() {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegree = (360 / 60) * seconds + 90;
    const minutesDegree = (360 / 60) * minutes + 90;
    const hoursDegree = ((360/12) * hours) + 90 + (minutesDegree/12 - 8);

    this.secondHandStyle = `transform: rotate(${secondsDegree}deg)`;
    this.minutesHandStyle = `transform: rotate(${minutesDegree}deg)`;
    this.hoursHandStyle = `transform: rotate(${hoursDegree}deg)`;

  }

  
  public setDate() {

    const min = now.getMinutes()
    const minsDegree = ((360/60) * min) + 90;
    this.minHand.style.transform = `rotate(${minsDegree}deg)`;
    this.minHand.style.transition = minsDegree === 90 ? 'all 0s' : 'all 0.05s';
    this.minHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    this.minHand.style.transform = `rotate(${minsDegree}deg)`;

    const hour = now.getHours();
    // to give a realistic hour hand (minsDegree/12 - 8) was added to normal hoursDegree.
    // this serves to ofset the hour hand gradually as the minute hand moves
    // the -8 counters the +90 offset of the original minsDegree
    const hoursDegree = ((360/12) * hour) + 90 + (minsDegree/12 - 8);
    this.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
    this.hourHand.style.transition = hoursDegree === 90 ? 'all 0s' : 'all 0.05s';
    this.hourHand.style['transition-timing-function'] = 'cubic-bezier(0.1, 2.7, 0.58, 1)';
    this.hourHand.style.transform = `rotate(${hoursDegree}deg)`;
  }

  setInterval(setDate, 1000);
}

</script>




<template>
  <body>
  <div class="clock">
    <div class="clock-face">
      <div [style]="hoursHandStyle" class="hand hour-hand"></div>
      <div [style]="minutesHandStyle" class="hand min-hand"></div>
      <div [style]="secondHandStyle" class="hand second-hand"></div>
    </div>
  </div>
</body>
</template>

<style scoped>
body {
  background: transparent;
  background-color: transparent;
}
.clock {
  border-radius: 50%;
  display: flex;
  position: relative;
}

.clock-face {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background: url('https://github.com/umarcbs/AnalogCLock/blob/master/clock-face2.png?raw=true');
  background-size: 100% 100%;
}

.hand {
  width: 35%;
  height: 6px;
  background-color: black;
  position: absolute;
  border-radius: 2px;
  top: 49.5%;
  left: 17.5%;
  transform-origin: 95%;
  transform: rotate(90deg);
  transition: all .1s;
  transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
}

.second-hand {
  height: 3px;
}

.hour-hand {
  width: 20%;
  left: 31.8%;
  top: 50%;
}
</style> -->

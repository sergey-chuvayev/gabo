<script setup lang="ts">
import ClockHomeVue from "@/components/ClockHome.vue";
</script>

<template>
  <div class="header-container">
    <img src="/logo.svg" class="header-container__logo" />
    <div class="header-container__title">
      <img src="/delimiter1.svg" class="header-container__delimiter" alt="delimiter" />
      <div class="title__text mb-4">Amicale du Gabo</div>
      <img src="/delimiter2.svg" class="header-container__delimiter" alt="delimiter" />
    </div>
    <div class="header-container__quote">
      <div class="header-container__quote__text">
        "Le temps s'écoule sans faire de bruit"
      </div>
      <div class="header-container__quote__author">
        Gabriel Garcia Marquez, La Mala Hora (1962)
      </div>
    </div>
  </div>
  <div class="menu-container">
    <div class="menu-container__box">
      <RouterLink to="/rules" class="menu-container__link">
        Règles officielles
      </RouterLink>
      <RouterLink to="/variants" class="menu-container__link">
        Variantes
      </RouterLink>
    </div>
    <ClockHomeVue />
    <div class="menu-container__box">
      <RouterLink to="/game" class="menu-container__link">
        Compter les points
      </RouterLink>
      <RouterLink to="/about" class="menu-container__link">
        Qui sommes-nous?
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  top: -35px;
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 16px;
}


.menu-container__link {
  text-decoration: none;
  font-size: 22px;
  color: var(--color-dark);
}

.menu-container__box {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 70px;
  border-top: 1px solid var(--color-dark);
  border-bottom: 2px double var(--color-dark);
  align-items: center;
  width: 40%;
}

.header-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 141px;
  justify-content: space-between;
}

.header-container__logo {
  height: 141px;
}

.header-container__title {
  font-family: "Milonga", cursive;
  font-size: 44px;
  text-align: center;
  line-height: 50px;
}

.header-container__delimiter {
  margin: 0 auto;
}

.header-container__quote {
  font-family: "Lancelot", cursive;
  text-align: center;
  margin-bottom: 30px;
}

.header-container__quote__text {
  font-size: 38px;
  line-height: 42px;
  margin-top: 24px;
}

.header-container__quote__author {
  font-size: 26px;
  line-height: 31px;
  margin-top: 30px;
}


.menu-container__link{
  text-decoration: none;
  display: block;
  position: relative;
  padding: 4px 0;
}
.menu-container__link::before{
  content: "";
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  background: var(--color-dark);
  transition: 0.5s transform ease;
  transform: scale3d(0,1,1);
  transform-origin: 0 50%;
}
.menu-container__link:hover::before{
  transform: scale3d(1,1,1);
}
.menu-container__link ::before{
  transform-origin: 50% 50%;
  background: var(--color-dark);
}
</style>

<script setup lang="ts">


export default defineComponent({})
const closeMenu = () => {
  console.log(1);
};
const handleBackdropClick = () => {
  console.log(2);
}
</script>


<template>
  <div class="menu-container" :class="{ 'menu-container--is-visible': isOpen }">
    <ul class="menu-container__list">
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/">
          Accueil
        </a>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/rules">
          Règles officielles
        </a>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/variants">
          Variantes
        </a>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/countpoints">
          Compter les points
        </a>
      </li>
      <li>
        <div class="menu-container__list__delimiter"></div>
      </li>
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/whoarewe">
          Qui sommes-nous?
        </a>
      </li>
      <li :click="closeMenu()">
        <a class="menu-container__list__link" routerLink="/writetous">
          Nous écrire
        </a>
      </li>
    </ul>
    <button class="menu-container__backdrop" :click="handleBackdropClick()"></button>
  </div>

</template>

<style>
.menu-container {
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: left ease-in-out 200ms;
  display: flex;
  z-index: var(--menu-z);
}
.menu-container__list {
  width: 65%;
  background: var(--color-dark);
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  margin: 0;
  padding: 16px;
}

.menu-container--is-visible {
  left: 0;
}

.menu-container__backdrop {
  flex-grow: 1;
  background: none;
  border: none;
}

.menu-container__list__link {
  text-decoration: none;
  font-size: 22px;
  color: var(--color-light);
}

.menu-container__list__delimiter {
  background-color: var(--color-light);
  mask: url(../../../assets/delimiter2.svg) no-repeat center / contain;
  -webkit-mask: url(../../../assets/delimiter2.svg) no-repeat center / contain;
  height: 20px;
  width: 200px;
}

</style>

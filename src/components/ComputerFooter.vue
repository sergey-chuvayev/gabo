<script setup lang="ts">
</script>

<template>
  <div class="menu-container__footer-block">
    <RouterLink to="/contacts" class="menu-container__link contact">
      Nous écrire
    </RouterLink>
  </div>
</template>

<style scoped>
.menu-container__footer-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.menu-container__link {
  text-decoration: none;
  font-size: 22px;
  color: var(--color-dark);
  text-align: center;
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

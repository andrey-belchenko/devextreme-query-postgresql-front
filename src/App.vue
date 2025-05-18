<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import DxToolbar, { DxItem } from 'devextreme-vue/toolbar';

const router = useRouter();

const gridButtonOptions = {
  text: 'Grid',
  onClick: () => {
    router.push('/grid');
  },
};

const treeButtonOptions = {
  text: 'Tree',
  onClick: () => {
    router.push('/tree');
  },
};
</script>

<template>
  <div :class="$style.main">
    <div :class="$style.toolbar">
      <DxToolbar>
        <DxItem :options="gridButtonOptions" location="before" widget="dxButton" />
        <DxItem :options="treeButtonOptions" location="before" widget="dxButton" />
      </DxToolbar>
    </div>
    <div :class="$style.content">
      <RouterView />
    </div>
  </div>
</template>

<style module>
.main {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
}

.toolbar {
  margin: 0px 10px 0px 10px;
}

.content {
  flex: 1;
  position: relative;
  margin: 0px 10px 10px 10px;
}
</style>

<!-- <style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style> -->

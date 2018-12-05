<template>
  <div id="app">
    <section class="hero is-small is-warning is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-size-1">
            Eat Da Burger!
          </h1>
          <img src="./assets/logo.png" alt="BOIGAHS" class="boigahs">
        </div>
      </div>
    </section>
    <div class="box cta has-text-centered bun-back">
    <router-view />
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.boigahs {
  max-width: 400px;
}
.bun-back {
  background: #a77a33;
}
</style>

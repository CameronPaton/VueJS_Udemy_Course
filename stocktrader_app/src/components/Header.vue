<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stocktrader</router-link>
      </div>

      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <a href="#">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Save & Load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Save</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Load</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
</style>

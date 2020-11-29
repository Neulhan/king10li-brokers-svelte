<script>
  import Main from "./components/Main.svelte";
  import { Router, Route } from "svelte-routing";
</script>

<style lang="scss">
  @import "./scss/_definition.scss";
  nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vh;
    z-index: 2;
  }
  .page-wrapper {
    height: 100%;
  }
</style>

<Router>
  <div class="page-wrapper">
    <Route path="/" component={Main}></Route>
  </div>
</Router>

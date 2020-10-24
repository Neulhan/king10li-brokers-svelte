<script>
  import Main from "./components/Main.svelte";
  import BlogPost from "./components/BlogPost.svelte";
  import { Router, Link, Route } from "svelte-routing";
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
  <nav>
    <Link to="/">main</Link>
    <Link to="/blog/1">post1</Link>
    <Link to="/blog/2">post2</Link>
  </nav>
  <div class="page-wrapper">
    <Route path="/">
      <Main />
    </Route>
    <Route path="/blog/:id" let:params>
      <BlogPost id={params.id} />
    </Route>
  </div>
</Router>

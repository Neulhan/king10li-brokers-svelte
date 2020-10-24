<script>
  export let id;
  const md = require(`../markdown/${id}.md`);
</script>

<p>{id}</p>
<p>{md}</p>

<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/App.svelte -->

<script>
    export let name = 'World';
</script>

<main>
    <h1>Hello {name}!</h1>
    <p>Welcome to my Svelte home page.</p>
</main>

<style>
    main {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.5rem;
        line-height: 1.5;
    }
</style>

<script>
    import Home from "../components/home/home.svelte";
    import About from "../components/about/about.svelte";
    import Experience from "../components/experience/experience.svelte";
</script>

<style>
    main :global(.heading){
        font-size: max(2.625rem,min(5.56634vw + 1.32039rem,8rem));
    }

    main{
        color: #ffecd1;
    }
</style>

<main>
    <Home/>
    <About/>
    <Experience/>
</main>


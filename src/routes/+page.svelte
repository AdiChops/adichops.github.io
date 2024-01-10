<script>
    import Home from "../components/home/home.svelte";
    import About from "../components/about/about.svelte";
    import Experience from "../components/experience/experience.svelte";
    import Projects from "../components/projects/projects.svelte";
</script>

<style>
    main :global(.heading){
        font-size: max(2.625rem,min(5.56634vw + 1.32039rem,8rem));
    }
    #badge{
        background-color: #ffecd1;
        color: #000;
        padding: 1rem;
        text-align: center;
        font-size: 1rem;
    }
    main{
        color: #ffecd1;
    }
</style>
<p id="badge">This website is still a work in progress. This is the current progress I have made in the complete redux of my website. You can view my previous website by clicking <a href="https://web.archive.org/web/20240110074418/http://adichops.github.io/" target="_blank" style="color:inherit; font-weight: bold;">here</a>.</p>
<main>
    <Home/>
    <About/>
    <Experience/>
    <Projects/>
</main>


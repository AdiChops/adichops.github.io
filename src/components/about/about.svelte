<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/about/About.svelte -->
<div id="about">
    <div><img src="/images/adi.png" alt=""></div>
    <div>
        <p class="heading">Hi! I'm Adi.</p>
        <p id="subtitle">{description}</p>
    </div>
</div>

<style>
    #about{
        display: grid;
        grid-template-columns: 1fr 2fr;
        width: 98%;
    }
    p{
        font-size: max(1.25rem,min(.2589vw + 1.18932rem,1.5rem));
    }
</style>

<script>
    export const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
</script>
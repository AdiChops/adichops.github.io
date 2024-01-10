<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/about/About.svelte -->
<div id="about">
    <div id="img"><img src="/images/adi.png" alt=""></div>
    <div id="desc">
        <p class="heading">Hi! I'm Adi.</p>
        <p id="subtitle">{@html description}</p>
    </div>
</div>

<style>

    #img{
        grid-area: image;
    }
    #desc{
        grid-area: description;
    }
    #subtitle{
        white-space: pre-line;
    }
    #about{
        display: grid;
        grid-template-areas: "description" "image";
        grid-template-columns: 1fr;
        width: 98%;
    }
    p{
        font-size: max(1.25rem,min(.2589vw + 1.18932rem,1.5rem));
    }

    @media all and (min-width: 1024px){
        #about{
            display: grid;
            grid-template-areas: "image description";
            grid-template-columns: 1fr 2fr;
        }
    }
</style>

<script>
    export const description = `Thanks for stopping by! I'm Aaditya Chopra (you could just call me Adi). I'm a recent graduate (with high distinction) from the Computer Science major program at Carleton University. 
    
This website is still a work in progress. This is the current progress I have made in the complete redux of my website. You can view my previous website by clicking <a href="https://web.archive.org/web/20240110074418/http://adichops.github.io/" target="_blank" style="color:inherit; font-weight: bold;">here</a>.

I have also completed a Computer Science Technology diploma at CÉGEP Heritage College.

I am passionate about computers and problem solving and have also written in a student newspaper and hosted a high school radio program.`;
</script>
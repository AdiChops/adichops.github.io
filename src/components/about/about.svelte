<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/about/About.svelte -->
<div id="about">
    <div id="img"><img src="/images/adi.png" alt=""></div>
    <div id="desc">
        <p class="heading">Hi! I'm Adi.</p>
        <p id="subtitle">{@html description}</p>
        <div id="socials">
            <a href="https://linkedin.com/in/aaditya-chopra" target="_blank"><Icon class="icon" icon="skill-icons:linkedin"/></a>
            <a href="https://github.com/AdiChops" target="_blank"><Icon class="icon" icon="skill-icons:github-light"/></a>
        </div>
    </div>

</div>

<style>
    #socials{
        margin-top: 1rem;
    }
    #socials a{
        margin: 0 1rem;
    }

    #socials a:hover{
        opacity: 0.75;
    }

    #img{
        grid-area: image;
    }

    #img img{
        max-width: 100%;
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
    import Icon from '@iconify/svelte';
    export const description = `Thanks for stopping by! I'm Aaditya Chopra (you could just call me Adi). I'm a recent graduate (with high distinction) from the Computer Science major program at Carleton University. 
    
I have also completed a Computer Science Technology diploma at CÉGEP Heritage College.

I am passionate about computers and problem solving and have also written in a student newspaper and hosted a high school radio program.`;
</script>
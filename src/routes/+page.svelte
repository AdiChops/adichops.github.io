<main>
    <div id="summary">
        <p id="status">{status}</p>
        <p id="name">Aaditya Chopra</p>
    </div>
    <div id="pin-windmill">

    </div>
</main>

<style>
    /* https://coolors.co/palette/54282c-355a6a-071b24-2c4e5b-476173 */
    #pin-windmill{
        width: 100px;
        height: 100px;
        background-color: #28a92b;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        line-height: 100px;
        font-size: 50px;
        text-align: center;
        will-change: transform;
        background-color: #e26c16;
        will-change: transform;
    }
    
    #summary{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }
    #name{
        font-size: 3em;
        color: #FAF9F6;
        margin: 0;
    }
    #status{
        position: sticky;
        color: transparent;
        background: rgb(191,240,152);
        background: linear-gradient(138deg, rgba(191,240,152,1) 9%, rgba(111,214,255,1) 100%);
        -webkit-background-clip: text;
        background-clip: text;
        font-size: 1em;
        margin: 0;
    }
    main {
        position: relative;
        display:grid;
        grid-template-columns: 1fr;
        border-radius: 20px;
        top: 1%;
        height: 98%;
        width: 98%;
        margin: auto;
        background-color: #071B24;
    }
    @media all and (min-width: 768px){
        #status{
            font-size: 3em;
        }
        #summary{
            padding: 7em;
            text-align: left;
            align-items: unset;
        }
        #name{
            font-size: 10em;
        }
    }

    @media all and (min-width: 1024px){
        main{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>
<script>
    import { onMount } from 'svelte';

    import { gsap } from 'gsap';

    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    onMount(()=>{
        // gsap.to("#pin-windmill", {
        //     x: 400,
        //     rotation: 360,
        //     duration: 3
        // });

        ScrollTrigger.create({
            trigger: "#pin-windmill",
            pin: true,
            start: "center center",
            end: "+=300",
            markers: true
        });
    });

    export const name = 'World';
    export const status = 'Fullstack Developer with a focus on backend development';
</script>
<div id="home">
    <div id="summary">
        <p id="status">{status}</p>
        <p class="heading" id="name">Aaditya Chopra</p>
    </div>
    <div id="pinwheel">
        <img src="/images/pinwheel.svg" alt="Gears">
    </div>
</div>

<style>
    @import './home.css';
</style>

<script>
    import { onMount } from 'svelte';

    import { gsap } from 'gsap';

    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    onMount(()=>{
        gsap.to("#pinwheel", {
            id: "pinwheel",
            scrollTrigger:{
                trigger: "#pinwheel",
                start: "top 50%",
                end: "bottom top",
                scrub: 1
            },
            rotation: 360,
        });

    });

    export const status = 'Fullstack Developer with a focus on backend development';
</script>
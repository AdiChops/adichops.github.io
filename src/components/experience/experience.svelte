<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/experience/Experience.svelte -->

<script lang="ts">
    import { experiences } from './experience.ts';
    import { icons } from '../icon-mapping.ts';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    import { gsap } from 'gsap';

    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    onMount(()=>{
        gsap.utils.toArray<HTMLElement>('.exp').forEach((experience: HTMLElement) => {
            let tlItem = document.getElementById(experience.getAttribute("data-experience") as string) as HTMLElement;
            let yPos = experience.getBoundingClientRect().top - tlItem.getBoundingClientRect().top;

            const move = gsap.timeline({paused:true})
                .to(
                    tlItem,
                    {y: "+" + yPos, opacity: 0, duration:1, stagger:0.3}
                ); 

            const revealItem = gsap.timeline({paused:true})
                .to(
                    experience,
                    {opacity: 1, duration:1, stagger:0.3}
                );
            
            let startAnimation = () =>{
                revealItem.play();
                move.play();
            };

            let reverseAnimation = () =>{
                revealItem.reverse();
                move.reverse();
            };

            
            tlItem.addEventListener("click", ()=>{
                startAnimation();
            });

            ScrollTrigger.create({
                trigger: experience,
                start: "top 50%",
                onEnter: () => {
                    startAnimation();
                },
                onLeaveBack: () => {
                    reverseAnimation();
                }
                })
            });


    });

</script>

<p class="heading">Work Experiences</p>
<div id="companies">
    {#each experiences as experience}
        <div class="company-badge" id="exp-{experience.company.toString().replace(/ /g, '')}" style="--bg-image:url({experience.bgImage}); --bg-color:{experience.bgColor};"></div>
    {/each}
</div>
<div class="timeline">
    <!-- Code adapted from Mark Boots (CodePen) - Adapted from this codepen: https://codepen.io/MarkBoots/pen/OJOqNyB -->
    <ul>
    {#each experiences as experience}
        <li class="exp" data-experience="exp-{experience.company.toString().replace(/ /g, '')}" style="--accent-color:{experience.accentColor}; --bg-image:url({experience.bgImage}); --bg-color:{experience.bgColor}">
            <div class="date">{experience.duration}</div>
            <div class="title">{experience.position} @ {experience.company}</div>
            <div class="descr">{experience.description}</div>
            {#if experience.technologies}
                <div class="technologies">
                    <p>Technologies:</p>
                        {#each experience.technologies as technology}
                        <div class="tech">
                            {#if technology != "Mockito"}
                            <Icon class="icon" icon={icons[technology]} />
                            {:else}
                            <img class="icon" width="40" height="40" src="/images/mockito.jpg" alt="Mockito logo">
                            {/if}
                            <span class="subtitle">{technology}</span>
                        </div>
                        {/each}
                </div>
            {/if}
        </li>
    {/each}
    </ul>
</div>

<style>
    @import './experience.css';
</style>

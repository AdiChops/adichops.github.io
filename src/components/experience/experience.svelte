<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/experience/Experience.svelte -->

<script>
    import { experiences } from './experience.js';

</script>

<p class="heading">Work Experiences</p>
<div class="timeline">
    <!-- Code adapted from Mark Boots (CodePen) - Adapted from this codepen: https://codepen.io/MarkBoots/pen/OJOqNyB -->
    <ul>
    {#each experiences as experience}
    <li style="--accent-color:{experience.accentColor}; --bg-image:url({experience.bgImage}); --bg-color:{experience.bgColor}">
        <div class="date">{experience.duration}</div>
        <div class="title">{experience.position} @ {experience.company}</div>
        <div class="descr">{experience.description}</div>
    </li>
    {/each}
    </ul>
</div>

<style>
    @import './experience.css';
</style>

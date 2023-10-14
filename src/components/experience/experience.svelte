<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/experience/Experience.svelte -->

<script>
    export let experiences = [
        {
            company: 'ABC Company',
            position: 'Software Engineer',
            duration: 'Jan 2020 - Present',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem vel bibendum bibendum, elit elit bibendum elit, euismod elit elit elit. Sed euismod, lorem vel bibendum bibendum, elit elit bibendum elit, euismod elit elit elit.'
        },
        {
            company: 'XYZ Company',
            position: 'Frontend Developer',
            duration: 'Jun 2018 - Dec 2019',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem vel bibendum bibendum, elit elit bibendum elit, euismod elit elit elit. Sed euismod, lorem vel bibendum bibendum, elit elit bibendum elit, euismod elit elit elit.'
        }
    ];
</script>

<section>
    <h2>Work Experience</h2>
    {#each experiences as experience}
        <div class="experience">
            <h3>{experience.company}</h3>
            <p class="position">{experience.position}</p>
            <p class="duration">{experience.duration}</p>
            <p class="description">{experience.description}</p>
        </div>
    {/each}
</section>

<style>
    .experience {
        margin-bottom: 2rem;
    }

    .position {
        font-weight: bold;
        margin-top: 0;
    }

    .duration {
        margin-top: 0;
        margin-bottom: 0.5rem;
    }

    .description {
        margin-top: 0;
    }
</style>

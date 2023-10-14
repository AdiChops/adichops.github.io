<!-- FILEPATH: /c:/Users/Owner/Documents/Personal/SideProjects/adichops.github.io/src/components/about/About.svelte -->

        <h2>About Me</h2>
        <div class="about-content">
            <img src="profile-pic.jpg" alt="Profile">
            <p>
                Hi there! My name is John Doe and I'm a full-stack web developer based in San Francisco, CA. I have a passion for creating beautiful, responsive websites and web applications that provide a great user experience.
            </p>
            <p>
                I have experience working with a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. I'm always looking to learn new things and improve my skills, and I'm excited to take on new challenges and projects.
            </p>
            <p>
                When I'm not coding, you can usually find me hiking in the mountains, playing guitar, or trying out new recipes in the kitchen.
            </p>
        </div>

<style>
    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: #f5f5f5;
    }

     h2 {
        background-color: #f5f5f5;

        font-size: 2rem;
        margin-bottom: 1rem;
    }

    .about-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 800px;
        margin-top: 2rem;
    }

    .about-content img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 1rem;
    }

    .about-content p {
        font-size: 1.2rem;
        line-height: 1.5;
        text-align: center;
        margin-bottom: 1rem;
    }
</style>

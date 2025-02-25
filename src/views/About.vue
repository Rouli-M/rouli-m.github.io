<template>
  <div style="margin-bottom: 0px;">
    <!--
    <h1>Where am I?</h1>
    -->
   
    <div class="paragraph">
      <h2>About me</h2> 
      <div>
        My name is Martin Loiseau, AKA Rouli, and I'm a game developer based in Paris. Welcome to my portfolio website!
      </div>
      <br>
      <div>
        My development journey started as a kid on <a target="_blank" href="https://scratch.mit.edu/users/Nitttram/"> Scratch</a> in 2012. I never stopped creating since.
      </div>
      <br>
      <div>
        After I graduated as a computer science engineer in 2022, I embraced my creative side and took a Masters at GOBELINS, where I learned about game design, producing, and creative direction.
      </div>
      <br>
      <div>
       I worked on <router-link to="/game-projects">many games</router-link>, from little side projects to fully fleshed solo indie releases. I also worked as a serious game designer and developer at Urssaf for two years.
      </div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for a job</strong> as a game developer.</div>
      <br>

      <div>
        <h2>Resume</h2>
        <!--
          <iframe src="https://viewerjs.org/?file=your-pdf-file.pdf" width="100%" height="600px"></iframe>
          <embed src="https://www.codeur.com/tuto/wp-content/uploads/2022/02/pdf-test.pdf" width="800" height="500" type="application/pdf"/>
          -->
          <div style="margin-top:20px; margin-bottom:20px;"></div>
          <a target="_blank" class="download-link" href="d/resume_portfolio_EN.pdf"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
          <a target="_blank" class="download-link" href="d/resume_portfolio_FR.pdf"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
            <div style="clear:both"></div>
          
        </div>
    </div>

    <div class="photo">
      <img class="welcome_photo" src="img/welcome.png" alt="some of my characters" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.welcome_photo {
  margin-top: 50px;
  text-align: center;
  width: 100%;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
    width: 55%; /* Adjusted width */
  }

  .photo {
    float: right;
    width: 35%; /* Adjusted width */
    padding: 10px;
    padding-left: 30px; /* Adjusted padding */
  }
}

</style>
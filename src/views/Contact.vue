<template>
  <div>
    
    <h1>Let's get in touch</h1>
    <ul>
      <li>
        <a target="_blank" href="mailto:martin.loiseau49@gmail.com">
          <img title="Send me an email" src="img/icons/mail.png">
          Email - martin.loiseau49@gmail.com
        </a>
      </li>

      <li>
        <a target="_blank" href="https://www.linkedin.com/in/martin-loiseau-ab3b76193/">
          <img title="Send me an email" src="img/icons/linkedin.png">
          LinkedIn - Martin Loiseau
        </a>
      </li>

      <li>
        <a target="_blank" href="https://github.com/Rouli-M/">
          <img title="Find me on Github" src="img/icons/github.png">
          GitHub - Rouli-M
        </a>
      </li>

      <li>
        <a target="_blank" href="https://www.instagram.com/rouli.overflow/">
          <img title="Find me on Instagram" src="img/icons/instagram.png">
          Instagram - @rouli.overflow
        </a>
      </li>

      <li>
        <a target="_blank" href="https://bsky.app/profile/rouli-overflow.bsky.social">
          <img title="Find me on Bluesky" src="img/icons/bluesky.png">
          Bluesky - @rouli-overflow
        </a>
      </li>

      <li>
        <a target="_blank" href="https://rouli.itch.io">
          <img title="Find me on Bluesky" src="img/icons/itch.png">
          Itch.io - rouli.itch.io
        </a>
      </li>

    </ul>
      <!--
    <div style="margin-bottom:40px;">Feel free to contact me about any opportunity, or just to chat.</div>
    <ul>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:martin.loiseau49@gmail.com" target="_blank">martin.loiseau49@gmail.com</a>
      </li>
      <li>
        <i class="fa fa-linkedin fa-lg fa-fw" style="vertical-align: -5%;"></i>
        <a href="https://www.linkedin.com/in/martin-loiseau-ab3b76193/" target="_blank">linkedin.com/me</a>
      </li>
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/Rouli-M" target="_blank">github.com/me</a>
      </li>
      <li>
        <i class="fa fa-gamepad fa-lg fa-fw"></i>
        <a href="https://rouli.itch.io" target="_blank">rouli.itch.io</a>
      </li>
      <li>
        <i class="fa fa-bluesky fa-lg fa-fw"></i>
        <a href="https://bsky.app/profile/rouli-overflow.bsky.social" target="_blank">blueksy</a>
      </li>
    </ul>
    -->

  </div>
</template>

<style scoped>
img {
   filter: invert(19%) sepia(26%) saturate(5434%) hue-rotate(260deg) brightness(93%) contrast(96%);
  opacity:1;
  transform: rotate(0deg);
   /*  border: 1px solid red; Temporary border to visualize images */
}

ul {
  list-style: none;
  padding-inline-start: 0; /* Remove default padding for ul */
}

li a {
  display: flex; /* Use Flexbox for the list items */
  align-items: center; /* Center items vertically */
  gap: 20px; /* Add space between image and text */
  line-height: 1.8em;
  font-size: 1.2em;
  margin-bottom: 15px;
}

/* Define the keyframe animation */
@keyframes rotate {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.1);
  }
}

/* Apply the animation on hover */
li:hover img {
  animation: rotate 0.1s linear forwards;
}


@media only screen and (min-width: 620px) {
  ul {
    padding-inline-start: 40px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}

</style>

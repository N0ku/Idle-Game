<template>
  <div class="wavy">
    <span style="--i: 1">L</span>
    <span style="--i: 2">i</span>
    <span style="--i: 3">t</span>
    <span style="--i: 4">t</span>
    <span style="--i: 5">l</span>
    <span style="--i: 6">e</span>
    <span style="--i: 7; margin: 2rem"> </span>
    <span style="--i: 8">g</span>
    <span style="--i: 9">a</span>
    <span style="--i: 10">r</span>
    <span style="--i: 11">d</span>
    <span style="--i: 12">e</span>
    <span style="--i: 13">n</span>
  </div>
</template>
<style scoped>
.wavy {
  position: absolute;
  top: 10%;
  left: 25%;
}
.wavy span {
  position: relative;
  display: inline-block;
  font-size: calc(5vw + 1vw);
  text-transform: uppercase;
  animation: animate 1.5s ease-in-out infinite;
  animation-delay: calc(0.1s * var(--i));
  background: linear-gradient(5deg, #795548, #4caf50a8);
  -webkit-background-clip: text;
  color: transparent;
}
@keyframes animate {
  0%,
  100% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-20px);
  }
  40% {
    transform: translateY(0px);
  }
}
</style>

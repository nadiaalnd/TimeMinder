<template>
  <audio ref="audioPlayer" controls>
    <source :src="audioSource" type="audio/mpeg">
  </audio>
</template>

<script>
export default {
  props: {
    audioSource: String
  },
  methods: {
    play() {
      this.$refs.audioPlayer.play();
    },
    pause() {
      this.$refs.audioPlayer.pause();
    }
  }
}
</script>

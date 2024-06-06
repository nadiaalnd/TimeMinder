<template>
  <div class="w-full mx-auto">
    <section class="flex justify-center items-center">
      <Popup :show="showAlert" @close="closeAlert"/>
      <div class="max-w-full py-8">
        <TimerProgressBar
          :bg-colors="typeBg"
          :percentages="percentages"
          class="sm:mx-auto px-4 pb-2 mb-2 sm:py-8"/>
        <div class="w-full mx-auto">
          <TimerView @progress="handleProgress" @finishTimer="handleFinish" @pauseTimer="pauseTimerHandler" @continueTimer="continueTimerHandler" @resetProgressBar="handleResetProgressBar"/>
        </div>
        <div class="mt-10 sm:mx-auto sm:px-6">
          <TimerAdd class="mt-4 px-4"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '@/mixins/aos'
import TimerProgressBar from '@/components/timer/ProgressBar.vue'
import TimerView from '@/components/timer/View.vue'
import Popup from "@/components/timer/Popup.vue";
import TimerAdd from "@/components/timer/Add.vue";
import {
  requestPermission,
} from '@/plugins/sendNotification'

export default {
  name: 'TimerPage',
  components: {
    TimerProgressBar,
    TimerView,
    TimerAdd,
    Popup,
  },
  mixins: [aosMixin],
  layout: 'custom',
  data() {
    return {
      percentages: 0,
      showAlert: false,
      audio: null,
      listTypeBg: ['running-bg', 'paused-bg'],
      typeBg: 'running-bg',
    }
  },
  mounted() {
    requestPermission();
    this.audio = new Audio('https://backoffice.planduit.my.id/bell.mp3');
  },
  methods: {
    pauseTimerHandler() {
      this.typeBg = this.listTypeBg[1];
    },
    handleResetProgressBar() {
      this.percentages = 0;
    },
    continueTimerHandler() {
      this.typeBg = this.listTypeBg[0];
    },
    handleProgress(progress) {
      this.percentages = progress;
    },
    handleFinish() {
      this.playAudio();
      this.showAlert = true;
    },
    closeAlert() {
      if (this.audio) {
        this.audio.pause();
        this.audio.currentTime = 0;
      }
      this.percentages = 0;
      this.showAlert = false;
    },
    playAudio() {
      if (this.audio) {
        this.audio.play();
      }
    }
  }
}
</script>

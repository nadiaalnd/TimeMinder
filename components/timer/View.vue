<template>
  <div class="w-full mx-auto">
    <div class="w-full max-w-lg mx-auto">
      <div class="bg-features relative shadow-lg rounded-lg p-8 md:bg-auto lg:bg-cover xl:bg-contain bg-center bg-no-repeat md:h-400 lg:h-500 xl:h-500 md:w-500 lg:w-600 xl:w-600 md:p-20 lg:p-30 xl:p-20">
        <div class="mb-4 flex justify-center">
          <button
            v-for="type in timerTypes"
            :key="type"
            :class="{ 'bg-gradient-to-r from-yellow-500 to-yellow-300': timerType === type, 'bg-gray-300': timerType !== type }"
            class="mr-4 px-4 py-2 rounded-md text-white hover:shadow-md transition duration-300"
            @click="triggerModal(type)"
          >
            {{ getName(timerTypes.indexOf(type)) }}
          </button>
          <ModalDownload v-if="isModalOpen" @close="modalInputClose" />
        </div>
        <!-- Timer -->
        <div :class="{'text-red-600': isPaused}" class="text-8xl font-bold text-center mb-4">{{ timer }}</div>
        <!-- Button -->
        <div class="mb-4 flex justify-center">
          <div v-if="!timerStarted">
            <TimerButton :onClick="startTimer">
              <span>{{ textButton }}</span>
            </TimerButton>
          </div>
          <div v-else>
            <div class="flex justify-center space-x-4">
              <TimerButton :onClick="pauseTimer">
                <IconPause/>
              </TimerButton>
              <TimerButton :onClick="finishTimer">
                <IconFinish/>
              </TimerButton>
            </div>
          </div>
          <div class="ml-4">
            <TimerButton :onClick="triggerShowCustomModal" v-if="timerType === 'custom'">
              Edit
            </TimerButton>
          </div>
          <ModalConfirm :show="isModalShow" @close="modalInputClose" @confirm="setTimer()"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalDownload from "./custom/ModalCustom.vue";
import TimerButton from '~/components/timer/Button.vue';
import ModalConfirm from "~/components/timer/ModalConfirm.vue";
import IconFinish from "~/components/icon/Finish.vue";
import IconPause from "~/components/icon/Pause.vue";
import Timer from "@/plugins/timer";
import {sendNotification} from "@/plugins/sendNotification";

export default {
  name: 'TimerView',
  components: {ModalDownload, TimerButton, ModalConfirm, IconFinish, IconPause},
  data() {
    return {
      timerStarted: false,
      timer: "00:00",
      countdown: null,
      progress: 0,
      timerType: 'short',
      timerTypes: ['short', 'long', 'custom'],
      isPaused: false,
      textButton: 'Start',
      time: {short: 5 * 60, long: 15 * 60, custom: 0},
      isModalShow: false,
      timerTypeTemp: '',
      isModalOpen: false,
    };
  },
  created() {
    this.timer = this.formatTime(this.time[this.timerType]);
  },
  mounted() {
    this.time.custom = parseInt(localStorage.getItem('customTime') * 60) || 0;
  },
  methods: {
    getCustomTimer(){
      const customTime = localStorage.getItem('customTime');
      if (customTime) {
        this.time.custom = parseInt(customTime * 60);
      }else{
        this.isModalOpen = true;
      }
    },
    startTimer() {
      if(this.timerType === 'custom' && this.time.custom === 0){
        this.isModalOpen = true;
        return;
      }
      if (this.isPaused) {
        this.$emit('continueTimer');
        this.continueTimer();
        this.isPaused = false;
        return;
      }
      const duration = this.time[this.timerType];
      this.timer = this.formatTime(duration);
      this.countdown = Timer(duration, this.finishTimer.bind(this));
      this.countdown.start();
      this.timerStarted = true;
      this.updateTimer();
      this.$emit('startTimer');
    },
    continueTimer() {
      this.countdown.start();
      this.timerStarted = true;
      this.updateTimer();
    },
    pauseTimer() {
      if (this.countdown) {
        this.countdown.stop();
      }
      this.textButton = 'Continue';
      this.timerStarted = false;
      this.isPaused = true;
      this.$emit('pauseTimer');
    },
    finishTimer(isReset = false) {
      this.timerStarted = false;
      this.countdown = null;
      this.progress = 0;
      this.textButton = 'Start';
      this.isPaused = false;
      this.timer = this.formatTime(this.time[this.timerType]);
      if (!isReset) {
        this.$emit('finishTimer');
        this.runSendNotification();
      }
    },
    runSendNotification() {
      sendNotification("Time's up!", {
        body: `Your (${this.getName(this.timerTypes.indexOf(this.timerType))}) timer has finished.`,
      });
    },
    updateTimer() {
      setInterval(() => {
        if (this.countdown) {
          const seconds = this.countdown.duration % 60;
          const minutes = Math.floor((this.countdown.duration / 60) % 60);
          this.timer = `${this.pad(minutes)}:${this.pad(seconds)}`;
          this.progress = parseFloat((this.countdown.duration / this.time[this.timerType] * 100).toFixed(2));
          this.$emit('progress', this.progress);
        }
      }, 1000);
    },
    formatTime(seconds) {
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;
      return `${this.pad(minutes)}:${this.pad(remainingSeconds)}`;
    },
    pad(num) {
      return num.toString().padStart(2, '0');
    },
    triggerModal(type) {
      this.timerTypeTemp = type;
      if (this.timerStarted || this.isPaused) {
        this.isModalShow = true;
      } else {
        this.setTimer();
      }
      if(type === 'custom'){
        this.getCustomTimer();
      }
    },
    triggerShowCustomModal() {
      this.isModalOpen = true;
    },
    modalInputClose() {
      this.isModalOpen = false;
      const customTime = localStorage.getItem('customTime');
      if (customTime) {
        this.time.custom = parseInt(customTime * 60);
      }
      this.setTimer();
    },
    closeModal() {
      this.isModalShow = false;
    },
    setTimer() {
      const type = this.timerTypeTemp;
      this.isModalShow = false;
      if (this.isPaused || this.timerStarted) {
        this.timerType = type;
        this.finishTimer(true);
        this.$emit('resetProgressBar');
      } else {
        this.timerStarted = false;
        this.timerType = type;
        this.textButton = 'Start';
        this.timer = this.formatTime(this.time[type]);
      }
    },
    getName(index){
      const names = this.timerTypes[index];
      return names.charAt(0).toUpperCase() + names.slice(1);
    }
  }
}
</script>

<style scoped>
.bg-features {
  background: url('assets/img/bg-section-timer.png');
  background-size: contain;
  background-position: center;
}
</style>

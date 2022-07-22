<template>
  <section class="section container-xl">
    <div class="title">
      <h1 class="title-section">
        до окончания розыгрыша осталось
      </h1>
      <div class="img-section shadow-rad">
        <img src="~@/assets/image/products/time.png" alt="">
      </div>
    </div>
    <div class='timer'>
      <div class="item">
        <div class="time">
      <span>
        {{ Math.floor(displayDays / 10) }}
      </span>
          <span>
        {{ displayDays % 10 }}
      </span>
        </div>
        <div class="timer-name">
          дней
        </div>
      </div>
      <div class="item">
        <div class="time">
      <span>
        {{ Math.floor(displayHours / 10) }}
      </span>
          <span>
        {{ displayHours % 10 }}
      </span>
        </div>
        <div class="timer-name">
          часов
        </div>
      </div>
      <div class="item">
        <div class="time">
      <span>
        {{ Math.floor(displayMinutes / 10) }}
      </span>
          <span>
        {{ displayMinutes % 10 }}
      </span>
        </div>
        <div class="timer-name">
          минут
        </div>
      </div>
      <div class="item">
        <div class="time">
      <span>
  {{ Math.floor(displaySeconds / 10) }}
      </span>
          <span>
  {{ displaySeconds % 10 }}
      </span>
        </div>
        <div class="timer-name">
          секунд
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
  name: "TimeComponent",
  data() {
    return {
      displayDays: 0,
      displayHours: 0,
      displayMinutes: 0,
      displaySeconds: 0,
    };
  },
  computed: {
    _seconds: () => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days() {
      return this._hours * 24;
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNumb(num) {
      return num < 10 ? `0${num}` : num;
    },
    showRemaining() {
      const timer = setInterval(() => {
        const now = new Date();
        const end = new Date(2022, 6, 31, 0, 0,0, 0);
        // const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7);

        if(now.getTime() >= end.getTime()){
          end.setDate(end.getDate()+7);
        }
        const distance = end.getTime() - now.getTime();
        if (end.getTime() - now.getTime() < 0) {
          clearInterval(timer);
          return;
        }

        const days = Math.floor((distance / this._days));
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);

        this.displayMinutes = this.formatNumb(minutes);
        this.displaySeconds = this.formatNumb(seconds);
        this.displayHours = this.formatNumb(hours);
        this.displayDays = this.formatNumb(days);
        this.loaded = true;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  margin-top: 204px;

  .title {
    display: flex;
    flex-wrap: nowrap;
    position: relative;
  }

  .title-section {
    width: 80%;
    position: relative;
    z-index: 3;
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .img-section {
    position: relative;
    z-index: -1;
    overflow: unset;
    top: -180px;
    right: -40px;

    img {
      max-width: 391px;
      width: 100%;
      position: relative;
    }

    &.shadow-rad:before {
      width: 150px;
      height: 150px;
      top: 140px;
      left: 150px;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: -240px;
      width: 50%;
    }
    @media (max-width: 408px){
      top: -160px;
    }
  }

  .timer {
    display: flex;
    justify-content: space-between;
    margin: 0 -20px;
    flex-wrap: wrap;
    @media (max-width: 768px) {
      margin: 0 -5px;
    }
    .item {
      flex: 1;
      margin: 40px 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .time {
        display: flex;
        flex-wrap: nowrap;
      }

      span {
        flex: 0 0 45%;
        min-width: 167px;
        width: auto;
        background: rgba(255, 255, 255, 0.05);
        backdrop-filter: blur(4px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 32px;
        display: block;
        font: 96px/105px 'Stolz Light';
        text-align: center;
        padding: 57px 54px;

        &:nth-child(1) {
          margin-right: 10px;
          @media (max-width: 768px) {
            margin-right: 5px;
          }
        }

        @media (max-width: 768px) {
          min-width: 35px;
          font: 35px/46px 'Stolz Light';
          padding: 12px 5px;
          border-radius: 6.82718px;
        }
      }

      .timer-name {
        flex: 0 0 100%;
        text-align: center;
        font: 48px/53px "Stolz Light";
        @media (max-width: 768px) {
          font: 11px/110% 'Stolz Light';
        }
      }
      @media (max-width: 768px) {
        margin: 42px 5px 0;
      }
    }
  }
}
</style>
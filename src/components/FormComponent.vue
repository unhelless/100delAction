<template>
  <section class="section container-xl">
    <h1 class="title-section">Регистрация чека</h1>
    <div class="wrap-form">
      <div class="form-result" :class="{active : result}">
        <span class="toggleMenu close" @click="close"></span>
        <div class="result">
          Спасибо, ваш чек зарегистрирован!
        </div>
      </div>
      <form action="" class="form success" @submit.prevent="FormSubmit">
        <div class="form-group">
          <label for="FN">ФН</label>
          <input id="FN" v-model.trim="FN" type="text" class="input input-text"
                 :class="{error_required: v$.FN.$dirty && v$.FN.required && FN === ''}" placeholder="9960440302440760">
        </div>
        <div class="form-group">
          <label for="FD">ФД</label>
          <input id="FD" v-model.trim="FD" type="text" class="input input-text"
                 :class="{error_required: v$.FD.$dirty && v$.FD.required && FD === ''}" placeholder="5252">
        </div>
        <div class="form-group select_form">
          <label for="">Место расчета</label>
          <div class="__select" @click="openSelect" :class="{active : select}">
            <div class="__select__title">{{ selected }}</div>
            <div class="__select__content">
              <div class="__select__item" v-for="option in options">
                <input :id="option" class="__select__input" type="radio" v-model.trim="MESTO_RASCHETA" :value="option"
                       v-model="selected"/>
                <label @click="openSelect" :for="option" class="__select__label">{{ option }}</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="DATA_POKUPKI">Дата покупки</label>
          <input id="DATA_POKUPKI" type="text" class="input input-text" v-model.trim="DATA_POKUPKI"
                 :class="{error_required: v$.DATA_POKUPKI.$dirty && v$.DATA_POKUPKI.required && DATA_POKUPKI === ''}"
                 placeholder="11/07/22">
        </div>
        <div class="form-group">
          <label for="PHONE">Номер телефона</label>
          <input
              id="PHONE"
              type="text"
              class="input input-text"
              :class="{error_required: v$.PHONE.$dirty && v$.PHONE.required && PHONE === ''}"
              v-model.trim="PHONE"
              placeholder="+7 "
          >
        </div>
        <div class="form-group">
          <label for="FIO">Ваши Фамилия Имя Отчество</label>
          <input id="FIO" type="text" class="input input-text" v-model.trim="FIO"
                 :class="{error_required: v$.FIO.$dirty && v$.FIO.required && FIO === ''}"
                 placeholder="Иванов Алексей Иванович">
        </div>
        <div class="form-group">
          <input type="checkbox" class="checkbox-input" id="checkbox" checked>
          <label for="checkbox" class="confirm-text">
            <span class="checkbox">
            </span>
            <span class="confirm-span">Даю согласие на обработку персональных данных</span>
          </label>
        </div>
        <div class="form-group">
          <button class="btn-orange btns">Отправить чек</button>
        </div>
      </form>
      <div class="img-check">
        <div class="img-rules shadow-rad_purple">
          <img src="~@/assets/image/products/rules.svg" alt="" class="">
        </div>
        <img src="~@/assets/image/products/check.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
import {required, minValue} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

export default {
  name: "FormComponent",
  data() {
    return {
      form: '',
      result: false,
      select: false,
      selected: 'Выберите магазин',
      options: [
        'Стройка на Столетии',
        'Стройка на Калинина',
        'ТЦ Виктория',
        'Стройка на Некрасова',
        'Стройка на Пушкина',
        '100ДЕЛ на Комсомольской',
        'Стройка на М. Личенко',
        'Стройка на Железнодорожной',
        'Стройка на Жуковского',
        'Стройка на Амурском',
        'Стройка на Проспекте',
        'Стройка на Тихоокеанской',
        'Стройка на Пионерской',
        'Стройка на Мира',
        'Стройка на Базовой',
        '100ДЕЛ на Дзержинского',
        'Стройка на Ленина',
        'Стройка на Мухина',
        'Стройка на Чайковского',
        'Стройка на Трактовой',
        'Стройка на Сергеева',
        'Стройка на Трактовой',
        'Стройка на Автомобилистов',
        '100ДЕЛ на Первомайской',
        'Стройка на Братск Центр',
        'Стройка в Энергетике',
        'Стройка на Стопани',
        '100ДЕЛ на Советской',
        '100ДЕЛ на Ине',
        '100ДЕЛ на Хасановской',
        '100ДЕЛ на Володарского',
      ],
      FIO: "",
      FN: "",
      FD: "",
      PHONE: "",
      MESTO_RASCHETA: "",
      DATA_POKUPKI: "",
    }
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  methods: {
    close() {
      if (this.result) {
        return this.result = false
      }
    },
    FormSubmit() {
      this.v$.$reset()
      if (this.v$.$invalid) {
        this.v$.$touch()
        return
      } else {

        const url = 'http://kraton.test/new/ajax/ajax.php';
        const data = {
          FIO: this.FIO,
          FN: this.FN,
          FD: this.FD,
          PHONE: this.PHONE,
          MESTO_RASCHETA: this.MESTO_RASCHETA,
          DATA_POKUPKI: this.DATA_POKUPKI,
        }
        const form = JSON.stringify(data)

        console.log(form)
        try {
           fetch(url, {
            method: 'POST', // или 'PUT'
            body: form, // данные могут быть 'строкой' или {объектом}!
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/json'
            }
          })
              .then((resp) => resp.json())
              .then(function (response) {
                console.info('fetch()', response);
                return response;
              });
        } catch (error) {
          console.error('Ошибка:', error);
        }
      }

    },
    openSelect(e) {
      return this.select = !this.select;
    },

  },
  validations() {

    return {
      FIO: {
        required
      },
      FN: {
        required
      },
      FD: {
        required
      },
      PHONE: {
        required
      },
      DATA_POKUPKI: {
        required
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.section {
  position: relative;
  margin-top: 150px;
  @media(max-width: 768px) {
    margin-top: 96px;
  }

  .title-section {
    font: 700 96px/110% 'Stolz Bold';
    text-transform: uppercase;
    width: 60%;
    @media (max-width: 1280px) {
      font: 700 76px/110% 'Stolz Bold';
    }
    @media(max-width: 768px) {
      font: 56px/110% 'Stolz Bold';
      text-align: center;
      width: 100%;
    }
    @media (max-width: 448px) {
      font: 24px/26px 'Stolz Bold';
    }
  }

  .wrap-form {
    position: relative;

    .form-result {
      display: none;

      &.active {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      position: absolute;
      background: linear-gradient(0deg, rgba(64, 36, 131, 0.5), rgba(64, 36, 131, 0.5)), rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(24px);
      border-radius: 10px;
      width: 100%;
      height: 100%;
      z-index: 2;
      text-align: center;

      .result {
        font: 48px/57.6px 'Stolz Light';
        @media (max-width: 522px) {
          font: 24px/29px 'Stolz Light';
        }
      }

      .close {
        width: 60px;
        height: 60px;
        display: block;
        position: absolute;
        right: 80px;
        top: 50px;

        &:before {
          content: "";
          width: 60px;
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          top: 30px;
          transform: rotate(45deg);
        }

        &:after {
          content: "";
          width: 60px;
          height: 2px;
          background: white;
          position: absolute;
          left: 0;
          top: 30px;
          transform: rotate(-45deg);
        }

        @media (max-width: 768px) {
          right: auto;
        }
      }

      @media (max-width: 768px) {

        width: 100%;
      }
    }


    display: flex;
    margin-top: 73px;
    justify-content: space-between;
    @media (max-width: 976px) {
      flex-direction: column-reverse;
    }

    form {
      display: flex;
      flex-wrap: wrap;

      label {
        font: 32px/38px 'Stolz Light';
      }

      .form-group {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        flex: 1 0 45%;
        margin-right: 50px;

        &.select_form {
          position: relative;
        }

        .input {
          border: 2px solid #FFFFFF;
          border-radius: 24px;
          flex-grow: 0;
          padding: 21.4634px 42.9268px;
          gap: 13.41px;
          background: bottom;
          font: 28px/33px 'Stolz Light';
          outline: none;

          &.error_required {
            border: 2px solid red;
          }
        }

        label {
          & .confirm-span {
            font: 24px/29px 'Stolz Light';
            width: 80%;
          }

          margin-bottom: 24px;

          &.confirm-text {
            display: flex;
            align-items: center;
            margin-bottom: unset;
          }
        }

        .checkbox-input {
          display: none;

          &:checked + label .checkbox {
            &:after {
              transform: translate(-50%, -50%) scale(1);
            }
          }
        }

        .checkbox {
          border: 2px solid #FFFFFF;
          border-radius: 24px;
          width: 80px;
          height: 80px;
          display: inline-block;
          position: relative;
          margin-right: 10px;

          &:after {
            border-radius: 16px;
            content: '';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 50px;
            height: 50px;
            background-color: white;
            transition: 0.3s;
          }

          @media (max-width: 504px) {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            &:after {
              width: 31.25px;
              height: 31.25px;
              border-radius: 10px;
            }
          }
        }

        @media (max-width: 1501px) {
          margin-top: 30px;
          &:nth-child(1) {
            margin-top: unset;
          }
        }

        @media (max-width: 976px) {
          margin-right: 0px;
          flex: 1 1 100%;
        }
      }
    }

    .img-rules {
      position: absolute;
      top: -280px;
      right: -10px;

      img {
        position: relative;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    @media (max-width: 976px) {
      .img-check {
        display: flex;
        justify-content: center;
      }
    }
    @media (max-width: 502px) {
      .img-check img {
        width: 100%;
      }

      form {
        label {
          font: 16px/19px 'Stolz Light';

          .confirm-span {
            font: 16px/19px 'Stolz Light' !important;
          }
        }

        .form-group {
          flex: 1 1 100%;

          .input {
            font: 16px/19px 'Stolz Light';
            padding: 16px;
            gap: 8px;
            border: 2px solid #FFFFFF;
            border-radius: 10px;
          }

          &:nth-child(1) {
            margin-top: 30px;
          }
        }
      }
    }
  }
}

.shadow-rad_purple:before {
  border-radius: 100%;
  content: "";
  width: 150px;
  height: 150px;
  opacity: 0.7;
  position: absolute;
  z-index: 0;
  top: 40px;
  right: 80px;
  background: radial-gradient(50% 50% at 50% 50%, #6D388D 0%, rgba(99, 41, 134, 0.8) 11.54%, rgba(91, 34, 130, 0.45) 100%);
  box-shadow: 20px 20px 220px 200px rgb(99 41 134 / 50%);
  mix-blend-mode: color-dodge;
}

.__select {
  z-index: 1;
  position: relative;
  max-height: 80px;
  display: flex;
  flex-direction: column;
  border: 2px solid #FFFFFF;
  border-radius: 24px;
  gap: 13.41px;
  overflow: hidden;
  cursor: pointer;
  padding: 21.4634px 42.9268px;
  backdrop-filter: blur(24px);

  @media (min-width: 1502px) {
    position: absolute;
    width: 100%;
    top: 63px;
  }

  &__title {
    font: 20px/33px 'Stolz Light';
    color: #FFFFFF;
    @media (max-width: 1007px) and (min-width: 977px) {
      font: 18px/33px "Stolz Light";
    }
    @media (max-width: 502px) {
      font: 16px/19px "Stolz Light";
    }
  }

  &:before {
    opacity: 1;
    content: '';
    border: 20px solid transparent;
    border-top: 20px solid #FFFFFF;
    position: absolute;
    right: 30px;
    top: 30px;
    transition: all 2s ease-out;
  }

  &:after {
    opacity: 0;
    content: '';
    border: 20px solid transparent;
    border-bottom: 20px solid #FFFFFF;
    position: absolute;
    right: 30px;
    top: 0;
    transition: all 0.1s ease-out;
  }

  @media (max-width: 502px) {
    border-radius: 12px;
    padding: 16px;
    max-height: 55px;

    &:before {
      top: 17px;
      right: 10px;
    }
    &:after {
      top: -5px;
      right: 10px;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    overflow: auto;
    max-height: 300px;
    height: 100%;
    margin: 0 -42.9268px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-thumb {
      background: #FFFFFF;
      border-radius: 50px;
    }

    &::-webkit-scrollbar-track {
      background: none;
      border-radius: 50px;
    }

    @media (max-width: 502px) {
      margin: 0 -16px;
    }
  }

  &__item {
    color: #FFFFFF;
    cursor: pointer;

    .__select__label {
      padding: 9px 42.9268px;
      width: 100%;
      cursor: pointer;
      margin-bottom: 0 !important;
      font: 20px/33px 'Stolz Light' !important;
      @media (max-width: 502px) {
        padding: 16px;
        font: 16px/19px "Stolz Light" !important;
      }
    }

    &:hover {
      background: #EA5707;
    }
  }

  &__input {
    display: none;
  }

  &.active {
    transition: all 1s ease-out;
    max-height: 500px;
    background: linear-gradient(0deg, rgba(64, 36, 131, 0.5), rgba(64, 36, 131, 0.5)), rgba(255, 255, 255, 0.05);

    &:after {
      opacity: 1;
      transition: all 2s ease-out;
    }

    &:before {
      opacity: 0;
      transition: all 0.1s ease-out;
    }
  }

  transition: all 1s ease-out;
}
</style>
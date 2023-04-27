<template>
  <!-- wrapper -->
  <div id="wrapper" class="login">
    <!-- wrapper_body -->
    <div id="wrapper_body">
      <!-- login_area -->
      <div class="login_area">
        <span class="logo"
          ><img
            src="~/assets/images/common/logo_login.png"
            alt="GS 칼텍스 EV 충전 관제 시스템"
        /></span>
        <div class="login_box">
          <form name="" method="" action="">
            <fieldset>
              <!-- check_error has_error e_typ1 -->
              <span
                class=""
                v-bind:class="{
                  check_error: className.id_span_check_error,
                  has_error: className.id_span_has_error,
                  e_typ1: className.id_span_e_typ1,
                  e_typ2: className.id_span_e_typ2,
                }"
                ><!-- 필수입력 에러 발생 시  has_error  와 e_typ1 ~ e_typ2 추가 -->
                <input
                  type="text"
                  placeholder="아이디"
                  maxlength="100"
                  v-on:input="inputId"
                />
                <p
                  class=""
                  v-bind:class="{
                    required_txt: className.id_p_id_required_txt,
                    e_typ1: className.id_p_id_e_typ1,
                  }"
                >
                  아이디를 입력해주세요
                </p>
                <p
                  class=""
                  v-bind:class="{
                    required_txt: className.id_p_login_info_required_txt,
                    e_typ2: className.id_p_login_info_e_typ2,
                  }"
                >
                  로그인 정보를 확인해주세요
                </p>
              </span>
              <span
                class=""
                v-bind:class="{
                  check_error: className.pw_span_check_error,
                  has_error: className.pw_span_has_error,
                  e_typ1: className.pw_span_e_typ1,
                  e_typ2: className.pw_span_e_typ2,
                }"
                ><!-- 필수입력 에러 발생 시  has_error  와 e_typ1 ~ e_typ2 추가 -->
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="비밀번호"
                  maxlength="100"
                  v-on:input="inputPassword"
                />
                <p
                  class="required_txt e_typ1"
                  v-bind:class="{
                    required_txt: className.pw_p_id_required_txt,
                    e_typ1: className.pw_p_id_e_typ1,
                  }"
                >
                  비밀번호를 입력해주세요
                </p>
                <p
                  class="required_txt e_typ2"
                  v-bind:class="{
                    required_txt: className.pw_p_login_info_required_txt,
                    e_typ2: className.pw_p_login_info_e_typ2,
                  }"
                >
                  로그인 정보를 확인해주세요
                </p>
              </span>
              <button
                type="button"
                class="btn btn_size_full btn_c_gray btn_round"
                v-on:click="clickLogin"
              >
                <span>로그인</span>
              </button>
              <input
                type="checkbox"
                name=""
                id="rememberId"
                v-on:change="changeRememberId"
              /><label for="rememberId"><span>아이디 기억하기</span></label>
            </fieldset>
          </form>
        </div>
        <div class="comment_box">
          <dl>
            <dt>고객센터</dt>
            <dd>
              <ul>
                <li>
                  <span class="tit">계정 관련 문의 : </span
                  ><span class="txt">02-1588-1588</span
                  ><span class="txt"
                    >평일 09:00~18:00 (토요일 및 공휴일 휴무)</span
                  >
                </li>
                <li>
                  <span class="tit">충전 관련 문의 : </span
                  ><span class="txt">02-1577-1577</span
                  ><span class="txt">24시간 가능 (연중무휴)</span>
                </li>
              </ul>
            </dd>
          </dl>
        </div>
      </div>
      <!--// login_area -->
    </div>
    <!--// wrapper_body -->
  </div>
  <!--// wrapper -->
</template>

<script>
import axios from "axios";
// @ is an alias to /src

export default {
  // 1. name
  name: "Index",
  // 2. data
  data() {
    return {
      data: {
        id: null,
        password: null,
        rememberId: null,
      },
      className: {
        id_span_check_error: true, // check_error has_error e_typ1~e_typ2
        id_span_has_error: false, // check_error has_error e_typ1~e_typ2
        id_span_e_typ1: false, // check_error has_error e_typ1~e_typ2
        id_span_e_typ2: false, // check_error has_error e_typ1~e_typ2

        id_p_id_required_txt: false, // required_txt e_typ1
        id_p_id_e_typ1: false, // required_txt e_typ1
        id_p_login_info_required_txt: false, // required_txt e_typ2
        id_p_login_info_e_typ2: false, // required_txt e_typ2

        pw_span_check_error: true, // check_error has_error e_typ1~e_typ2
        pw_span_has_error: false, // check_error has_error e_typ1~e_typ2
        pw_span_e_typ1: false, // check_error has_error e_typ1~e_typ2
        pw_span_e_typ2: false, // check_error has_error e_typ1~e_typ2

        pw_p_id_required_txt: false, // required_txt e_typ1
        pw_p_id_e_typ1: false, // required_txt e_typ1
        pw_p_login_info_required_txt: false, // required_txt e_typ2
        pw_p_login_info_e_typ2: false, // required_txt e_typ2
      },
    };
  },
  // 3. components
  components: {},
  // 4. Lifecycle
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 5. watch
  watch: {},
  // 6. computed
  computed: {},
  // 7. methods
  methods: {
    //
    changeRememberId: function (event) {
      //
      this.data.rememberId = event.target.checked;
      console.log(this.data.rememberId);
      //
      if (event.target.checked) {
      } else if (!event.target.checked) {
      }
      //
    },
    //
    inputPassword: function (event) {
      let value = event.target.value;

      this.data.password = value;

      // 패스워드
      this.className.pw_span_check_error = true; // check_error has_error e_typ1~e_typ2
      this.className.pw_span_has_error = false; // check_error has_error e_typ1~e_typ2
      this.className.pw_span_e_typ1 = false; // check_error has_error e_typ1~e_typ2
      this.className.pw_span_e_typ2 = false; // check_error has_error e_typ1~e_typ2
      // 패스워드를 입력해주세요
      this.className.pw_p_id_required_txt = false; // required_txt e_typ1
      this.className.pw_p_id_e_typ1 = false; // required_txt e_typ1
      // 로그인 정보를 확인해주세요
      this.className.pw_p_login_info_required_txt = false; // required_txt e_typ2
      this.className.pw_p_login_info_e_typ2 = false; // required_txt e_typ2
    },
    //
    inputId: function (event) {
      let value = event.target.value;

      this.data.id = value;

      // 아이디
      this.className.id_span_check_error = true; // check_error has_error e_typ1~e_typ2
      this.className.id_span_has_error = false; // check_error has_error e_typ1~e_typ2
      this.className.id_span_e_typ1 = false; // check_error has_error e_typ1~e_typ2
      this.className.id_span_e_typ2 = false; // check_error has_error e_typ1~e_typ2
      // 아이디를 입력해주세요
      this.className.id_p_id_required_txt = false; // required_txt e_typ1
      this.className.id_p_id_e_typ1 = false; // required_txt e_typ1
      // 로그인 정보를 확인해주세요
      this.className.id_p_login_info_required_txt = false; // required_txt e_typ2
      this.className.id_p_login_info_e_typ2 = false; // required_txt e_typ2
    },
    //
    clickLogin: async function () {
      if (!this.data.id) {
        // 아이디
        this.className.id_span_check_error = true; // check_error has_error e_typ1~e_typ2
        this.className.id_span_has_error = true; // check_error has_error e_typ1~e_typ2
        this.className.id_span_e_typ1 = true; // check_error has_error e_typ1~e_typ2
        this.className.id_span_e_typ2 = false; // check_error has_error e_typ1~e_typ2
        // 아이디를 입력해주세요
        this.className.id_p_id_required_txt = true; // required_txt e_typ1
        this.className.id_p_id_e_typ1 = true; // required_txt e_typ1
        // 로그인 정보를 확인해주세요
        this.className.id_p_login_info_required_txt = false; // required_txt e_typ2
        this.className.id_p_login_info_e_typ2 = false; // required_txt e_typ2
      }
      if (!this.data.password) {
        // 패스워드
        this.className.pw_span_check_error = true; // check_error has_error e_typ1~e_typ2
        this.className.pw_span_has_error = true; // check_error has_error e_typ1~e_typ2
        this.className.pw_span_e_typ1 = true; // check_error has_error e_typ1~e_typ2
        this.className.pw_span_e_typ2 = false; // check_error has_error e_typ1~e_typ2
        // 패스워드를 입력해주세요
        this.className.pw_p_id_required_txt = true; // required_txt e_typ1
        this.className.pw_p_id_e_typ1 = true; // required_txt e_typ1
        // 로그인 정보를 확인해주세요
        this.className.pw_p_login_info_required_txt = false; // required_txt e_typ2
        this.className.pw_p_login_info_e_typ2 = false; // required_txt e_typ2
      }

      if (this.data.id && this.data.password) {
        //
        let expiredays = "365";
        let todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays); // 현재 시각 + 일 단위로 쿠키 만료 날짜 변경
        //todayDate.setTime(todayDate.getTime() + (expiredays * 24 * 60 * 60 * 1000)); // 밀리세컨드 단위로 쿠키 만료 날짜 변경
        document.cookie =
          "id" +
          "=" +
          escape(this.data.id) +
          "; path=/; expires=" +
          todayDate.toGMTString() +
          ";";

        //
        document.cookie =
          "password" +
          "=" +
          escape(this.data.password) +
          "; path=/; expires=" +
          todayDate.toGMTString() +
          ";";

        //
      }

      let params = {};
      let config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.defaults.withCredentials = true;
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        { params: params },
        config
      );

      var value = document.cookie.match("(^|;) ?" + "id" + "=([^;]*)(;|$)");

      this.$router.push("/");
    },
  },
};
</script>
<style scoped></style>

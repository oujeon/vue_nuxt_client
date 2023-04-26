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
              <span class="check_error has_error e_typ2"
                ><!-- 필수입력 에러 발생 시  has_error  와 e_typ1 ~ e_typ2 추가 -->
                <input type="text" placeholder="아이디" />
                <p class="required_txt e_typ1">아이디를 입력해주세요</p>
              </span>
              <span class="check_error has_error e_typ2"
                ><!-- 필수입력 에러 발생 시  has_error  와 e_typ1 ~ e_typ2 추가 -->
                <input type="password" name="" id="" placeholder="비밀번호" />
                <p class="required_txt e_typ1">비밀번호를 입력해주세요</p>
                <p class="required_txt e_typ2">로그인 정보를 확인해주세요</p>
              </span>
              <button
                type="button"
                class="btn btn_size_full btn_c_gray btn_round"
              >
                <span>로그인</span>
              </button>
              <input type="checkbox" name="" id="rememberId" /><label
                for="rememberId"
                ><span>아이디 기억하기</span></label
              >
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
export default {
  name: "IndexPage",
};
</script>
<style></style>

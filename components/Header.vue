<!-- Please remove this file from your project -->
<template>
  <!-- header -->
  <header id="header">
    <!-- head_left -->
    <div class="head_left">
      <button class="top_logo" v-on:click="clickLogo">
        <span class="hide">GS칼텍스</span>
      </button>
      <nav class="gnb">
        <ul class="gnb_depth1">
          <li><button>대시보드</button></li>
          <!-- 1뎁스 해당메뉴 페이지 일경우 li에 addClass : is_active -->
          <li>
            <button>충전현황</button>
            <ul class="gnb_depth2">
              <li><button>리스트뷰</button></li>
              <li><button>지도뷰</button></li>
            </ul>
          </li>
          <li>
            <button>이력</button>
            <ul class="gnb_depth2">
              <li><button>충전이력</button></li>
              <li><button>결제이력</button></li>
              <li><button>장애이력</button></li>
              <li><button>원격제어이력</button></li>
              <li><button>고장점검이력</button></li>
            </ul>
          </li>
          <li>
            <button>리포트</button>
            <ul class="gnb_depth2">
              <li><button>요약리포트</button></li>
              <li>
                <button>충전소통계</button>
                <ul class="gnb_depth3">
                  <li><button>충전리포트</button></li>
                  <li><button>장애리포트</button></li>
                  <li><button>매출리포트</button></li>
                </ul>
              </li>
              <li>
                <button>비교통계</button>
                <ul class="gnb_depth3">
                  <li><button>충전리포트</button></li>
                  <li><button>장애리포트</button></li>
                  <li><button>매출리포트</button></li>
                </ul>
              </li>
            </ul>
          </li>
          <!-- 20191210 수정 -->
          <li>
            <button>충전인프라</button>
            <ul class="gnb_depth2">
              <li>
                <button>충전가격관리</button>
                <ul class="gnb_depth3">
                  <li><button>공통단가관리</button></li>
                  <li><button>충전소별단가관리</button></li>
                  <li><button>한전매입가관리</button></li>
                  <li><button>선택요금관리</button></li>
                  <li><button>카드수수료관리</button></li>
                  <li><button>고정비용관리</button></li>
                </ul>
              </li>
              <li>
                <button>인프라관리</button>
                <ul class="gnb_depth3">
                  <li><button>충전기관리</button></li>
                  <li><button>충전소관리</button></li>
                  <li><button>제조사관리</button></li>
                  <li><button>모델관리</button></li>
                  <li><button>장애코드관리</button></li>
                  <li><button>고장/점검항목관리</button></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <button>운영관리</button>
            <ul class="gnb_depth2">
              <li><button>부대시설관리</button></li>
              <li><button>공지사항</button></li>
            </ul>
          </li>
          <!--// 20191210 수정 -->
          <li>
            <button>설정</button>
            <ul class="gnb_depth2">
              <li><button>운영자계정설정</button></li>
              <li><button>메뉴권한설정</button></li>
              <li><button>시스템설정</button></li>
              <li><button>나의계정관리</button></li>
              <li><button>도움말</button></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
    <!--// head_left -->
    <!-- head_right -->
    <div class="head_right">
      <div
        class=""
        v-bind:class="{
          login_typ_wrap: className.admin_div_login_typ_wrap,
          is_active: className.admin_div_login_typ_wrap_is_active,
        }"
      >
        <button class="btn_user_info" v-on:click="clickAdmin">
          <span>Admin</span>
        </button>
        <!-- user_info_wrap admin 영역-->
        <div class="user_info_wrap">
          <!-- 활성화 시 addClass : is_active -->
          <div class="info_board">
            <div class="info_head">
              <h2 class="h2_tit">admin<span class="sub_tit">IT관리자</span></h2>
              <div class="head_btn_set">
                <button class="btn"><span>개인정보 수정</span></button>
                <button class="btn btn_c_gray"><span>로그아웃</span></button>
              </div>
            </div>
            <div class="info_body">
              <ul class="info_list">
                <li>홍길동 admin01@email.com</li>
                <li>GS 칼텍스 IT정보부</li>
              </ul>
            </div>
          </div>
        </div>
        <!--// user_info_wrap -->
      </div>
      <div
        class=""
        v-bind:class="{
          top_sel: className.charge_house_div_top_sel,
          is_active: className.charge_house_div_top_sel_is_active,
        }"
      >
        <!-- 활성화 시 addClass : is_active -->
        <button class="btn_top_sel" v-on:click="clickChargeHouse">
          <span>충전소 전체</span>
        </button>
        <div class="top_sel_wrap">
          <ul>
            <li><button title="충전소전체">충전소전체</button></li>
            <li>
              <button title="(주)한미석유구로그린주유소(123456)">
                (주)한미석유구로그린주유소(123456)
              </button>
            </li>
            <li>
              <button title="(주)영원에너지 풍기주유소(123456)">
                (주)영원에너지 풍기주유소(123456)
              </button>
            </li>
            <li>
              <button title="대성산업(주) 청량리주유소(123456)">
                대성산업(주) 청량리주유소(123456)
              </button>
            </li>
            <li>
              <button title="경일석유직영삼방주유소(123456)">
                경일석유직영삼방주유소(123456)
              </button>
            </li>
            <li>
              <button title="논현신도시제이주유소(123456)">
                논현신도시제이주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
            <li>
              <button title="스마트위례주유소(123456)">
                스마트위례주유소(123456)
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="alert_view">
        <!-- 알림이 있을경우 has_alert 추가 -->
        <button class="btn_alert icon" v-on:click="clickAlert">
          <span class="hide">알림</span>
        </button>
        <!-- alert_popup_all_wrap 알림팝업 전체 영역-->
        <div
          class=""
          v-bind:class="{
            alert_popup_all_wrap: className.alert_alert_popup_all_wrap,
            is_active: className.alert_alert_popup_all_wrap_is_active,
          }"
        >
          <!-- 활성화 시 addClass : is_active -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ1_1">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">고장 - 등록</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">
                  스마트 남서울주유소, Charger B, DC콤보(1)
                </div>
                <div class="body_txt">
                  고장 - 커넥터<br />커넥터 파손, 교체 필요
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ1_2">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">고장 - 완료</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">
                  스마트 남서울주유소, Charger B, DC콤보(1)
                </div>
                <div class="body_txt">
                  고장/점검 (고장 - 커넥터) 완료 처리됨
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ1_3">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">가용성변경</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">
                  스마트 남서울주유소, Charger B, DC콤보(1)
                </div>
                <div class="body_txt">
                  가용성변경(Inoperative))으로 상태 변경됨
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ1_4">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">가용성변경</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">
                  스마트 남서울주유소, Charger B, DC콤보(1)
                </div>
                <div class="body_txt">
                  가용성변경(Operative)으로 상태 변경됨
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ2">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">장애 (Warning)</span
                  ><span class="pop_time">어제 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">스마트 남서울주유소, Charger D</div>
                <div class="body_txt">
                  장애코드37 (Service Discovery error)<br />콤보 차량에서 충전
                  정지요청 : 서비스 디스커버리 단계 이상(콤보)
                </div>
                <div class="body_result">
                  콤보 시퀀스 이상으로 커플러 제거 후 충전을 재시작하세요. 계속
                  장애 발생 시 제조사에 문의해주세요
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ3_1">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">점유</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">스마트 남서울주유소, Charger D</div>
                <div class="body_txt">점유시간경과 00:22:56</div>
                <div class="body_result">출차를 안내해주세요</div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ3_2">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">점유해제</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">스마트 남서울주유소, Charger D</div>
                <div class="body_txt">점유 해제 (총 점유시간 08:22:56)</div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ4">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">통신장애</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">스마트 남서울주유소, Charger D</div>
                <div class="body_txt">
                  장애코드1 (s-box connection error)<br />통신 모뎀 연결 오류
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ5">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">상태미확인</span
                  ><span class="pop_time">2019-06-30 13:00</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_tit">스마트 남서울주유소, Charger D</div>
                <div class="body_txt">
                  충전기 상태가 확인되지 않음<br />(충전기 상태 갱신 후 30분
                  초과)
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->

          <!-- alert_popup_wrap 팝업 개별영역 -->
          <div class="alert_popup_wrap alert_typ6">
            <!-- alert_typ1_1(고장/점검-등록), alert_typ1_2(고장/점검-완료), alert_typ1_3(고장/점검-가용성변경inoperative), alert_typ1_4(고장/점검-가용성변경operative), alert_typ2(장애Warning), alert_typ3_1(점유_red), alert_typ3_2(점유_해제), alert_typ4(통신장애), alert_typ5(상태미확인), alert_typ6(미확인알람) -->
            <div class="alert_popup">
              <div class="pop_head">
                <span class="pop_title">
                  <span class="pop_tit">미확인 알림이 6개 있습니다.</span>
                </span>
                <button class="close_alert_popup">
                  <span class="hide">팝업 닫기</span>
                </button>
              </div>
              <div class="pop_body">
                <div class="body_txt">
                  장애(Critical) 1개, 장애(Warning) 2개, 점유 3개
                </div>
              </div>
            </div>
          </div>
          <!--// alert_popup_wrap -->
        </div>
        <!--// alert_popup_all_wrap -->
        <!-- alert_board_wrap 알림창 영역-->
        <div class="alert_board_wrap">
          <!-- 활성화 시 addClass : is_active -->
          <div class="alert_board">
            <div class="board_head">
              <h2 class="h2_tit">알림</h2>
              <button class="go_set">
                <span class="hide">알림설정하기</span>
              </button>
            </div>
            <div class="board_body">
              <ul class="alert_history_list">
                <!-- 일별 -->
                <li>
                  <div class="history_date"><span>오늘</span></div>
                  <div class="alert_list">
                    <!-- 건별 -->
                    <button class="typ1_1">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">2분전</div>
                      <div class="alert_typ">고장 - 등록</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        고장 - 커넥터<br />커넥터 파손, 교체 필요
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_2">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">5분전</div>
                      <div class="alert_typ">고장 - 완료</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        고장 (고장 - 커넥터) 완료 처리됨
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_3">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">고장 - 가용성변경</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        가용성변경(Inoperative))으로 상태 변경됨
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_4">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">고장 - 가용성변경</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        가용성변경(Operative)으로 상태 변경됨
                      </div>
                    </button>
                    <!--// 건별 -->
                  </div>
                </li>
                <!--// 일별 -->
                <!-- 일별 -->
                <li>
                  <div class="history_date"><span>어제</span></div>
                  <div class="alert_list">
                    <!-- 건별 -->
                    <button class="typ2">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">장애 - Warning</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger D
                      </div>
                      <div class="alert_txt">
                        장애코드37 (Service Discovery error)<br />콤보 차량에서
                        충전 정지요청 : 서비스 디스커버리 단계 이상(콤보)
                      </div>
                      <div class="alert_result">
                        콤보 시퀀스 이상으로 커플러 제거 후 충전을 재시작하세요.
                        계속 장애 발생 시 제조사에 문의해주세요
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ3_1">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">점유</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger D
                      </div>
                      <div class="alert_txt">점유시간경과 00:22:56</div>
                      <div class="alert_result">출차를 안내해주세요</div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ3_2">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">점유해제</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger D
                      </div>
                      <div class="alert_txt">
                        점유 해제 ( 총점유시간 08:22:56)
                      </div>
                    </button>
                    <!--// 건별 -->
                  </div>
                </li>
                <!--// 일별 -->
                <!-- 일별 -->
                <li>
                  <div class="history_date"><span>2019-05-10</span></div>
                  <div class="alert_list">
                    <!-- 건별 -->
                    <button class="typ4">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">통신장애</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger D
                      </div>
                      <div class="alert_txt">
                        장애코드1 (s-box connection error) <br />통신 모뎀 연결
                        오류
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ5">
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">상태미확인</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger D
                      </div>
                      <div class="alert_txt">
                        충전기 상태가 확인되지 않음<br />(충전기 상태 갱신 후
                        30분 초과)
                      </div>
                    </button>
                    <!--// 건별 -->
                  </div>
                </li>
                <!--// 일별 -->
                <!-- 일별 -->
                <li>
                  <div class="history_date"><span>2019-05-09</span></div>
                  <div class="alert_list">
                    <!-- 건별 -->
                    <button class="typ1_1">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">2분전</div>
                      <div class="alert_typ">고장 - 등록</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        고장 - 커넥터<br />커넥터 파손, 교체 필요
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_2">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">5분전</div>
                      <div class="alert_typ">고장 - 완료</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        고장 (고장 - 커넥터) 완료 처리됨
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_3">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">고장 - 가용성변경</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        가용성변경(Inoperative)으로 상태 변경됨
                      </div>
                    </button>
                    <!--// 건별 -->
                    <!-- 건별 -->
                    <button class="typ1_4">
                      <!-- typ1_1(고장/점검-등록), typ1_2(고장/점검-완료), typ1_3(고장/점검-가용성변경inoperative), typ1_4(고장/점검-가용성변경operative), typ2(장애Warning), typ3_1(점유_red), typ3_2(점유_해제), typ4(통신장애), typ5(상태미확인) -->
                      <div class="alert_time">08:35</div>
                      <div class="alert_typ">고장 - 가용성변경</div>
                      <div class="alert_tit">
                        스마트 남서울주유소, Charger B, DC콤보(1)
                      </div>
                      <div class="alert_txt">
                        가용성변경(Operative)으로 상태 변경됨
                      </div>
                    </button>
                    <!--// 건별 -->
                  </div>
                </li>
                <!--// 일별 -->
              </ul>
            </div>
            <!-- alert_set_wrap 알림창 설정 -->
            <div class="alert_set_wrap">
              <!-- 활성화 시 addClass : is_active -->
              <div class="alert_set">
                <div class="alert_set_head">
                  <button class="go_back">
                    <span class="hide">알림 타임라인 페이지로 복귀</span>
                  </button>
                  <h2 class="h2_tit">알림설정</h2>
                  <button class="close_alert_set">
                    <span class="hide">설정창 닫기</span>
                  </button>
                </div>
                <div class="alert_set_body">
                  <div class="switch_box">
                    <div class="switch_set">
                      <div class="switch_tit">알림</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch1"
                          checked
                        /><label for="switch1"></label>
                      </div>
                    </div>
                  </div>
                  <div class="switch_box">
                    <div class="switch_set">
                      <div class="switch_tit">알림팝업</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch2"
                          checked
                        /><label for="switch2"></label>
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">알림음</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch3"
                          checked
                        /><label for="switch3"></label>
                      </div>
                    </div>
                  </div>
                  <h3 class="h3_tit">알림 카테고리</h3>
                  <div class="switch_box">
                    <div class="switch_set">
                      <div class="switch_tit">고장</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch4"
                          checked
                        /><label for="switch4"></label>
                      </div>
                      <div class="switch_comment">
                        고장이 등록되거나 완료된 경우 알려드립니다.
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">가용성변경</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch5"
                          checked
                        /><label for="switch5"></label>
                      </div>
                      <div class="switch_comment">
                        가용성변경으로 충전기 상태가 변경되는 경우 알려드립니다.
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">장애</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch6"
                          checked
                        /><label for="switch6"></label>
                      </div>
                      <div class="switch_comment">
                        Warning / Critical Level의 장애코드 발생 시<br />장애
                        원인과 조치 내용을 알려드립니다.
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">통신장애</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch7"
                          checked
                        /><label for="switch7"></label>
                      </div>
                      <div class="switch_comment">
                        충전기와 서버 간 통신이 끊어져<br />충전기 사용이 제한된
                        경우 알려드립니다.
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">상태미확인</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch8"
                          checked
                        /><label for="switch8"></label>
                      </div>
                      <div class="switch_comment">
                        충전기 상태 갱신은 1분 이상 수분 이내에 갱신됩니다.<br />갱신
                        이후 30분이 지난 경우 알려드립니다.
                      </div>
                    </div>
                    <div class="switch_set">
                      <div class="switch_tit">점유(주차)</div>
                      <div class="switch_check">
                        <input
                          type="checkbox"
                          name=""
                          id="switch9"
                          checked
                        /><label for="switch9"></label>
                      </div>
                      <div class="switch_comment">
                        미충전 상태가 10분 이상 경과하여 충전기를 점유한 경우와
                        점유가 해제된 경우 알려드립니다.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--// alert_set_wrap -->
          </div>
        </div>
        <!--// alert_board_wrap -->
      </div>
      <div class="time_info">5월 17일 월요일 13:34:32</div>
    </div>
    <!--// head_right -->
  </header>
  <!--// header -->
</template>

<script>
// @ is an alias to /src

export default {
  // 1. name
  name: "Header",
  // 2. data
  data() {
    return {
      className: {
        admin_div_login_typ_wrap: true, // login_typ_wrap is_active
        admin_div_login_typ_wrap_is_active: false, // login_typ_wrap is_active
        charge_house_div_top_sel: true, // top_sel is_active
        charge_house_div_top_sel_is_active: false, // top_sel is_active
        alert_alert_popup_all_wrap: true, // alert_popup_all_wrap is_active
        alert_alert_popup_all_wrap_is_active: false, // alert_popup_all_wrap is_active
      },
      is: {
        isAdminWindow: false,
        isChargeHouseWindow: false,
        isAlertWindow: false,
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
    clickLogo: function () {
      this.$router.push("/");
    },
    //
    clickAlert: function () {
      // 알림 창
      this.className.alert_alert_popup_all_wrap = true; // alert_popup_all_wrap is_active
      this.className.alert_alert_popup_all_wrap_is_active =
        !this.is.isAlertWindow; // alert_popup_all_wrap is_active
      //
      this.is.isAlertWindow = !this.is.isAlertWindow;
    },
    //
    clickChargeHouse: function () {
      // 충전소 전체 창
      this.className.charge_house_div_top_sel = true; // login_typ_wrap is_active
      this.className.charge_house_div_top_sel_is_active =
        !this.is.isChargeHouseWindow; // login_typ_wrap is_active
      //
      this.is.isChargeHouseWindow = !this.is.isChargeHouseWindow;
    },
    //
    clickAdmin: function () {
      // Admin 창
      this.className.admin_div_login_typ_wrap = true; // login_typ_wrap is_active
      this.className.admin_div_login_typ_wrap_is_active =
        !this.is.isAdminWindow; // login_typ_wrap is_active
      //
      this.is.isAdminWindow = !this.is.isAdminWindow;
    },
  },
};
</script>
<style scoped></style>

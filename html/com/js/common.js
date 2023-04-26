
//gnb메뉴 스크립트 start
// var gnbMenu = document.getElementsByClassName("gnb");
// gnbMenu[0].addEventListener("mouseenter", function(){
//     document.getElementById("header").classList.add("is_active");
// });
// gnbMenu[0].addEventListener("mouseleave", function(){
//     document.getElementById("header").classList.remove("is_active");
// });


//gnb오버시 열리고 gnb 내의 버튼을 클릭시 닫히게 할 경우 기존 gnb스크립트 삭제 후 아래 스크립트 실행
var gnbMenu = document.getElementById("header");
var gnbMenuCont = document.querySelectorAll(".gnb")[0];
var gnbContainer = document.getElementById("container");
var gnbMenu1depth = document.querySelectorAll(".gnb .gnb_depth1 > li > button");
var gnbButton = document.querySelectorAll(".gnb .gnb_depth2 button");
var gnbButtonLeng = gnbButton.length;
var gnbMenu1depthLeng = gnbMenu1depth.length;
var gnbTimer;
for(let i=0;i<gnbMenu1depthLeng;i++){//1뎁스 버튼으로 마우스 오버시 gnb열림
    gnbMenu1depth[i].addEventListener("mouseenter", function(){
        gnbTimer = setTimeout(function(){
            document.getElementById("header").classList.add("is_active");
            document.getElementById("container").classList.add("is_active");
        },500)
        
    });
}
for(let j=0;j<gnbButtonLeng;j++){//gnb 2depth내의 버튼 클릭시 gnb닫힘
    gnbButton[j].addEventListener("click", function(){
        clearTimeout(gnbTimer);
        document.getElementById("header").classList.remove("is_active");
        document.getElementById("container").classList.remove("is_active");
    });
}
gnbMenuCont.addEventListener("mouseleave", function(){//gnb영역에서 벗어날 경우 gnb닫힘
    clearTimeout(gnbTimer);
    document.getElementById("header").classList.remove("is_active");
    document.getElementById("container").classList.remove("is_active");
});




//gnb메뉴 스크립트 end
//알림창 start
var alertBoardBtn = document.getElementsByClassName("btn_alert");
var alertBoard = document.getElementsByClassName("alert_board_wrap");
alertBoardBtn[0].addEventListener("click", function(){
    if(alertBoard[0].classList.contains("is_active")){
        alertBoard[0].classList.remove("is_active");
    }else{
        alertBoard[0].classList.add("is_active");
    }
    
});
//알림창 end
//알림창 설정 start
var alertSetBtn = document.getElementsByClassName("go_set");
var alertSet = document.getElementsByClassName("alert_set_wrap");
var alertBackBtn = document.getElementsByClassName("go_back");
var alertClose = document.getElementsByClassName("close_alert_set");
alertSetBtn[0].addEventListener("click", function(){
    alertSet[0].classList.add("is_active");
});
alertBackBtn[0].addEventListener("click", function(){
    alertSet[0].classList.remove("is_active");
});
alertClose[0].addEventListener("click", function(){
    alertBoard[0].classList.remove("is_active");
});
//알림창 설정 end
//사용자 정보 팝업 start
var userInfoBtn = document.getElementsByClassName("btn_user_info");
var userInfoBoard = document.getElementsByClassName("login_typ_wrap");
userInfoBtn[0].addEventListener("click", function(){
    if(userInfoBoard[0].classList.contains("is_active")){
        userInfoBoard[0].classList.remove("is_active");
    }else{
        userInfoBoard[0].classList.add("is_active");
    }
    
});

//사용자 정보 팝업 end
//상단 충전소전체 셀렉트 정보 팝업 start
var topSelBtn = document.getElementsByClassName("btn_top_sel");
var topSelBtnBoard = document.getElementsByClassName("top_sel");
topSelBtn[0].addEventListener("click", function(){
    if(topSelBtnBoard[0].classList.contains("is_active")){
        topSelBtnBoard[0].classList.remove("is_active");
    }else{
        topSelBtnBoard[0].classList.add("is_active");
    }
    
});
//상단 충전소전체 셀렉트 정보 팝업 end
//search 필터 열고닫기 start
var searchFilter = document.getElementsByClassName("btn_filter_toggle");
var searchFilterLeng = searchFilter.length;
if(searchFilterLeng > 0){
    var searchFilterWrap = document.getElementsByClassName("search_filter_area")[0].parentNode;
    var searchFilterClose = document.getElementById("close_filter");
    searchFilter[0].addEventListener("click", function(){
        if(searchFilterWrap.classList.contains("is_active")){
            searchFilterWrap.classList.remove("is_active");
        }else{
            searchFilterWrap.classList.add("is_active");
        }
        
    });
    searchFilterClose.addEventListener("click",function(){//필터 닫기버튼 클릭시 닫기
        searchFilterWrap.classList.remove("is_active");
    });
}


//와이드 화면 구현
var btnWide = document.getElementsByClassName("btn_wide");
var resizeBox = document.querySelectorAll("#container .contents")[0];
if(btnWide.length > 0){
    btnWide[0].addEventListener("click",function(){
        if(resizeBox.classList.contains("is_wide")){
            resizeBox.classList.remove("is_wide");
        }else{
            resizeBox.classList.add("is_wide")
        }
    });
}

//search 필터 열고닫기 end
//툴팁 start
// var tool = document.getElementsByClassName("tooltip_wrap");
// var toolLeng = tool.length;
// if(toolLeng > 0){
//     for(i=0;i<toolLeng;i++){
//         tool[i].getElementsByClassName("ico_tooltip")[0].addEventListener("mouseenter",function(){
//             var thisTool = this.parentNode;
//             thisTool.classList.add("is_active");
//         });
//         tool[i].getElementsByClassName("ico_tooltip")[0].addEventListener("mouseleave",function(){
//             var thisTool = this.parentNode;
//             thisTool.classList.remove("is_active");
//         });
//     }
// }

//상태값 warning상태일때 툴팁표시  충전현황 페이지 필수적으로 추가해야함!!!!!!!!!!!!!!!!!!!!
// var warningTool = document.querySelectorAll(".charge_status.is_error");
// var warningToolLeng = warningTool.length;
// if(warningToolLeng > 0){
//     var newToolText = document.createElement("span");
//     newToolText.classList.add("add_tool_txt")
//     newToolText.appendChild(document.createTextNode("충전기 및 커넥터 사용에는 문제가 없으나,\n주의(Warning) 상태의 장애가 발생한 경우,\n익일 00:00 전까지 경고 아이콘이 표시됩니다."));
//     for(i=0;i<warningToolLeng;i++){
//         warningTool[i].addEventListener("mouseenter",function(){
//             this.appendChild(newToolText);
//         });
//         warningTool[i].addEventListener("mouseleave",function(){
//             this.removeChild(newToolText);
//         });
//     }
// }


//툴팁 end
// //info_box start
// var infoBox = document.querySelectorAll(".info_box dl dt button");
// var infoBoxLeng = document.getElementsByClassName("info_box").length;
// if(infoBoxLeng > 0){
//     for(i=0;i<infoBoxLeng;i++){
//         infoBox[i].addEventListener("click",function(){
//             var thisTool = this.parentNode.parentNode.parentNode;
//             if(thisTool.classList.contains("is_active")){
//                 thisTool.classList.remove("is_active");
//             }else{
//                 thisTool.classList.add("is_active");
//             }
//         });
//     }
// }
// //info_box end
//충전소 전체 필터 열고닫기 start
var btnFilter = document.getElementsByClassName("btn_sel_filter");
var btnFilterLeng = btnFilter.length;
var btnFilterWrap = document.getElementsByClassName("sel_filter_wrap")[0];
if(btnFilterLeng > 0){
    btnFilter[0].addEventListener("click", function(){
        if(btnFilterWrap.classList.contains("is_active")){
            btnFilterWrap.classList.remove("is_active");
        }else{
            btnFilterWrap.classList.add("is_active");
        }
    });
}
//충전소 전체 필터 열고닫기 end
//커넥터 타입 선택 필터 열고닫기 start
var btnFilter2 = document.getElementsByClassName("btn_sel_filter2");
var btnFilter2Leng = btnFilter2.length;
//console.log(btnFilter2Leng);
if(btnFilter2Leng > 0){
    for(i=0;i<btnFilter2Leng;i++){
        btnFilter2[i].addEventListener("click", function(){
            if(this.parentNode.classList.contains("is_active")){
                this.parentNode.classList.remove("is_active");
            }else{
                this.parentNode.classList.add("is_active");
            }
        });
    }
}

//영역이외의 부분 클릭시 닫힘
document.onclick = function(e){
    //상단 충전소 선택 
    if(topSelBtnBoard[0].classList.contains("is_active")){
        if(findParentBySelector(e.target ,".top_sel") == null){
            topSelBtnBoard[0].classList.remove("is_active");
        }
    }
    //상단 사용자정보
    if(userInfoBoard[0].classList.contains("is_active")){
        if(findParentBySelector(e.target ,".login_typ_wrap") == null){
            userInfoBoard[0].classList.remove("is_active");
        }
    }
    //상단 알림
    if(alertBoard[0].classList.contains("is_active")){
        if(findParentBySelector(e.target ,".alert_view") == null){
            alertBoard[0].classList.remove("is_active");
        }
    }
    //충전소 전체 필터 열고닫기
    if(btnFilterLeng > 0){
        if(btnFilterWrap.classList.contains("is_active")){
            if(findParentBySelector(e.target ,".sel_filter_wrap") == null){
                btnFilterWrap.classList.remove("is_active");
            }
        }
    }
    //커넥터 타입 선택 필터 열고닫기
    // if(btnFilter2Leng > 0){
    //     if(btnFilter2Wrap.classList.contains("is_active")){
    //         if(findParentBySelector(e.target ,".sel_filter2") == null){
    //             btnFilter2Wrap.classList.remove("is_active");
    //         }
    //     }
    // }
    //충전소전체 구분전체 sel_filter2 열고닫기
    if(btnFilter2Leng > 0){
        //console.log("aaaa")
        for(i=0;i<btnFilter2Leng;i++){
            if(btnFilter2[i].parentNode.classList.contains("is_active")){
                if(findParentBySelector(e.target ,".sel_filter2") == null){
                    btnFilter2[i].parentNode.classList.remove("is_active");
                }
            }
        }
    }
}
//////////////////////////////////////////////////////////////타겟이외의 객체를 클릭했을 경우 사용하는 함수
function collectionHas(a, b) { //helper function (see below)
    for(var i = 0, len = a.length; i < len; i ++) {
        if(a[i] == b) return true;
    }
    return false;
}
function findParentBySelector(elm, selector) {
    var all = document.querySelectorAll(selector);
    var cur = elm.parentNode;
    while(cur && !collectionHas(all, cur)) { //keep going up until you find a match
        cur = cur.parentNode; //go up
    }
    return cur; //will return null if not found
}
/////////////////////////////////////////////////////////

//커스텀 스크롤
const scrollAlert = new PerfectScrollbar('.board_body');
const scrollAllAlert = new PerfectScrollbar('.alert_popup_all_wrap');
var sideViewCont = document.querySelectorAll(".side_view_cont");
var sideViewContLeng = sideViewCont.length;
if(sideViewContLeng > 0){
    for(i=0;i<sideViewContLeng;i++){
        new PerfectScrollbar(sideViewCont[i]);
    }
}
var searchViewArea = document.querySelectorAll(".search_view_area");
var searchViewAreaLeng = searchViewArea.length;
if(searchViewAreaLeng > 0){
    new PerfectScrollbar('.search_view_area',{wheelSpeed:1});
}

var btnFilterViewArea = document.querySelectorAll(".sel_filter_view");
var btnFilterViewArea = btnFilterViewArea.length;
if(btnFilterViewArea > 0){
    new PerfectScrollbar('.sel_filter_view');
}
var popViewCont = document.querySelectorAll(".popup_body");
var popViewContLeng = popViewCont.length;
if(popViewContLeng > 0){
    for(i=0;i<popViewContLeng;i++){
        new PerfectScrollbar(popViewCont[i]);
    }
}
var sortViewCont = document.querySelectorAll(".dashboard_view6 .sort_tbl_wrap");
var sortViewContLeng = sortViewCont.length;
if(sortViewContLeng > 0){
    for(i=0;i<sortViewContLeng;i++){
        new PerfectScrollbar(sortViewCont[i]);
    }
}
var dropdownCont = document.querySelectorAll(".ant-dropdown-menu.ant-dropdown-menu-root");
var dropdownContLeng = dropdownCont.length;
if(dropdownContLeng > 0){
    for(i=0;i<dropdownContLeng;i++){
        new PerfectScrollbar(dropdownCont[i]);
    }
}
var dropdownSubCont = document.querySelectorAll(".ant-dropdown-menu.ant-dropdown-menu-sub");
var dropdownSubContLeng = dropdownSubCont.length;
if(dropdownSubContLeng > 0){
    for(i=0;i<dropdownSubContLeng;i++){
        new PerfectScrollbar(dropdownSubCont[i]);
    }
}

var topSelWrapCont = document.querySelectorAll(".top_sel_wrap ul");
var topSelWrapContLeng = topSelWrapCont.length;
if(topSelWrapContLeng > 0){
    for(i=0;i<topSelWrapContLeng;i++){
        new PerfectScrollbar(topSelWrapCont[i]);
    }
}

var infoBoxWrap = document.querySelectorAll(".status_detail_info > dd");
var infoBoxWrapLeng = infoBoxWrap.length;
if(infoBoxWrapLeng > 0){
    for(i=0;i<infoBoxWrapLeng;i++){
        new PerfectScrollbar(infoBoxWrap[i]);
    }
}

var activationArea = document.querySelectorAll(".activation_area");
var activationAreaLeng = activationArea.length;
if(activationAreaLeng > 0){
    for(i=0;i<activationAreaLeng;i++){
        new PerfectScrollbar(activationArea[i]);
    }
}
// var tblWideWrap = document.querySelectorAll(".tbl_wide");
// var tblWideWrapLeng = tblWideWrap.length;
// if(tblWideWrapLeng > 0){
//     for(i=0;i<tblWideWrapLeng;i++){
//         new PerfectScrollbar(tblWideWrap[i]);
//     }
// }

//드래그 소팅 인풋 삭제 관련 이슈
var dragTbl = document.querySelectorAll(".tbl_dragNdrop");
var dragTblLeng = dragTbl.length;
var dragTblInput = document.querySelectorAll(".tbl_dragNdrop tr td input");
var dragTblInputLeng = dragTblInput.length;
if(dragTblLeng > 0 && dragTblInputLeng > 0){
    for(let i=0;i<dragTblInputLeng;i++){
        dragTblInput[i].addEventListener("focusin", function(){
            this.parentNode.parentNode.parentNode.setAttribute("draggable", false);
        });
        dragTblInput[i].addEventListener("focusout", function(){
            this.parentNode.parentNode.parentNode.setAttribute("draggable", true);
        });
    }
}

//테이블 셀렉트 tr표시
var tblSel = document.querySelectorAll(".round_view_area.cont_left .search_view_area .ant-table-wrapper");
var tblSelLeng = tblSel.length;
if(tblSelLeng > 0){
    var tblSelTr = tblSel[0].querySelectorAll("tbody tr");
    var tblSelTrLeng = tblSelTr.length;
    for(let i=0;i<tblSelTrLeng;i++){
        tblSelTr[i].addEventListener("click", function(){
            for(let j=0;j<tblSelTrLeng;j++){
                if(j != i){
                    tblSelTr[j].classList.remove("is_selected");
                }
                this.classList.add("is_selected");
            }
        });
    }
}


//화면전체 로딩
function loadingStart(){
    var loadCont ='<div class="loading_wrap"></div>';
    document.body.insertAdjacentHTML("beforeend",loadCont);
}
function loadingEnd(){
    document.querySelector('.loading_wrap').remove();
}


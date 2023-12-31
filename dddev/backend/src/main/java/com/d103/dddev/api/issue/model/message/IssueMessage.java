package com.d103.dddev.api.issue.model.message;

public class IssueMessage {
    public static String create(){ return "이슈 문서 생성 완료"; }

    public static String list(){
        return "이슈 문서 목록 조회 완료";
    }
    public static String emptyList(){return "이슈 문서 조회 완료, 결과 없음";}

    public static String detail(){
        return "이슈 문서 상세 조회 완료";
    }

    public static String delete(){
        return "이슈 문서 삭제 완료";
    }

    public static String content(){
        return "이슈 문서 내용 수정 완료";
    }

    public static String status(){return "이슈 문서 상태 수정 완료";}
    public static String time(){return "이슈 문서 시간 수정 완료";}
    public static String sprint(){return "이슈 문서 스프린트 연결 완료";}
    public static String connect(){return "이슈 문서 연결 변경 완료";}

    public static String title() {return "이슈 문서 제목 수정 완료";
    }

    public static String sprintList() { return "다중 이슈 문서 스프린트 연결 변경 완료";
    }

    public static String disconnectSprint() { return "스프린트 연결이 해제 되었습니다.";
    }
}

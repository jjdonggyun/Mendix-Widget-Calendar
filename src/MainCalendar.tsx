import { ReactElement, createElement } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid"; // 주, 일 보기 위한 플러그인
import interactionPlugin from "@fullcalendar/interaction";
import koLocale from "@fullcalendar/core/locales/ko";
import { MainCalendarContainerProps } from "../typings/MainCalendarProps";
import "./ui/MainCalendar.css";
// import "@fullcalendar/core/index.css";
// import "@fullcalendar/daygrid/index.css";
// import "@fullcalendar/interaction/index.css";

export function MainCalendar({ onCreateEvent, onClickEvent }: MainCalendarContainerProps): ReactElement {
    const events = [
        { title: "Event 1", date: "2024-09-23" },
        { title: "Event 2", date: "2024-09-24" }
    ];
    
    const handleCreateEvent = () => {
        if (onCreateEvent && onCreateEvent.canExecute) {
            onCreateEvent.execute(); // Mendix Microflow 호출
        } else {
            alert("Microflow가 설정되지 않았습니다.");
        }
    };

    const handleClickEvent = () => {
        if (onClickEvent && onClickEvent.canExecute) {
            onClickEvent.execute(); // Mendix Microflow 호출
        }
    }

    return (
        <div>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} // timeGridPlugin 추가
                initialView="dayGridMonth"
                events={events}
                selectable={true}
                locale={koLocale}  // 한글 설정
                customButtons={{
                    createEventButton: {
                        text: "일정 만들기",
                        click: handleCreateEvent, // Mendix Microflow 호출 로직
                    },
                }}
                headerToolbar={{
                    left: "prev,next,today", // 왼쪽에 prev, next, today 버튼
                    center: "title", // 중앙에 제목(현재 월)
                    right: "dayGridMonth,timeGridWeek,timeGridDay createEventButton", // 오른쪽에 월, 주, 일 보기
                }}
                
                dateClick={() => {
                    handleClickEvent(); // 날짜 클릭 시 handleClickEvent 실행
                }}
            />
        </div>
    );
}

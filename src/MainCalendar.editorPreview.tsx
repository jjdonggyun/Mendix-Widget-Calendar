import { ReactElement, createElement } from "react";
import { MainCalendarPreviewProps } from "../typings/MainCalendarProps";

// sampleText와 HelloWorldSample을 사용하지 않는 preview 함수
export function preview(_: MainCalendarPreviewProps): ReactElement {
    return <div>This is the MainCalendar preview.</div>;
}

export function getPreviewCss(): string {
    return require("./ui/MainCalendar.css");
}

import React from "react";
import Day from "../../models/Day";
import { format } from "date-fns"
import Button from "../Button/Button";
import styles from "./DayOverviewItem.module.scss";

interface DayOverviewItemProps {
    day: Day,
    onDeleteDay: (id: string) => void,
}

const DayOverviewItem: React.FC<DayOverviewItemProps> = ({ day, onDeleteDay }: DayOverviewItemProps) => (
    <div className={styles.item}>
        <div className={styles.textContent}>{format(day.date, "dd/MM/yyyy")}</div>
        <Button
            onClick={() => onDeleteDay(day.id)}
            color="secondary"
        >
            X
        </Button>
    </div>
);

export default DayOverviewItem;
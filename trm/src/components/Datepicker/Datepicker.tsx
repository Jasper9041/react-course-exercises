import React from "react";
import { parse } from "date-fns";
import styles from "./Datepicker.module.scss";

interface DatepickerProps {
    value?: Date,
    onChange: (date: Date) => void,
}

interface DatepickerState {
    value?: Date,
}

class Datepicker extends React.Component<DatepickerProps, DatepickerState> {
    constructor(props: DatepickerProps) {
        super(props);
        this.state = {};
    }

    updateValue = (dateString: string) => {
        const dateValue = parse(dateString, "yyyy-MM-dd", new Date());

        this.setState({
            value: dateValue,
        });

        this.props.onChange(dateValue);
    }

    render() {
        return (
            <input
                className={styles.datepicker}
                type="date"
                onChange={event => this.updateValue(event.target.value)}
            />
        );
    }
}

export default Datepicker;
import { addDays } from 'date-fns';
import { useState } from 'react';
import {DateRangePicker} from 'react-date-range'
import moment from 'moment'

export function DateRange() {
    const [state, setState] = useState({
        selection: {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        },
        compare: {
            startDate: new Date(),
            endDate: addDays(new Date(), 3),
            key: 'compare'
        }
    });
    return (
        <DateRangePicker
            onChange={item => setState({ ...state, ...item })}
            months={1}
            minDate={addDays(new Date(), -30)}
            maxDate={addDays(new Date(), 30)}
            direction="vertical"
            scroll={{ enabled: true }}
            disabledDay={date=>{
                const min = moment().subtract(10, 'days')
                const max = moment().add(10, 'days')
                const m = moment(date)
                if (m.isBefore(min) || m.isAfter(max)) {
                    return 'disabled'
                }
                return false
            }}
            ranges={[state.selection, state.compare]}
            />
    )
}
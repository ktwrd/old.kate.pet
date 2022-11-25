<template>
    <div ref="txt">
    </div>
</template>
<script>
export default {
    name: 'TimeSinceComponent',
    props: {
        timestamp: {
            type: Number
        }
    },
    mounted () {
        setInterval(() => {
            let startDate = new Date(0)
            startDate.setUTCMilliseconds(this.$props.timestamp)
            let nowDate = new Date()

            // Time calculations for days, hours, minutes and seconds
            var diff = this.dateDiff(startDate, nowDate);
            var years = diff.years;
            var months = diff.months;
            var weeks = diff.weeks;
            var days = diff.days;
            var hours = diff.hours;
            var minutes = diff.minutes;
            var seconds = diff.seconds;

            let str = []
            if (years > 0) {
                str.push(`${years} year${years > 1 ? 's' : ''}`)
            }
            if (months > 0) {
                str.push(`${months} month${months > 1 ? 's' : ''}`)
            }
            if (weeks > 0) {
                str.push(`${weeks} week${weeks > 1 ? 's' : ''}`)
            }
            if (days > 0) {
                str.push(`${days} day${days > 1 ? 's' : ''}`)
            }
            if (hours > 0) {
                str.push(`${hours} hour${hours > 1 ? 's' : ''}`)
            }
            if (minutes > 0) {
                str.push(`${minutes} minute${minutes > 1 ? 's' : ''}`)
            }
            str.push(`${seconds} second${seconds > 1 ? 's' : ''}`)

            this.$refs['txt'].innerHTML = str.join(', ')
        }, 500)
    },
    methods: {
        getMonthDifference (startDate, endDate) {
            return (endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear()));
        },
        dateDiff (dt1, dt2) {
            /*
            * setup 'empty' return object
            */
            var ret = {
                seconds: 0,
                minutes: 0,
                hours: 0,
                days: 0,
                months: 0,
                years: 0
            };

            /*
            * If the dates are equal, return the 'empty' object
            */
            if (dt1 == dt2) return ret;

            /*
            * ensure dt2 > dt1
            */
            if (dt1 > dt2) {
                var dtmp = dt2;
                dt2 = dt1;
                dt1 = dtmp;
            }

            /*
            * First get the number of full years
            */

            var year1 = dt1.getFullYear();
            var year2 = dt2.getFullYear();

            var month1 = dt1.getMonth();
            var month2 = dt2.getMonth();

            var day1 = dt1.getDate();
            var day2 = dt2.getDate();

            /*
            * Set initial values bearing in mind the months or days may be negative
            */

            ret['years'] = year2 - year1;
            ret['months'] = month2 - month1;
            ret['days'] = day2 - day1;
            let dt1TS = dt1.getTime()
            let dt2TS = dt2.getTime()
            let distance = dt2TS - dt1TS
            ret['hours'] = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            ret['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            ret['seconds'] = Math.floor((distance % (1000 * 60)) / 1000);

            /*
            * Now we deal with the negatives
            */

            /*
            * First if the day difference is negative
            * eg dt2 = 13 oct, dt1 = 25 sept
            */
            if (ret['days'] < 0) {
                /*
                * Use temporary dates to get the number of days remaining in the month
                */
                var dtmp1 = new Date(dt1.getFullYear(), dt1.getMonth() + 1, 1, 0, 0, -1);

                var numDays = dtmp1.getDate();

                ret['months'] -= 1;
                ret['days'] += numDays;
            }

            /*
            * Now if the month difference is negative
            */
            if (ret['months'] < 0) {
                ret['months'] += 12;
                ret['years'] -= 1;
            }

            return ret;
        }
    }
}
</script>

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
            let startDate = new Date(this.$props.timestamp)
            let start = startDate.getTime()
            let nowDate = new Date()
            let now = nowDate.getTime()

            var distance = now - start;

            // Time calculations for days, hours, minutes and seconds
            var years = Math.floor(distance / 31556952000)
            var months = this.getMonthDifference(new Date(this.$props.timestamp), nowDate);
            var weeks = Math.floor((distance % (1000 * 60 * 60 * 24 * 7 * 4)) / (1000 * 60 * 60 * 24 * 7))
            var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
            str.push(`${minutes} minute${minutes > 1 ? 's' : ''}`)
            str.push(`${seconds} second${seconds > 1 ? 's' : ''}`)

            this.$refs['txt'].innerHTML = str.join(', ')
        }, 500)
    },
    methods: {
        getMonthDifference (startDate, endDate) {
            return (endDate.getMonth() - startDate.getMonth() + 12 * (endDate.getFullYear() - startDate.getFullYear()));
        }
    }
}
</script>

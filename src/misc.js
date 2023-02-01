let misc = {
    getClamp: function(min, num, max) {
        return num <= min
            ? min
            : num >= max
                ? max
                : num
    },
    getFormattedDate: function(date) {
        return date.toLocaleDateString()
    }
}

export default misc
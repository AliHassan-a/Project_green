const misc = {
    clamp(min, num, max) {
        return num <= min
            ? min
            : num >= max
                ? max
                : num
    }
}

export default misc
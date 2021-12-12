class CustomError extends Error {
    constructor(name, message) {
        super(message)
        this.name = name
    }
}

export default CustomError
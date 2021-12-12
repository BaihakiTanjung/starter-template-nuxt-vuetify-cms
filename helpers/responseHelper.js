class ResponseHelper {
    constructor (response) {
        this.data = response.data.data
        this.status = response.status
        this.error = response.error
        this.errorMesssage = response.data.message
        this.success = response.data.success
    }

    isSuccess () {
        return this.status === 200 && !this.error && this.success
    }

    isError () {
        return !this.isSuccess()
    }

    getStatus () {
        return this.status
    }

    getData () {
        return this.data
    }

    getError () {
        return this.error
    }

    getErrorMessage () {
        return this.errorMesssage
    }
}

export default ResponseHelper
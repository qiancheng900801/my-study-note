const wxPromise = fn => {
    return (obj = {}) => {
        return new Promise((resolve, reject) => {
            obj.success = (res) => {
                resolve(res)
            }
            obj.fail = (res) => {
                resolve(res)
            }
            fn(obj)
        })
    }
}


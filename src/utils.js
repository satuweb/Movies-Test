export const sortObjByParam = (obj, param, dir) => {
    switch (dir) {
        case 'ASC':
            return obj.sort((a, b) => (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0))
        case 'DESC':
            return obj.sort((a, b) => (a[param] > b[param]) ? -1 : ((b[param] > a[param]) ? 1 : 0))
        default:
            return obj.sort((a, b) => (a[param] > b[param]) ? 1 : ((b[param] > a[param]) ? -1 : 0))
    }
}
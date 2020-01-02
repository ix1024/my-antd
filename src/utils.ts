import moment from 'moment'

export const placeholder = '--'

// 获取天
export const getDateString = (time: object) => (time ? moment(time).format('YYYY-MM-DD') : placeholder)
// 获取小时
export const getDateTimeString = (time: object) => (time ? moment(time).format('YYYY-MM-DD HH:mm:ss') : placeholder)
// 获取天数
export const getDayString = (time: object) => (time ? moment(time).format('MM-DD') : placeholder)
// 获取月分
export const getMonthString = (time: object) => (time ? moment(time).format('YYMM') : placeholder)
export const getMonthValue = (time: object) => (time ? parseInt(moment(time).format('YYMM'), 10) : null)

// 比较时间
export const compareMoment = (momentV1: string, momentV2: string, type = '<') => {
    if (!momentV1 || !momentV2) {
        return false
    }
    if (type === '<=') {
        return momentV1.valueOf() <= momentV2.valueOf()
    }
    return momentV1.valueOf() < momentV2.valueOf()
}

// 统一格式
export const dataFormat = (data: string) => {
    if (data === undefined || data === null) {
        return placeholder
    }
    if (typeof data !== 'string') {
        return data
    }
    if (!data.trim()) {
        return placeholder
    }
    return data
}
// 创建随机ID
export const getRandomString = () => {
    return `${(Math.random() * 10000000).toString(16).substr(0, 4)}-${new Date().getTime()}-${Math.random()
        .toString()
        .substr(2, 5)}`
}
// 转小驼峰
export const toSmallHump = (str: string) => {
    let list = str.split('_')
    if (str.indexOf('_') === -1) {
        return str
    }

    list = list.map((item, index) => {
        if (!index) {
            return item
        }
        return item.charAt(0).toUpperCase() + item.slice(1)
    })
    return list.join('')
}

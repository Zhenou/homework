const getters = {
  token: state => state.user.token,
  userId: state => state.user.userId,
  times () { // 请求用的时间(月)第一行三个模块
    const Time = new Date()
    const year = Time.getFullYear()
    const month = Time.getMonth() + 1
    const day = Time.getDate()
    const data = {
      start: year + '-' + month + '-' + '01' + ' 00:00:00',
      end: year + '-' + month + '-' + (day > 10 ? day : '0' + day) + ' 23:59:59'
    }
    // console.log(data ,'times');
    return data
  },
  time () { // 渲染用的时间(月)第一行三个模块和图表 月 请求
    const Time = new Date()
    const year = Time.getFullYear()
    const month = Time.getMonth() + 1
    const day = Time.getDate()
    // console.log(year, month, day)
    // console.log(year + '-' + month + '-' + (day > 10 ? day : '0' + day))
    // console.log(year + '-' + month + '-' + '01')
    const data = {
      start: year + '-' + month + '-' + '01',
      end: year + '-' + month + '-' + (day > 10 ? day : '0' + day)
    }
    // console.log(data ,'time');
    return data
  },
  dayTime () { // 请求用的时间(周)图表 周 请求日期
    const Time = new Date()
    const year = Time.getFullYear()
    const month = Time.getMonth() + 1
    const day = Time.getDate()
    const week = Time.getDay()
    const startTime = day - (week === 0 ? 7 : week) + 1
    // console.log(week)
    const data = {
      start: year + '-' + month + '-' + (startTime <= 9 ? '0' + startTime : startTime),
      end: year + '-' + month + '-' + (day > 10 ? day : '0' + day)
    }
    // console.log(data ,'dayTime');
    return data
  },
  yearTime () { // 请求用的时间(月)图表 年 请求日期
    const Time = new Date()
    const year = Time.getFullYear()
    const month = Time.getMonth() + 1 // 按年 月 结束的时间
    const day = Time.getDate() // 按年 日 结束的时间
    // console.log(month)
    const data = {
      start: year + '-' + '01' + '-' + 31,
      end: year + '-' + month + '-' + (day > 10 ? day : '0' + day)
    }
    // console.log(data ,'yearTime');
    return data
  }
}

export default getters

import request from '@/utils/request'

export const getMapCity = data => request.get('/area/map', {
  params: {
    id: data
  }
})

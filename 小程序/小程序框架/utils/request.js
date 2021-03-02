// const baseUrl = 'http://localhost:7001';   

const request = (url, data, method, header) => {
  wx.showLoading({
    title: '加载中...'
  });
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data,
      header,
      method,
      success(response) {
        wx.hideLoading();
        switch (response.statusCode) {
          case 401:
            console.log('您的身份认证已过期');
            break;
          case 403:
            console.log('您没有该操作权限');
            break;
          case 500:
            console.log('服务器错误');
            break;
          default:
            resolve(response);
        }
      },
      fail(error) {
        wx.showToast({
          title: '网络故障...',
          icon: 'none',
          duration: 1000
        });
        reject(error);
      },
      complete() {
        wx.hideLoading();
      }
    });
  });
};

export const get = (url, data) => request(
  url, data, 'GET', {
    'content-type': 'application/json',
    'Authorization': `Bearer ${wx.getStorageSync('token')}`
  }
);

export const post = (url, data) => request(
  url, data, 'post', {
    'content-type': 'application/json',
    'Authorization': `Bearer ${wx.getStorageSync('token')}`
  }
);

export const del = (url, data) => request(
  url, data, 'delete', {
    'content-type': 'application/json',
    'Authorization': `Bearer ${wx.getStorageSync('token')}`
  }
);
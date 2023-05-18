const request = require('request-promise');

const urls = [
    'http://localhost:5555/api/200',
    'http://localhost:5555/api/301',
    'http://localhost:5555/api/302',
    'http://localhost:5555/timeout'
  ];
  
  const requests = urls.map(url => {
    const options = {
      method: 'GET',
      uri: url,
      json: true,
      timeout: 1000
    };
    
    return request(options);
  });
  
  Promise.allSettled(requests)
    .then(results => {
      results.forEach((result, index) => {
        // console.log(`請求 ${result.status} ，錯誤訊息：`, result.reason);

        console.log(`請求 ${result.status}`);

        // if (result.status === 'fulfilled') {
        //   console.log(`請求 ${index + 1} 成功，回應內容：`, result.value);
        // } else {
        //   console.log(`請求 ${index + 1} 失敗，錯誤訊息：`, result.reason);
        // }
      });
    })
    .catch(error => {
      console.error('發生錯誤：', error);
    });
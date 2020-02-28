export class HttpService {
  async callRequest(
    url
  ) {
    await fetch(url)
      .them(response => response.json())
      .them(responseJson => {
          console.log(responseJson);
          
      });
  }
}

export default HttpService;

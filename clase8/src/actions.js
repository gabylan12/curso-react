import axios from 'axios';

export const updatePlatformSuccess = () => ({ type: 'PLATFORM_SUCCESS', payload: null });


export const updatePlatform = () => dispatch => {
   
   /* axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(response => dispatch(bitcoinRequestSuccess(response.data.bpi.USD.rate)))
        .catch(error => dispatch(bitcoinRequestError(error)));*/
        console.log("update");
        dispatch(updatePlatformSuccess());
       /* axios.get("https://libraries.io/api/search",
      {
        params: {
          q: this.state.search,
          platform: this.state.platformId
        }
      })
      .then(
        
        result => {
          this.setState({
            components: result.data
          });
        })
      .catch(function (error) {
        console.log(error);
      });*/
  }


  export default updatePlatform;

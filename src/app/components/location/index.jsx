'use client'
import React, {Component} from 'react';

class Location extends Component {
  render() {
    return (
      <div className="location_wrapper">
        <iframe
          src="https://yandex.ru/map-widget/v1/?from=mapframe&ll=44.473942%2C48.699391&masstransit%5BstopId%5D=stop__9915910&mode=masstransit&source=mapframe&tab=overview&um=constructor%3A4956f4928bc7500c52c5152c368e9402060aa938542cbe75ffc27d76fd96a1a8&utm_source=mapframe&z=18.75"
          // src="https://yandex.ru/map-widget/v1/?ll=44.471900%2C48.700837&mode=whatshere&whatshere%5Bpoint%5D=44.471699%2C48.700890&whatshere%5Bzoom%5D=17&z=18.55"
          // src="https://yandex.ru/map-widget/v1/?ll=44.473074%2C48.700371&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNTk0MjY3NDMwEknQoNC-0YHRgdC40Y8sINCS0L7Qu9Cz0L7Qs9GA0LDQtCwg0JvQtdC90LrQvtGA0LDQvdGB0LrQsNGPINGD0LvQuNGG0LAsIDYxIgoNUeMxQhUezUJC&z=17.35"
          width="100%"
          height="500px"
          Border="1"
          allowFullScreen="true"
          className="position:relative;"></iframe>


        {/*<iframe src="https://yandex.ru/map-widget/v1/?ll=44.507865%2C48.719319&z=15.94"*/}
        {/*        width="100%"*/}
        {/*        height="500px"*/}
        {/*        Border="1"*/}
        {/*        allowFullScreen=""*/}
        {/*        className="position:relative;"*/}
        {/*></iframe>*/}

        {/*<iframe*/}
        {/*  src="https://yandex.ru/map-widget/v1/?display-text=%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D1%8B&ll=44.503279%2C48.719053&mode=search&sll=44.509972%2C48.716609&sspn=0.011356%2C0.005314&text=%D0%A2%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D0%B5%20%D1%86%D0%B5%D0%BD%D1%82%D1%80%D1%8B&z=15.94"*/}
        {/*  width="100%"*/}
        {/*  height="500px"*/}
        {/*  Border="1"*/}
        {/*  allowFullScreen="true"*/}
        {/*></iframe>*/}

        {/*<div className="location_tag">*/}

        {/*  <div>Location</div>*/}

        {/*</div>*/}

      </div>
    );
  }
}

export default Location;

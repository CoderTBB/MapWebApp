import React, { Component } from "react";
import { Map, Marker, NavigationControl, InfoWindow } from "react-bmapgl";
import "./css/MapPage.css";
export class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          lng: 121.54351,
          lat: 31.237932,
          id: 1,
          name: "name1",
          createTime: "time1",
        },
        {
          lng: 121.64352,
          lat: 31.237932,
          id: 2,
          name: "name2",
          createTime: "time2",
        },
        {
          lng: 121.74353,
          lat: 31.237932,
          id: 3,
          name: "name3",
          createTime: "time3",
        },
        {
          lng: 121.64352,
          lat: 31.137932,
          id: 4,
          name: "name4",
          createTime: "time4",
        },
        {
          lng: 121.64352,
          lat: 31.337932,
          id: 5,
          name: "name5",
          createTime: "time5",
        },
        {
          lng: 121.54351,
          lat: 31.147932,
          id: 6,
          name: "name6",
          createTime: "time6",
        },
        {
          lng: 121.64352,
          lat: 31.147932,
          id: 7,
          name: "name7",
          createTime: "time7",
        },
        {
          lng: 121.74353,
          lat: 31.147932,
          id: 8,
          name: "name8",
          createTime: "time8",
        },
        {
          lng: 121.54352,
          lat: 31.147932,
          id: 9,
          name: "name9",
          createTime: "time9",
        },
        {
          lng: 121.64352,
          lat: 31.047932,
          id: 10,
          name: "name10",
          createTime: "time10",
        },
      ],
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <Map
          style={{ height: "100vh" }}
          center={{ lng: 121.54351, lat: 31.237932 }}
          zoom="12"
        >
          {this.state.list.map((item, index) => {
            return (
              <div key={item.id}>
                <Marker position={{ lng: item.lng, lat: item.lat }} />
                <InfoWindow
                  position={{ lng: item.lng, lat: item.lat }}
                  height={150}
                >
                  <p>id:{item.id}</p>
                  <p>名称:{item.name}</p>
                  <p>创建时间:{item.createTime}</p>
                </InfoWindow>
              </div>
            );
          })}

          <NavigationControl />
        </Map>
      </div>
    );
  }
}

export default MapPage;

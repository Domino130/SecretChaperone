import * as React from "react";
import { Text, View, ScrollView, Button } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Calendar } from "react-native-calendars";
import Header from "../components/Header";

export default class EventCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      carouselItems: [
        {
          title: "Event 1",
          Location: "Location: ",
          Time: "Time: ",
          Contacts: "Contacts: ",
        },
      ],
    };
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          backgroundColor: "floralwhite",
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25,
          marginTop: 20,
        }}
      >
        <Text style={{ fontSize: 30 }}>{item.title}</Text>
        <Text>{item.Location}</Text>
        <Text>{item.Time}</Text>
        <Text>{item.Contacts}</Text>
      </View>
    );
  }

  mainCalendar() {
    return (
      <View style={{ flex: 1 }}>
        <Calendar
          // Initially visible month. Default = Date()
          current={"2022-02-01"}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={"2022-02-10"}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2022-02-28'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            console.log("selected day", day);
          }}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={"MMMM yyyy"}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {
            console.log("month changed", month);
          }}
          // Hide month navigation arrows. Default = false
          hideArrows={false}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // If hideArrows=false and hideExtraDays=false do not swich month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={1}
        />
      </View>
    );
  }

  render() {
    return (
      <>
        <ScrollView>
          <Text
            style={{
              textAlign: "center",
              fontSize: 21,
              fontWeight: "bold",
              paddingVertical: 12,
              textAlign: "center",
              color: "#E6AF38",
            }}
          >
            Welcome Back "Name of User"!
          </Text>
          <Header>Events of the Day</Header>
          <View
            style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
          >
            <Carousel
              layout={"default"}
              ref={(ref) => (this.carousel = ref)}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeIndex: index })}
            />
          </View>
        </ScrollView>
      </>
    );
  }
}

//<this.mainCalendar />
//<Header> Event Calendar </Header>

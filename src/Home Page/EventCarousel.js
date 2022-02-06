import * as React from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Button, Platform} from 'react-native';


export default class EventCarousel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          activeIndex:0,
          carouselItems: [
          {
              title:"Event 1",
              Location: "Location: ",
              Time: "Time: ",
              Contacts: "Contacts: ",
          },
          {
              title:"Event 2",
              Location: "Location: ",
              Time: "Time: ",
              Contacts: "Contacts: ",
          },
          {
              title:"Event 3",
              Location: "Location: ",
              Time: "Time: ",
              Contacts: "Contacts: ",
          },
        ]
      }
    }

    _renderItem({item,index}){
        return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25,
              marginTop: 20
              }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.Location}</Text>
            <Text>{item.Time}</Text>
            <Text>{item.Contacts}</Text>
          </View>

        )
    }

    mainCalendar(){
       //calendar
      const [date, setDate] = useState(new Date(1598051730000));
      const [mode, setMode] = useState('date');
      const [show, setShow] = useState(false);

      const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };

      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };

      const showDatepicker = () => {
        showMode('date');
      };

      const showTimepicker = () => {
        showMode('time');
      };

      return (
         <View>
      <View>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View> 
      )

    }

    render() {
        return (
          <>
          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
            <Carousel
              layout={"default"}
              ref={ref => this.carousel = ref}
              data={this.state.carouselItems}
              sliderWidth={300}
              itemWidth={300}
              renderItem={this._renderItem}
              onSnapToItem = { index => this.setState({activeIndex:index}) } />
          </View>

          <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
          <this.mainCalendar/>

          </View>
          </>
        );
    }
}

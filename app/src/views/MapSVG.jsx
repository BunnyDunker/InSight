/* Every time you want to place SVG element in your app - you should wrap it using <Svg> component
 Without this tag other element's won’t be visible, because vectors need points.
 */
import React, { useState } from 'react';
import { useNavigation } from 'react-navigation-hooks';
import { View } from 'react-native';
import Svg, { Circle, Text, G } from 'react-native-svg';
import MapModal from './MapModal';
import Colors from '../constants/Colors';

function MapSvg(props) {
  const { courses, coursesCompleted } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [course, setCourse] = useState(null);
  const { navigate } = useNavigation();

  const toggleModal = (clickedCourse) => {
    setModalVisible(!isModalVisible);
    if (clickedCourse) {
      setCourse(clickedCourse);
    }
  };

  return (
    <View>
      <Svg height="100%" width="100%" viewBox="10 10 100 100">
        {/* The viewBox attribute defines the position and dimensions, in user space, of an SVG */}
        <Circle
          cx="38"
          cy="106"
          r="7"
          fill={coursesCompleted.includes(courses[0].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[0].topic}
          key={courses[0].topic}
          //  open model
          onPress={() => { toggleModal(courses[0]); }}
          // onPress={() => { navigate('Course', { id: courses[0].id, name: courses[0].topic }); }}
        />
        <Circle
          cx="26"
          cy="92"
          r="5"
          fill={coursesCompleted.includes(courses[1].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[1].topic}
          key={courses[1].topic}
          onPress={() => { toggleModal(courses[1]); }}
        />
        <Circle
          cx="68"
          cy="104"
          r="5"
          fill={coursesCompleted.includes(courses[2].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[2].topic}
          key={courses[2].topic}
          onPress={() => { toggleModal(courses[2]); }}
        />
        <Circle
          cx="90"
          cy="90"
          r="6"
          fill={coursesCompleted.includes(courses[3].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[3].topic}
          key={23}
          onPress={() => { toggleModal(courses[3]); }}
        />
        <Circle
          cx="55"
          cy="79"
          r="6"
          fill={coursesCompleted.includes(courses[3].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[3].topic}
          key={courses[3].topic}
          onPress={() => { toggleModal(courses[3]); }}
        />
        <Circle
          cx="40"
          cy="67"
          r="6"
          fill={coursesCompleted.includes(courses[4].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[4].topic}
          key={courses[4].topic}
          onPress={() => { toggleModal(courses[4]); }}
        />
        <Circle
          cx="63"
          cy="39"
          r="5"
          fill={coursesCompleted.includes(courses[5].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[5].topic}
          key={courses[5].topic}
          onPress={() => { toggleModal(courses[5]); }}
        />
        <Circle
          cx="70"
          cy="20"
          r="6"
          fill={coursesCompleted.includes(courses[6].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[6].topic}
          key={courses[6].topic}
          onPress={() => { toggleModal(courses[6]); }}
        />
        <Circle
          cx="59"
          cy="3"
          r="6"
          fill={coursesCompleted.includes(courses[7].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[7].topic}
          key={courses[7].topic}
          onPress={() => { toggleModal(courses[7]); }}
        />
        <Circle
          cx="95"
          cy="3"
          r="5"
          fill={coursesCompleted.includes(courses[7].id) ? 'gray' : 'none'}
          fillOpacity={0.8}
          title={courses[7].topic}
          key={10}
          onPress={() => { toggleModal(courses[7]); }}
        />
        {isModalVisible ? (
          <MapModal course={course} toggleModal={toggleModal} status={coursesCompleted.includes(course.id)} />) : null}
      </Svg>
    </View>
  );
}

export default MapSvg;

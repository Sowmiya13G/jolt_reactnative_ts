import React, {useEffect, useRef, useState} from 'react';
import {Animated, FlatList, Text, View} from 'react-native';

// packages
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

// components
import Spacer from '../../spacer';

// constants
import {baseStyle, colors, sizes} from '../../../constant/theme';

// style
import styles from './styles';

// SVG Imports

interface route {
  place: string;
  time: string;
  total: number;
  in?: number;
  out?: number;
}
interface TripCardType {
  data: {
    routes: route[];
    kiloMeter: number;
    time: string;
    currentStop?: string;
  };
  viewMap?: () => void;
}

const StopDetailsCard: React.FC<TripCardType> = ({data, viewMap}) => {
  const currentStopIndex = data?.routes.findIndex(
    route => route.place === data?.currentStop,
  );

  const animatedValues = useRef(
    data?.routes.map(
      (_, index) => new Animated.Value(index <= currentStopIndex ? 1 : 0),
    ),
  ).current;

  useEffect(() => {
    animatedValues.forEach((animatedValue, index) => {
      if (index <= currentStopIndex) {
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 500,
          delay: index * 500,
          useNativeDriver: true,
        }).start();
      } else {
        animatedValue.setValue(0);
      }
    });
  }, [currentStopIndex, animatedValues]);

  const renderTimeAndPlace = (route: route) => {
    return (
      <View key={route.place} style={styles.placeDetails}>
        <Text
          style={[
            baseStyle.txtStyleOutInterSemiBold(sizes.size3, colors.grey_32),
          ]}>
          {route.time}
        </Text>
        <Spacer width={wp('5%')} />
        <View style={styles.place}>
          <Text
            style={[
              baseStyle.txtStyleOutInterMedium(sizes.size02, colors.grey_32),
            ]}>
            {route.place}
          </Text>
          <Spacer height={hp('0.5%')} />
          <View style={styles.delay}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size0,
                  colors.white_FF,
                ),
              ]}>
              20 min delay
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderItem = ({item, index}: {item: route; index: number}) => {
    const isLastStop = index === data?.routes?.length - 1;
    const isCurrentStop = data?.currentStop === item.place;
    const currentStopIndex = data?.routes.findIndex(
      route => route.place === data?.currentStop,
    );

    const isPassedOrCurrentStop = index < currentStopIndex;
    return (
      <View style={styles.routeDataContainer}>
        <View style={styles.connectContainer}>
          <View
            style={[
              isLastStop ? styles.lastStop : styles.dot,
              {
                backgroundColor:
                  isPassedOrCurrentStop || isCurrentStop || isLastStop
                    ? colors.orange_05
                    : colors.grey_D9,
              },
            ]}
          />
          {!isLastStop && (
            <>
              {Array.from(
                {length: wp('1.5%')},
                (_, lineIndex) => lineIndex + 1,
              ).map((_, lineKey) => (
                <View
                  key={lineKey}
                  style={[
                    styles.horizontalLineView1,
                    {
                      borderColor: isPassedOrCurrentStop
                        ? colors.orange_05
                        : colors.grey_D9,
                    },
                  ]}
                />
              ))}
            </>
          )}
        </View>
        <Spacer width={wp('10%')} />
        {renderTimeAndPlace(item)}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Spacer height={hp('1%')} />
      <View style={styles.row}>
        <View>
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.green_34),
            ]}>
            Pickup Points
          </Text>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterSemiBold(sizes.size2, colors.orange_05),
            ]}>
            Drop Points
          </Text>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View style={[styles.dotView]} />
          {Array.from(
            {length: wp('0.5%')},
            (_, lineIndex) => lineIndex + 1,
          ).map((_, lineKey) => (
            <View key={lineKey} style={[styles.horizontalLineView]} />
          ))}
          <View style={styles.duration}>
            <Text
              style={[
                baseStyle.txtStyleOutInterSemiBold(
                  sizes.size0,
                  colors.white_FF,
                ),
              ]}>
              20 min delay
            </Text>
          </View>
          {Array.from(
            {length: wp('0.5%')},
            (_, lineIndex) => lineIndex + 1,
          ).map((_, lineKey) => (
            <View key={lineKey} style={[styles.horizontalLineView]} />
          ))}
          <View style={[styles.dotView]} />
        </View>
        <View style={{width:"30%"}}>
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
              {textAlign: 'right'},
            ]}>
            {data?.routes[0]?.place}
          </Text>
          <Spacer height={hp('2%')} />
          <Text
            style={[
              baseStyle.txtStyleOutInterRegular(sizes.size02, colors.grey_32),
              {textAlign: 'right'},
            ]}>
            {data?.routes[data?.routes?.length - 1]?.place}
          </Text>
        </View>
      </View>
      <Spacer height={hp('1%')} />
      <View style={styles.line} />
      <Spacer height={hp('2%')} />
      <FlatList
        data={data?.routes}
        keyExtractor={item => item.place}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
      <Spacer height={hp('2%')} />
    </View>
  );
};

export default StopDetailsCard;

import * as React from 'react';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../Theme/index';
import Div from '../Div';
import { Image } from '../Image';
import Text from '../Text';
import { CardProps } from './types';

const Card = ({
  style,
  title,
  subTitle,
  paragraph,
  activity,
  category,
  w,
  h,
  categoryBgColor,
  ...rest
}: CardProps) => {
  const __height = h ? h : 250;
  const __width = w ? w : 350;
  const __category = category || 'category';
  const __title = title || 'The Garden City';
  const __subTitle = subTitle || 'The Silicon Valley of BD';
  const __paragraph =
    paragraph ||
    'Bengaluru (also called Bangalore) is the center of BD high-tech industry. The city is also known for its parks and nightlife Bengaluru (also called Bangalore) is the center of BD high-tech industry. The city is also known for its parks and nightlife';
  const __activity = activity || '6 mins ago';
  const __categoryBgColor = categoryBgColor || COLORS.blue;

  return (
    <Div style={[style, styles.container]} {...rest}>
      <Image
        h={__height}
        w={__width}
        style={styles.cardImg}
        uri="https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
      />
      <Div style={[styles.category, { backgroundColor: __categoryBgColor }]}>
        <Text style={styles.categoryTxt}>{__category}</Text>
      </Div>

      <Div style={styles.cardTxtContainer}>
        <Text style={styles.title}>{__title}</Text>
        <Text style={styles.subTitle}>{__subTitle}</Text>
        <Text style={styles.paragraph}>{__paragraph}</Text>
        <Text style={styles.activity}>{__activity}</Text>
      </Div>
    </Div>
  );
};

const styles = StyleSheet.create({
  container: {},
  category: {
    flex: 1,
    top: SIZES.DimensionHeight / 6.6,
    position: 'absolute',
    width: SIZES.DimensionWidth / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTxt: {
    textTransform: 'uppercase',
    color: COLORS.white,
  },
  cardImg: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    height: SIZES.DimensionHeight / 5,
    width: SIZES.DimensionWidth,
  },
  cardTxtContainer: {
    margin: 15,
  },
  title: { fontSize: 28 },
  subTitle: { color: COLORS.blue },
  paragraph: {},
  activity: {},
});

export default Card;

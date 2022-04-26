import React from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/header/Header';
import styles from './styles';
import CarouselCustom from '../../components/carousel';
import * as TextStyle from '../../common/text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {formatVND} from '../../utils/currency';
import {handleText} from '../../utils/text';

function ProductDetailScreen(props) {
  const {product} = props.route.params;
  return (
    <View style={styles.main}>
      <Header title="Details" />
      <View style={styles.container}>
        <View style={styles.scrollView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <CarouselCustom data={product?.images} />
            <View style={styles.content}>
              <Text style={[TextStyle.bold, styles.productName]}>
                {product.name}
              </Text>
              <Text style={[TextStyle.bold]}>Information: </Text>
              {handleText(product.information)}
            </View>
          </View>
        </ScrollView>
        </View>
       
        <View style={styles.order}>
          <Text style={[TextStyle.medium, [styles.price]]}>
            {formatVND(product.price, 'VND')}
          </Text>
          {/* <View style={styles.quantity}>
            <TouchableOpacity>
              <Icon name="plus" style={styles.icon} size={24} />
            </TouchableOpacity>
            <Text>4</Text>
            <TouchableOpacity>
              <Icon name="minus" style={styles.icon} size={24} />
            </TouchableOpacity>
          </View> */}
          <TouchableOpacity style={styles.cartContainer}>
            <Icon size={24} name="cart-plus" color="#e3edf7" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ProductDetailScreen;

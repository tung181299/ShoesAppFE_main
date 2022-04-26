import React, {useState} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {request_edit_product_in_cart} from '../../redux/actions/index';

export default function CartItem({item, navigate}) {
  const [quantity, setQuantity] = useState(item.quantity);
  const dispatch = useDispatch();

  const moveToDetail = (item, navigate) => {
    console.log('ITEM: ', item._id);
    // navigate('Product Detail', {product: item});
  };

  const editQuantity = (item, act) => {
    if(act === "plus") {
      setQuantity(quantity + 1)
      dispatch(request_edit_product_in_cart({productId: item._id, userId: "624e5889373f07aa1385232d", quantity: quantity + 1}));
    } else {
      if(quantity === 1) {
        setQuantity(1)
      } else {
        setQuantity(quantity - 1)
        dispatch(request_edit_product_in_cart({productId: item._id, userId: "624e5889373f07aa1385232d", quantity: quantity - 1}));
      }
    }
  };

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => moveToDetail(item, navigate)}>
      <View style={styles.dFlexBetween}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.productInfo}>
          <Text style={styles.title} numberOfLines={2}>
            {item.productName}
          </Text>
          <Text style={styles.brand}>{item.productBrand}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.iconCart}>
            <Icon name="delete" size={18} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dFlexBetween}>
        <Text style={styles.textBold}>Price: {item.price} VND</Text>
        <View style={styles.quantityView}>
          <TouchableOpacity
            style={styles.btnAct}
            onPress={() => editQuantity(item, "minus")}>
            <Text style={{fontSize: 26, marginTop: -5}}> - </Text>
          </TouchableOpacity>
          <Text style={{fontSize: 18, marginTop: 2}}> {quantity} </Text>
          <TouchableOpacity style={styles.btnAct}
            onPress={() => editQuantity(item, "plus")}>
            <Text style={{fontSize: 26, marginTop: -3}}> + </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

// export default CartItem;

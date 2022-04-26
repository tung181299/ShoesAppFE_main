import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import CartItem from '../../components/CartItem/index';
import {useDispatch, useSelector} from 'react-redux';
import {request_get_products_in_cart} from '../../redux/actions/index';

function CartScreen({navigation: {navigate}}) {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const cartReducers = useSelector(state => state.cartReducers);

  useEffect(() => {
    dispatch(request_get_products_in_cart());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(request_get_products_in_cart());
  }, []);

  const renderItem = ({item}) => <CartItem item={item} navigate={navigate} />;

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.dFlexStart}>
          <Icon name="shoppingcart" size={24} />
          <Text style={styles.txtCart}>My cart</Text>
        </View>
      </View>
      <View style={styles.horizontalLine} />
      {cartReducers.loading ? (
        <ActivityIndicator
          size="large"
          color="#6396c9"
          style={styles.loading}
        />
      ) : (
        <FlatList
          contentContainerStyle={styles.scrollView}
          refreshControl={
            <RefreshControl
              // refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['green', 'violet', 'blue']}
            />
          }
          data={cartReducers.data}
          renderItem={renderItem}
          keyExtractor={item => item._id}
          style={styles.listItems}
        />
      )}
    </View>
  );
}

export default CartScreen;

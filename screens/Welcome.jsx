import { StyleSheet, View, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

const Welcome = () => {
    return (
      <PagerView style={styles.pagerView} initialPage={0} >
        <View key="1">
          <Text>First Pageee</Text>
        </View>
        <View key="2">
          <Text>Second page</Text>
        </View>
      </PagerView>
    );
  };
  
  const styles = StyleSheet.create({
    pagerView: {
      flex: 1,
      backgroundColor: "green"
    },
  });

  export default Welcome;
import * as React from 'react';
import { Button, Card, Text} from 'react-native-paper';
import { StyleSheet} from 'react-native';


const MyCard = () => (
<Card style={styles.container}>
    <Card.Content>
      <Text variant="titleLarge">My photo</Text>
      <Text variant="bodyMedium">My simple app photo</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      padding: 20,
      height: '100%',
      backgroundColor: '#fff',
    },
});

export default MyCard;
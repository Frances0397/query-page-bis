import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { useState, useEffect } from 'react';

// Drawer component TEMP
import { Drawer } from 'react-native-paper';

//header component TEMP
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//query page TEMP
import { Card, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-web';
import axios from 'axios';

import TaskList from './fragments/taskList';

export default function App() {
  const [fatherArr, setFatherArr] = useState([]);
  const [childArr, setChildArr] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


    // setFatherArr(father);

    // setChildArr(child);

    fetchFather().then((result) => {
      setFatherArr(result);
    });

    fetchChild().then((result) => {
      setChildArr(result);
      setLoading(false);
    })

  }, []);

  useEffect(() => {
    console.log("TASK -----------");
    console.log(fatherArr);
  }, [fatherArr])

  const fetchFather = async () => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const father = [
    //       { item: 1, title: "test 1" },
    //       { item: 2, title: "test 2" },
    //       { item: 3, title: "test 3" },
    //       { item: 4, title: "test 4" },
    //       { item: 5, title: "test 5" }
    //     ];
    //     resolve(father)
    //   }, 1000);
    // })

    //get current month
    let d = new Date();
    let n = d.getMonth();
    console.log(n);

    // let res = await axios.get(`https://gtr-express.onrender.com/task/all/${n}`);
    let res = await axios.get(`http://localhost:3000/task/closed`);
    return res.data;
  }

  const fetchChild = async () => {
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     const child = [
    //       { father: 1, item: 1, title: "test 1" },
    //       { father: 1, item: 2, title: "test 2" },
    //       { father: 2, item: 1, title: "test 3" },
    //       { father: 2, item: 2, title: "test 4" },
    //       { father: 2, item: 3, title: "test 5" },
    //       { father: 3, item: 1, title: "test 6" },
    //       { father: 4, item: 1, title: "test 7" },
    //       { father: 4, item: 2, title: "test 8" },
    //       { father: 4, item: 3, title: "test 9" },
    //       { father: 4, item: 4, title: "test 10" }
    //     ];
    //     resolve(child);
    //   }, 1000)
    // })
  }

  return (
    <SafeAreaProvider style={styles.safeareaproviderContainer}>
      <View style={styles.outerContainer}>
        <View style={styles.drawer}>
          <Drawer.Item
            style={{ backgroundColor: '#b5b5b5' }}
            icon="star"
            label="First Item"
          />
          <Drawer.Item
            style={{ backgroundColor: '#b5b5b5' }}
            icon="heart"
            label="Second Item"
          />
        </View>
        <View style={styles.container}>
          <Appbar.Header style={styles.header}>
            <Appbar.Content title="Title" titleStyle={{ color: '#fff' }} />
          </Appbar.Header>
          <Card>
            <Card.Title title="Seleziona visualizzazione" />
            <Card.Content>
              <Button>Task chiusi</Button>
            </Card.Content>
            <Card.Actions>
              <Button>Visualizza</Button>
              <Button>Cancella tutto</Button>
            </Card.Actions>
          </Card>
          <ScrollView>
            {loading ? <ActivityIndicator style={styles.loading} color='#b78bc7' size="large" /> : <TaskList items={fatherArr} subitems={childArr} />}
          </ScrollView>
        </View>
      </View>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  drawer: {
    width: 230,
    backgroundColor: '#b5b5b5',
    // position: 'fixed',
    //height: '100%',
    minHeight: '100%',
  },
  outerContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  safeareaproviderContainer: {
    flex: 1
  },
  header: {
    backgroundColor: '#E7E0EC',
  },
  loading: {
    marginVertical: 25,
  }
});

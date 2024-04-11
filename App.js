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

//Filter card TEMP
import { SegmentedButtons } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';


import TaskList from './fragments/taskList';

export default function App() {
  const [fatherArr, setFatherArr] = useState([]);
  const [childArr, setChildArr] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState("closed");
  const [resources, setResources] = useState([]);
  const [resource, setResource] = useState({});

  useEffect(() => {
    fetchResources().then((result) => {
      setResources(result);
    }, [])
  });

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

  }, [filterValue]);

  useEffect(() => {
    console.log("TASK -----------");
    console.log(fatherArr);
  }, [fatherArr])

  const fetchFather = async () => {
    let res = await axios.get(`https://gtr-express.onrender.com/task/${filterValue}`);
    return res.data;
  }

  const fetchChild = async () => {
    let res = await axios.get(`https://gtr-express.onrender.com/subtask_view/${filterValue}`);
    return res.data;
  }

  const fetchResources = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const resources = [
          { fullname: "Nome 1" },
          { fullname: "Nome 2" },
          { fullname: "Nome 3" },
          { fullname: "Nome 4" },
          { fullname: "Nome 5" },
          { fullname: "Nome 6" },
          { fullname: "Nome 7" },
          { fullname: "Nome 8" },
          { fullname: "Nome 9" }
        ];
        resolve(resources);
      }, 1000)
    })
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
              <SegmentedButtons
                value={filterValue}
                onValueChange={setFilterValue}
                buttons={[
                  {
                    value: 'active',
                    label: 'Attivi',
                  },
                  {
                    value: 'closed',
                    label: 'Chiusi',
                  },
                  {
                    value: 'all',
                    label: 'Tutti'
                  },
                ]}
              />
              <View style={{ flexDirection: 'row' }}>
                <Dropdown
                  style={styles.dropdownStyle}
                  containerStyle={{ borderRadius: 10, showVerticalScrollIndicator: false }}
                  inputSearchStyle={{ borderRadius: 5 }}
                  showsVerticalScrollIndicator={false}
                  itemContainerStyle={{ borderRadius: 15 }}
                  data={resources}
                  search
                  labelField="fullname"
                  valueField="fullname"
                  value={resource}
                  onChange={item => setResource(item.fullname)} />
                <Dropdown
                  style={styles.dropdownStyle}
                  containerStyle={{ borderRadius: 10, showVerticalScrollIndicator: false }}
                  inputSearchStyle={{ borderRadius: 5 }}
                  showsVerticalScrollIndicator={false}
                  itemContainerStyle={{ borderRadius: 15 }}
                  data={resources}
                  search
                  labelField="fullname"
                  valueField="fullname"
                  value={resource}
                  onChange={item => setResource(item.fullname)} />
                <Dropdown
                  style={styles.dropdownStyle}
                  containerStyle={{ borderRadius: 10, showVerticalScrollIndicator: false }}
                  inputSearchStyle={{ borderRadius: 5 }}
                  showsVerticalScrollIndicator={false}
                  itemContainerStyle={{ borderRadius: 15 }}
                  data={resources}
                  search
                  labelField="fullname"
                  valueField="fullname"
                  value={resource}
                  onChange={item => setResource(item.fullname)} />
                <Dropdown
                  style={styles.dropdownStyle}
                  containerStyle={{ borderRadius: 10, showVerticalScrollIndicator: false }}
                  inputSearchStyle={{ borderRadius: 5 }}
                  showsVerticalScrollIndicator={false}
                  itemContainerStyle={{ borderRadius: 15 }}
                  data={resources}
                  search
                  labelField="fullname"
                  valueField="fullname"
                  value={resource}
                  onChange={item => setResource(item.fullname)} />
                <Dropdown
                  style={styles.dropdownStyle}
                  containerStyle={{ borderRadius: 10, showVerticalScrollIndicator: false }}
                  inputSearchStyle={{ borderRadius: 5 }}
                  showsVerticalScrollIndicator={false}
                  itemContainerStyle={{ borderRadius: 15 }}
                  data={resources}
                  search
                  labelField="fullname"
                  valueField="fullname"
                  value={resource}
                  onChange={item => setResource(item.fullname)} />
              </View>
              <View style={{ flexDirection: 'row' }}>

              </View>
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
  },
  dropdownStyle: {
    marginLeft: 20,
    marginVertical: 10,
    borderRadius: 15,
    minWidth: 220,
    showVerticalScrollIndicator: false
  }
});

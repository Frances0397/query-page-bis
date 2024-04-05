import { StyleSheet, View, Text } from "react-native";
import { List } from "react-native-paper";
import { useEffect } from "react";

export default function TaskList({ items, subitems }) {

    useEffect(() => {
        console.log("Task List");
        console.log(items);
        console.log(subitems);
    }, []);

    return (
        <View>
            {items.map((item, index) => (
                <List.Accordion key={index} title={item.ID + ' - ' + item.description}>
                    {/* {subitems
                        .filter((subitem) => subitem.father === item.item)
                        .map((subitem, subindex) => (<List.Item key={subindex} title={subitem.title} />))} */}
                </List.Accordion>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
});
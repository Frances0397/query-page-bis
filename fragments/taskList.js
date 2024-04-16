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
                //  <List.Accordion key={index} title={item.ID + ' - ' + item.description}
                <List.Accordion key={index} title={item.description}
                    description={<View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ marginRight: 10 }}>{item.commission}</Text>
                            <Text>{item.customer}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ marginRight: 10 }}>{item.text}</Text>
                            <Text>{item.assignee}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ marginRight: 10 }}>{item.dev_start}</Text>
                            <Text>{item.date_release}</Text>
                        </View>
                    </View>}
                    left={props => <View {...props}>
                        <Text>{item.ID}</Text>
                    </View>}
                    right={props => <View {...props}>
                        <Text >{item.status}</Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text >{item.actual_time ? item.actual_time : 0} / </Text>
                            <Text >{item.estimated_time ? item.estimated_time : 0} / </Text>
                            <Text >{item.billable_time ? item.billable_time : 0}</Text>
                        </View>
                    </View>}>
                    {subitems
                        .filter((subitem) => subitem.ID === item.ID)
                        .map((subitem, subindex) => (<List.Item key={subindex}
                            style={{ marginLeft: 35 }}
                            left={props => <Text {...props} style={{ marginLeft: 15 }}>{subitem.sub_id}</Text>}
                            title={subitem.subtask_description}
                            titleStyle={{ marginLeft: 5 }}
                            description={<View>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ marginRight: 10 }}>{subitem.resource_type}</Text>
                                    <Text style={{ margintRight: 10 }}>{subitem.resource}</Text>
                                </View>
                            </View>}
                            right={props => <View {...props}>
                                <Text style={{ marginRight: 10 }}>SUBCOMMISSION TEMP</Text>
                                <View style={{ flexDirection: 'row', marginTop: 10 }}>
                                    <Text >{subitem.subtask_actual_time ? subitem.subtask_actual_time : 0} / </Text>
                                    <Text >{subitem.subtask_estimated_time ? subitem.subtask_estimated_time : 0} / </Text>
                                    <Text>{subitem.subtask_billable_time ? subitem.subtask_billable_time : 0}</Text>
                                </View>
                            </View>} />))}
                </List.Accordion>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
});
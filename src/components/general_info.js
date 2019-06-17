import React, { Component } from 'react';
import { Container, Text, View, Card, Item, Icon, Input, Button, CardItem, Body, H1, Picker, CheckBox, Form, ListItem, Radio, Right, Left, Content } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet'
export default class General_Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "key1",
            part: "1",
            vendor: "",
            model: "",
            city: "",
            grade: "",
            type: "",
            territory: '',
            common: [
                {
                    name: 'CD 70',
                    boolean: false
                },
                {
                    name: 'CD Dream',
                    boolean: false
                },
                {
                    name: 'Pridor',
                    boolean: false
                }
            ],
        };
    }
    onValueChange(v, value) {
        if (v === "part") {
            this.setState({
                part: value
            });
        }

        if (v === "model") {
            this.setState({
                model: value
            });
        }

        if (v === "vendor") {
            this.setState({
                vendor: value
            });
        }
        if (v === "city") {
            this.setState({
                city: value
            });
        }

        if (v === "type") {
            this.setState({
                type: value
            });
        }
        if (v === "grade") {
            this.setState({
                grade: value
            });
        }
        if (v === "territory") {
            this.setState({
                territory: value
            });
        }
    }

    commonArr(i, p) {
        let y = this.state.common;
        y[i].boolean = !p;
        this.setState({common:  y})
    }

    render() {
        return (
            <Container style={styles.container}>
                <H1 style={{ textAlign: 'center', padding: 10 }}>General Information</H1>
                <Content>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Select Part*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.part}
                                onValueChange={this.onValueChange.bind(this, "part")}
                            >
                                <Picker.Item label="Select Part Name" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Select Model*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.model}
                                onValueChange={this.onValueChange.bind(this, "model")}
                            >
                                <Picker.Item label="Select Model Name" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Select Vendor*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.vendor}
                                onValueChange={this.onValueChange.bind(this, "vendor")}
                            >
                                <Picker.Item label="Select Vendor Name" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Form>
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Supply Base City*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.city}
                                onValueChange={this.onValueChange.bind(this, "city")}
                            >
                                <Picker.Item label="Select Vendor Name" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Event</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Event' />
                            </Item>
                        </Form>
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>AHI Participants</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='AHI Participants' />
                            </Item>
                        </Form>
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Supplier Participants</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Supplier Participants' />
                            </Item>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Select Type*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.type}
                                onValueChange={this.onValueChange.bind(this, "type")}
                            >
                                <Picker.Item label="Select Type" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Select Grade*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.grade}
                                onValueChange={this.onValueChange.bind(this, "grade")}
                            >
                                <Picker.Item label="Select Grade" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Common</Text>
                        {
                            this.state.common && this.state.common.map((v, i) => {
                                return <ListItem>
                                    <CheckBox checked={v.boolean} onPress={() => this.commonArr(i, v.boolean)}/>
                                    <Body>
                                        <Text>{v.name}</Text>
                                    </Body>
                                </ListItem>
                            })
                        }
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Territory*</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.territory}
                                onValueChange={this.onValueChange.bind(this, "territory")}
                            >
                                <Picker.Item label="Select territory" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block onPress={() => this.props.count(1)}>
                            <Text>Monthly Wise Supply & Reject</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        paddin: 20
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    headerIcon: {
        fontSize: '1.2rem'
    },
    image: {
        justifyContent: 'center',
        alignContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 10
    },
    tokenNo: {
        fontSize: 40
    }
});
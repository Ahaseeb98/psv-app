// import { Table, Row, Rows } from 'react-native-table-component';
import React, { Component } from 'react';
import { Container, Text, Card, Item, Icon, Input, View, Button, CardItem, H1, Spinner, Header, Content, Form, Picker } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
// import General_Info from '../components/general_info'
export default class Monthly extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
            tableData: [
                ['1', '2', '3', '4'],
                ['a', 'b', 'c', 'd'],
                ['1', '2', '3', '456\n789'],
                ['a', 'b', 'c', 'd']
            ]
        }
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

    watchCount(v) {
        this.setState({ count: v })
    }

    render() {
        return (
            <Container>
                <View style={{ margin: 5, padding: 5 }}>
                    <Button info small onPress={() => this.props.count(0)}>
                        <Text>Go Back</Text>
                    </Button>
                </View>
                <H1 style={{ paddingTop: 10, textAlign: "center" }}>Monthly Wise Supply & Reject</H1>
                <Content padder>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}></Text>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>Line</Text>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>Other</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>AHL KHI</Text>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>AHL SKP</Text>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>VEN</Text>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <H1 style={{ textAlign: "center" }}>*Supply</H1>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*1M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*2M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*3M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*4M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*5M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*6M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <H1 style={{ textAlign: "center" }}>*Reject</H1>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*1M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*2M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*3M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*4M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*5M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*6M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <H1 style={{ textAlign: "center" }}>*GDP</H1>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*1M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*2M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*3M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*4M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*5M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*6M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <H1 style={{ textAlign: "center" }}>*Warranty</H1>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*1M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*2M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*3M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*4M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*5M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row" }}>
                        <View style={{ flex: 1, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Text style={{ textAlign: "center" }}>*6M</Text>
                        </View>
                        <View style={{ flex: 3, textAlign: "center", borderColor: '#222', borderWidth: 1, padding: 5 }}>
                            <Item regular style={{ backgroundColor: '#f0f0' }}>
                                <Input />
                            </Item>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <H1>Problem Symptoms</H1>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Observation</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Supplier Participants' />
                            </Item>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Frequency</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Supplier Participants' />
                            </Item>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Occurence Area</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.grade}
                                onValueChange={this.onValueChange.bind(this, "grade")}
                            >
                                <Picker.Item label="Select Area" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>

                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>GQI-Rating</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#f0f0f0' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: undefined }}
                                selectedValue={this.state.grade}
                                onValueChange={this.onValueChange.bind(this, "grade")}
                            >
                                <Picker.Item label="Select GQI-Rating" value="" />
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                            </Picker>
                        </Form>
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block>
                            <Text>Add Symptoms</Text>
                        </Button>
                    </View>


                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <H1>Supplier Share</H1>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block>
                            <Text>Add Supplier</Text>
                        </Button>
                    </View>


                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <H1>Analysis Details</H1>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block>
                            <Text>Add Analysis Detail</Text>
                        </Button>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Conclusion</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Supplier Participants' />
                            </Item>
                        </Form>
                    </View>


                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <H1>Counter Measure/Process Verification</H1>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block>
                            <Text>Add Countermeasure</Text>
                        </Button>
                    </View>

                    <View style={{ flex: 1, flexDirection: "row", paddingTop: 20 }}>
                        <H1>Report Conclusion</H1>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Button info block>
                            <Text>Add Analysis Detail</Text>
                        </Button>
                    </View>
                    <View style={{ margin: 5, padding: 5 }}>
                        <Text>Report Conclusion</Text>
                        <Form style={{ margin: 5, padding: 5, backgroundColor: '#fff' }}>
                            <Item regular style={{ backgroundColor: '#f0f0f0' }}>
                                <Input placeholder='Supplier Participants' />
                            </Item>
                        </Form>
                    </View>


                    <View style={{ margin: 5, padding: 5 }}>
                        <Button success block onPress={() => this.props.count(0)}>
                            <Text>Save</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});
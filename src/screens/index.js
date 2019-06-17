import React, { Component } from 'react';
import { Container, Text, Card, Item, Icon, Input, Button, CardItem, H1, Spinner, Header } from 'native-base';
import EStyleSheet from 'react-native-extended-stylesheet';
import General_Info from '../components/general_info'
import Monthly from '../components/monthly'
export default class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.watchCount = this.watchCount.bind(this)
    }

    watchCount(v) {
        alert(v)
        this.setState({ count: v })
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <H1 style={{ color: 'white', paddingTop: 10 }}>PSV APP</H1>
                </Header>

                {
                    this.state.count == 0 && <General_Info count={this.watchCount} />
                }

                {
                    this.state.count == 1 && <Monthly count={this.watchCount} />
                }
            </Container>
        );
    }
}

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',

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
// React
import React, { Component } from 'react';

// Styles
import Modal from 'react-native-modalbox';
import { 
  Text,
  View, 
  Dimensions, 
  StyleSheet, 
  TouchableHighlight, 
} from 'react-native';
import {
  Card,
  Left,
  Form,
  Item,
  Input,
  Label,
  Right,
  Header,
  Button,
  Content,
  Container,
} from 'native-base';

export default class Register extends Component {

  cancelButton = () => {
    this.props.history.push('/')
  }

  doneButton = () => {
    this.props.history.push('/search')
  }  

  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={this.cancelButton}>
              <Text style={styles.headerSmallText}>Cancel</Text>
            </Button>
          </Left>
            <Text style={styles.headerPrimeText}>Register</Text>
          <Right>
            <Button transparent>
              <TouchableHighlight onPress={() => this.refs.modal1.open()} >
                <Text style={styles.headerSmallText}>Done</Text>
              </TouchableHighlight>
            </Button>
          </Right>
        </Header>
        <Content style={styles.content} scrollEnabled={false}>
          <Card>
            <Form>
              <Item floatingLabel>
                <Label>First Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Last Name</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input secureTextEntry={true} />
              </Item>
              <Item floatingLabel>
                <Label>Confirm Password</Label>
                <Input secureTextEntry={true} />
              </Item>
            </Form>
          </Card>
        </Content>
          <Modal ref={'modal1'} position={'center'} style={styles.modal}>
            <View>
              <Text style={styles.text}>By signing up and using Kuku, you are agreeing to its</Text>
              <Text style={styles.text}>Terms and Conditions and Privacy Policy.</Text>
            </View>
              <Button block light style={styles.modalButton} onPress={this.doneButton}>
                <Text style={styles.modalButtonText}>Join Kuku</Text>
              </Button>
          </Modal>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  text:{
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  header:{
    borderBottomWidth: 0,
    backgroundColor: '#000',
  },
  headerPrimeText:{
    marginTop: 10,
    fontSize: 24,
    color: '#fff',
  },
  headerSmallText:{
    color: '#fff',
  },
  modal:{
    height: 150,
    width: 400,
    borderRadius: 10
  },
  modalButton: {
    marginTop: 40,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
  },
  modalButtonText:{
    fontSize: 18,
    color: '#fff',
  },
  content:{
    backgroundColor: '#000',
  },
});

 

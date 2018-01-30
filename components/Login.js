// React
import React, { Component } from 'react';

// Styles
import { 
  Text, 
  Dimensions, 
  StyleSheet, 
  KeyboardAvoidingView, 
} from 'react-native';
import {
  Form,
  Item,
  Left,
  Input,
  Label,
  Right,
  Button,
  Header,
  Footer,
  Content,
  Container,
} from 'native-base';

export default class Login extends Component {

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
            <Text style={styles.headerPrimeText}>Sign In</Text>
          <Right>
            <Button transparent onPress={this.doneButton}>
              <Text style={styles.headerSmallText}>Done</Text>
            </Button>
          </Right>
        </Header>
      <Content scrollEnabled={false}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
              <Input />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
              <Input secureTextEntry={true} />
          </Item>
        </Form>
          <Text style={styles.bodyText}>-or-</Text>
        <Button block style={styles.facebookBtn} onPress={this.facebookLogIn}>
          <Text style={styles.buttonText}>Login With Facebook</Text>
        </Button>
        <Button block style={styles.googleBtn} onPress={this.joinEmailButton}>
          <Text style={styles.buttonText}>Login With Google</Text>
        </Button>
      </Content>
        <KeyboardAvoidingView behavior="padding">
          <Footer style={styles.footer}/>
        </KeyboardAvoidingView>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  facebookBtn: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#3b5998',
  },
  googleBtn: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#dd4b39',
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
  },
  bodyText:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 15
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
  footer:{
    height: 50,
    backgroundColor: '#000',
  },
});


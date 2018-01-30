// React
import React, { Component } from 'react';

// Styles
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  StyleSheet, 
} from 'react-native';
import {
  Icon,
  Right,
  Header,
  Button,
  Footer,
  Content,
  Container,
} from 'native-base';


// Router
import { Link } from 'react-router-native';

// Redux
// import { connect } from 'react-redux';
// import { fetchProducts, resetCart } from '../actions/products';

// Images for Home Screen
const randomImages = [
  require('../images/home/tshirt.jpg'),
  require('../images/home/tshirt2.jpg'),
  require('../images/home/tshirt3.jpg'),
  require('../images/home/tshirt4.jpg'),
];

export default class Home extends Component {

  joinEmailButton = () => {
    this.props.history.push('/register')
  }

  loginButton = () => {
    this.props.history.push('/login')
  }

  guest = () => {
    this.props.history.push('/search')
  } 
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Right>
            <Button iconRight transparent onPress={this.guest}>
              <Text style={styles.guest}>GUEST</Text>
              <Icon style={styles.icon} name='ios-arrow-forward' />
            </Button>
          </Right>
        </Header>
        <Content style={styles.background} scrollEnabled={false}>
          <Image
            style={styles.hero}
            source={randomImages[Math.floor(Math.random()*randomImages.length)]}
          />
          <Image
            style={styles.logo}
            source={require('../images/header-logo.png')}
          />
          <Button block light style={styles.emailBtn} onPress={this.joinEmailButton}>
              <Text style={styles.buttonText}>Join With Email</Text>
          </Button>
          <Button block style={styles.facebookBtn} onPress={this.facebookLogIn}>
              <Text style={styles.buttonText}>Login With Facebook</Text>
          </Button>
          <Button block style={styles.googleBtn} onPress={this.joinEmailButton}>
              <Text style={styles.buttonText}>Login With Google</Text>
          </Button>
          <Button full transparent onPress={this.loginButton}>
            <Text style={styles.signinText}>Have an account? Sign in</Text>
          </Button>
        </Content>
        <Footer style={styles.footer}/>
      </Container>
    )
  }
};

const deviceY = Dimensions.get('window').height;
const deviceX = Dimensions.get('window').width;

const styles = StyleSheet.create({
  hero: {
    height: deviceY/ 3,
    width: deviceX,
  },
  logo: {
    marginTop: 40,
    height: deviceY/ 18,
    width: deviceY/ 4,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  facebookBtn: {
    marginTop: 15,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#3b5998',
  },
  emailBtn: {
    marginTop: 40,
    width: deviceY/ 2.5,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
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
  signinText:{
    textAlign: 'center',
    paddingBottom: 5,
  },
  background:{
    backgroundColor: '#fff',
  },
  guest: {
    fontWeight: 'bold',
    color: '#fff'
  },
  icon:{
    paddingLeft: 2,
    color: '#fff',
  },
  header:{
    borderBottomWidth: 0,
    backgroundColor: '#000',
  },
  footer:{
    height: 50,
    backgroundColor: '#000',
  },
});



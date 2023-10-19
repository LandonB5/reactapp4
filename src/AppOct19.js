import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut, user}) {
  return (
    <View className="App">
      <Card>
      <Heading level={4}>Landon: Hoco Week Yay!</Heading>
      <h3>{user.username}</h3>
        <Image src={'https://i.pinimg.com/originals/3d/a9/54/3da954c2168d50cf4d409f99ffe05710.gif'} className="App-logo" width={400} alt="logo" /><br/>
        <Image src={logo} className="App-logo" width={400} alt="logo" /><br/>
        <img src="https://www.animatedimages.org/data/media/202/animated-dog-image-0718.gif" width="300"/>
       
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
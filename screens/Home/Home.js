import { SafeAreaView, View, Text } from "react-native";

import styles from "./style";
import globalStyles from "../../assets/styles/globalStyles";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { isDisabled } from "react-native/types_generated/Libraries/LogBox/Data/LogBoxData";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyles.backgroundWhite,globalStyles.flex]}>
            <View>
                <Text></Text>
                <Header title={"Krishna M."} type={1}/>
                <Button title={'Donate'} onPress={()=>{console.log('You just Pressed!')}}/>
                <Button title={'Donate'} isDisabled={true}/>
            </View>
        </SafeAreaView>
    );
}

export default Home;
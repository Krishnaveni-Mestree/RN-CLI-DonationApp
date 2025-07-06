import { SafeAreaView, View, Text } from "react-native";
import styles from "./style";
import globalStyles from "../../assets/styles/globalStyles";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyles.backgroundWhite,globalStyles.flex]}>
            <View>
                <Text></Text>
                <Text>Hello world</Text>
            </View>
        </SafeAreaView>
    );
}

export default Home;
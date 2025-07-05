import { SafeAreaView, View, Text } from "react-native";

import styles from "./style";
import globalStyles from "../../assets/styles/globalStyles";

import Header from "../../components/Header/Header";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyles.backgroundWhite,globalStyles.flex]}>
            <View>
                <Text></Text>
                <Header title={"Krishna M."} type={1}/>
                <Header title={"Krishna M."} type={2}/>
                <Header title={"Krishna M."} type={3}/>
            </View>
        </SafeAreaView>
    );
}

export default Home;
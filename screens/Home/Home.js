import { SafeAreaView, View, Text } from "react-native";

import styles from "./style";
import globalStyles from "../../assets/styles/globalStyles";

import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import Tab from "../../components/TabButton/Tab";
import Badge from "../../components/Badge/Badge";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home=()=>{
    return(
        <SafeAreaView style={[globalStyles.backgroundWhite,globalStyles.flex]}>
            <View>
                <Text></Text>
                <Header title={"Krishna M."} type={1}/>
                <Button title={'Donate'} onPress={()=>{console.log('You just Pressed!')}}/>
                <Button title={'Donate'} isDisabled={true}/>
                <Tab title={"Highlight-Lifestyle"} />
                <Tab title={"Highlight"} isInactive={true}/>
                <Badge title={"Environment"}/>
                <FontAwesomeIcon icon={faSearch}/>
            </View>
        </SafeAreaView>
    );
}

export default Home;
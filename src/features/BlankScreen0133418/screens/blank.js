import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {
    TextInput_9:
      "Sample text input value overflow=visible. Sample text input value overflow=visible. Sample text input value overflow=visible. Sample text input value overflow=visible",
    TextInput_11:
      "Sample text input value overflow=hidden. Sample text input value overflow=hidden. Sample text input value overflow=hidden. Sample text input value overflow=hidden. ",
    TextInput_13:
      "Sample text input value overflow=scroll. Sample text input value overflow=scroll. Sample text input value overflow=scroll. Sample text input value overflow=scroll."
  }

  render = () => (
    <View style={styles.View_1}>
      <Text style={styles.Text_3}>
        Sample text content overflow=visible. Sample text content
        overflow=visible. Sample text content overflow=visible. Sample text
        content overflow=visible.
      </Text>
      <Text style={styles.Text_5}>
        Sample text content overflow=hidden. Sample text content
        overflow=hidden. Sample text content overflow=hidden. Sample text
        content overflow=hidden.
      </Text>
      <Text style={styles.Text_7}>
        Sample text content overflow=scroll. Sample text content
        overflow=scroll. Sample text content overflow=scroll. Sample text
        content overflow=scroll.
      </Text>
      <TextInput
        placeholder="Sample text input placeholder overflow=visible"
        editable={true}
        multiline={true}
        style={styles.TextInput_9}
        value={this.state.TextInput_9}
        onChangeText={nextValue => this.setState({ TextInput_9: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        style={styles.TextInput_11}
        value={this.state.TextInput_11}
        onChangeText={nextValue => this.setState({ TextInput_11: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        editable={true}
        multiline={true}
        style={styles.TextInput_13}
        value={this.state.TextInput_13}
        onChangeText={nextValue => this.setState({ TextInput_13: nextValue })}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))

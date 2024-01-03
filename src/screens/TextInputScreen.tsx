import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import BaseView from '../components/BaseView';
import {ThemeContext} from '../context/theme/ThemeContext';

const TextInputScreen = () => {
  const {onChange, form: formData} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {colors} = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <BaseView>
            <HeaderTitle title="TextInputs" />
            <View style={styles.inputContainer}>
              <Text
                style={{
                  color: colors.text,
                }}>
                Name
              </Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholderTextColor={colors.border}
                placeholder="Enter your name"
                onChangeText={value => onChange(value, 'name')}
                value={formData.name}
                autoCapitalize="words"
                autoComplete="name"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={{
                  color: colors.text,
                }}>
                Email
              </Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholderTextColor={colors.border}
                onChangeText={value => onChange(value, 'email')}
                value={formData.email}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={{
                  color: colors.text,
                }}>
                Phone
              </Text>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: colors.border,
                  color: colors.text,
                }}
                placeholderTextColor={colors.border}
                onChangeText={value => onChange(value, 'phone')}
                value={formData.phone}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={{
                  color: colors.text,
                }}>
                Subscribe
              </Text>
              <CustomSwitch
                value={formData.isSubscribed}
                onValueChange={value => onChange(value, 'isSubscribed')}
              />
            </View>
            <Text
              style={{
                color: colors.text,
              }}>
              {JSON.stringify(formData, null, 3)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}>
              {JSON.stringify(formData, null, 3)}
            </Text>
            <Text
              style={{
                color: colors.text,
              }}>
              {JSON.stringify(formData, null, 3)}
            </Text>
          </BaseView>
          <View style={{height: 50}} />
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputScreen;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 4,
  },
  inputContainer: {
    marginBottom: 20,
  },
});

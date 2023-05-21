// @ts-ignore
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {withTheme} from 'styled-components';
// @ts-ignore
import styled from 'styled-components/native';

type TextFieldProps = {
  onChangeText?: Function;
  placeholder?: string;
  value?: string;
  icon?: string | null;
  accessibilityLabel?: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  autoCapitalize?: string;
  error?: string | null;
  theme?: any;
  multiline?: boolean;
  style?: any;
  editable?: any;
  defaultValue?: any;
  fontSize?: number;
};

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  icon = null,
  accessibilityLabel,
  secureTextEntry = false,
  keyboardType = 'default',
  onChangeText,
  autoCapitalize = 'sentences',
  error = null,
  theme,
  multiline = false,
  editable = true,
  defaultValue = '',
  fontSize = 14,
  style = {},
  ...rest
}) => {
  const [showSecureEntry, setShowSecureEntry] = useState(false);

  return (
    <TextFieldWrapper>
      {accessibilityLabel !== undefined && (
        <TextInputLabelWrapper>
          <TextInputLabelWrapper__Content>
            {accessibilityLabel}
          </TextInputLabelWrapper__Content>
        </TextInputLabelWrapper>
      )}

      <Horizontal>
        {/*{icon !== null && <Image source={icon} />}*/}
        <TextInputField
          onChangeText={onChangeText}
          secureTextEntry={showSecureEntry ? false : secureTextEntry}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor="#000000"
          autoCapitalize={autoCapitalize}
          underlineColorAndroid="rgba(0,0,0,0)"
          multiline={multiline}
          style={style}
          editable={editable}
          defaultValue={defaultValue}
          {...rest}
        />

        {secureTextEntry && (
          <SecureEntryIcon>
            <TouchableOpacity
              onPress={() => setShowSecureEntry(!showSecureEntry)}>
              <Image source={icon} />
            </TouchableOpacity>
          </SecureEntryIcon>
        )}
      </Horizontal>
      {error !== null && (
        <ErrorWrapper>
          <ErrorWrapper__Text>{error}</ErrorWrapper__Text>
        </ErrorWrapper>
      )}
    </TextFieldWrapper>
  );
};

// @ts-ignore
export default withTheme(TextField);

type FontSizeProps = {
  fontSize: number;
};

const ErrorWrapper = styled.View`
  margin-top: 3px;
  padding-left: 2px;
`;

const ErrorWrapper__Text = styled.Text`
  color: red;
`;

const SecureEntryIcon = styled.View``;

const TextInputField = styled.TextInput`
  flex: 1;
  color: black
  font-size: 18px
  padding-left: 8px;
`;

const Horizontal = styled.View`
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  align-items: center;
  background-color: white
  opacity: 0.7;
  border-radius: 18px;
  margin-top: 10px;
  height: 45px;
`;

const TextInputLabelWrapper__Content = styled.Text`
  color: black
  font-size: 16px
  font-weight: 600;
`;

const TextInputLabelWrapper = styled.View`
  margin-top: 24px;
`;

const TextFieldWrapper = styled.View`
  width: 100%;
`;

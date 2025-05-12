import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { makeStyles } from '@rneui/themed';

import LanguageSwitch from '@/components/LanguageSwitch';
import ThemeModeSwitch from '@/components/ThemeModeSwitch';

const SignIn = () => {
  const { t } = useTranslation();

  const styles = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <LanguageSwitch />
        <Text style={styles.title}>{t('login.title')}</Text>
        <View style={styles.switchContainer}>
          <ThemeModeSwitch />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.colors.foreground,
  },
  switchContainer: {
    marginTop: 20,
  },
}));

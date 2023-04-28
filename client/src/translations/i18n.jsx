import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          navbar: {
            search: 'Search',
            english: 'English',
            french: 'French',
          },
          sideBar: {
            edit: 'Edit Profile',
            visibility: 'Visibility',
            cancel: 'Cancel',
            save: 'Save',
            webSite: 'Website',
          },
          avatar: {
            hover: 'Change your profile picture',
          },
          login: {
            welcome: 'Welcome',
            teamName: 'TeamName',
            password: 'Password',
            signIn: 'Sign In',
            signUp: 'Sign Up',
            textSignUp: 'New to PaperLive ?',
            bottom:
              'By creating an account, you agree to the terms of service. For more information about PaperLive’s privacy practices, see the privacy Statement.',
          },
        },
      },
      fr: {
        translation: {
          navbar: {
            search: 'Rechercher',
            english: 'Anglais',
            french: 'Français',
          },
          sideBar: {
            edit: 'Modifier votre profil',
            visibility: 'Visibilité',
            cancel: 'Annuler',
            save: 'Enregistrer',
            webSite: 'Site internet',
          },
          avatar: {
            hover: 'Changer votre photo de profil',
          },
          login: {
            welcome: 'Bienvenue',
            teamName: "Nom de l'équipe",
            password: 'Mot de passe',
            signIn: 'Se connecter',
            signUp: "S'enregistrer",
            textSignUp: 'Nouveau sur PaperLive ?',
            bottom:
              "En créant un compte, vous acceptez les conditions d'utilisation. Pour plus d'informations sur les pratiques de confidentialité de PaperLive, consultez la déclaration de confidentialité.",
          },
        },
      },
    },
  });

export default i18n;

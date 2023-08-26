import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  
  .use(initReactI18next)
 
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, 
    },
    resources: {
      en: {
        translation: {
          description:{
            create:'Create users',
            editbtn:'edit',
            dltbtn:'Delete',
            intname:'Name',
            intemail:'email',
            intsubmit:'Submit',
            intcrthed:'Create-Here',
            intupdate:'Update',
            inedit:'Edit-Here'

          }
        }
      },
 
     hin: {
        translation: {
          description:{
            create:'उपयोगकर्ता बनाएं',
            editbtn:'सम्पादित करें',
            dltbtn:'हटाए',
            intname:'नाम',
            intemail:'ईमेल',
            intsubmit:'जमा करें',
            intcrthed:'यहाँ बनाएँ',
            intupdate:'अद्यतन',
            inedit:'अद्यतन-यहाँ संपादित करें'
          }
        }
      },
     icelandic: {
        translation: {
          description:{
            create:'búa til notendur',
            editbtn:'breyta',
            dltbtn:'fjarlægja',
            intname:'nafn',
            intemail:'tölvupósti',
            intsubmit:'leggja inn',
            intcrthed:'skapa hér',
            intupdate:'uppfærslu',
            inedit:'breyta-hér uppfærsla'
           
          }
        }
      },

    }
  });

export default i18n;
import React from "react";
import ReactDOM from "react-dom";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import './register';
import { getI18nResourceData} from './LanguageRegister';


i18n.use(initReactI18next)
	.init({
		resources: getI18nResourceData(),
		lng: "en",
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		}
	});
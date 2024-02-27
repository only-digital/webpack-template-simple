import 'core-js/stable';
import '../scss/common.scss';
import {resize} from '@/helpers/helpers';
import { cookiesTypes, setVhCssVariable } from '@/helpers/helpers';
import cookie from 'cookie';
import OnlyScrollbar from "only-scrollbar";
import initIndexPage from "@/pages/index";

// SVG
const requireAll = (r: __WebpackModuleApi.RequireContext) => r.keys().forEach(r);
requireAll(require.context('../../assets/icons', true, /\.svg$/));

export const scroll = new OnlyScrollbar(window)

// if (window.gtag) {
//     window.gtag('consent', 'update', {
//         analytics_storage:
//             cookie.parse(document.cookie)[cookiesTypes.acceptAnalytics] === 'ok'
//                 ? 'granted'
//                 : 'denied',
//         ad_storage:
//             cookie.parse(document.cookie)[cookiesTypes.acceptAds] === 'ok' ? 'granted' : 'denied',
//     });
// }

resize(setVhCssVariable, { initial: true });

initIndexPage();

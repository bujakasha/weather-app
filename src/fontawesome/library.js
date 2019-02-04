import {library} from '@fortawesome/fontawesome-svg-core'

/*  LIGHT ICONS   */
import {faCircleNotch as falCircleNotch} from '@fortawesome/pro-light-svg-icons/faCircleNotch'
import {faMinus as falMinus} from '@fortawesome/pro-light-svg-icons/faMinus'
import {faInfo as falInfo} from '@fortawesome/pro-light-svg-icons/faInfo'

/*  REGULAR ICONS   */
import {faAngleLeft as farAngleLeft} from '@fortawesome/pro-regular-svg-icons/faAngleLeft'
import {faLocation as farLocation} from '@fortawesome/pro-regular-svg-icons/faLocation'
import {faSearch as farSearch} from '@fortawesome/pro-regular-svg-icons/faSearch'
import {faInfo as farInfo} from '@fortawesome/pro-regular-svg-icons/faInfo'
import {faTimes as farTimes} from '@fortawesome/pro-regular-svg-icons/faTimes'

/*  BRANDS ICONS   */
import {faGithub} from '@fortawesome/free-brands-svg-icons/faGithub'

import weatherIcons from './weather.light'

library.add(
  weatherIcons(),

  faGithub,

  falMinus,
  falCircleNotch,
  falInfo,

  farAngleLeft,
  farAngleLeft,
  farLocation,
  farSearch,
  farTimes,
  farInfo
)

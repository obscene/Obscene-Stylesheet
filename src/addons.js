import alternativeValue from './plugins/alternativeValue'
import statefulValue from './plugins/statefulValue'
import customProperty from './plugins/customProperty'
import prefixer from './plugins/prefixer'

import { equal, unEqual, greater, less, greaterThan, lessThan } from './properties/condition'
import { firstChild, lastChild, onlyChild, nthChild, nthLastChild } from './properties/pseudoClasses/childIndex'
import { firstOfType, lastOfType, onlyOfType, nthOfType, nthLastOfType } from './properties/pseudoClasses/childTypeIndex'
import { checked, disabled, enabled, required, optional, readOnly, readWrite, indeterminate } from './properties/pseudoClasses/input'
import { hover, active, focus, valid } from './properties/pseudoClasses/userAction'
import { before, after } from './properties/pseudoClasses/beforeAfter'
import lang from './properties/pseudoClasses/lang'
import empty from './properties/pseudoClasses/empty'
import extractCSS from './properties/extractCSS'
import extend from './properties/extend'
import mediaQuery from './properties/mediaQuery'

export default {
  Plugins: {
    customProperty,
    alternativeValue,
    statefulValue,
    prefixer
  },
  CustomProperties: {
    greaterThan,
    lessThan,
    unEqual,
    greater,
    less,
    equal,
    extend,
    extractCSS,
    empty,
    mediaQuery,
    firstChild,
    lastChild,
    onlyChild,
    nthChild,
    nthLastChild,
    firstOfType,
    lastOfType,
    onlyOfType,
    nthOfType,
    nthLastOfType,
    before,
    after,
    lang,
    hover,
    focus,
    active,
    checked,
    disabled,
    enabled,
    readOnly,
    readWrite,
    required,
    optional,
    indeterminate,
    valid
  }
}

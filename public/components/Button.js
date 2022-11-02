import { Icon } from './Icon.js';
export var Button = function Button(_ref) {
  var _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'idle' : _ref$status;
  var BUTTON_STATUS = {
    idle: {
      content: '업로드',
      iconType: 'up-arrow'
    },
    pending: {
      content: '업로드 중',
      iconType: 'spinner'
    },
    resolve: {
      content: '완료',
      iconType: 'check-mark'
    },
    rejected: {
      content: '실패',
      iconType: 'cross'
    },
    disabled: {
      content: '업로드',
      iconType: 'not-allowed',
      disabled: true
    }
  };
  var _BUTTON_STATUS$status = BUTTON_STATUS[status],
      content = _BUTTON_STATUS$status.content,
      iconType = _BUTTON_STATUS$status.iconType,
      disabled = _BUTTON_STATUS$status.disabled;
  var classNames = 'upload-button';
  return React.createElement("button", {
    className: classNames,
    disabled: disabled
  }, content, React.createElement(Icon, {
    type: iconType
  }));
};
//# sourceMappingURL=Button.js.map
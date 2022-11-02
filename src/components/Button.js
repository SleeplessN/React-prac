import { Icon } from './Icon.js';

export const Button = ({ status = 'idle' }) => {
  const BUTTON_STATUS = {
    idle: { content: '업로드', iconType: 'up-arrow' },
    pending: { content: '업로드 중', iconType: 'spinner' },
    resolve: { content: '완료', iconType: 'check-mark' },
    rejected: { content: '실패', iconType: 'cross' },
    disabled: { content: '업로드', iconType: 'not-allowed', disabled: true },
  };

  const { content, iconType, disabled } = BUTTON_STATUS[status];
  const classNames = 'upload-button';

  return (
    <button className={classNames} disabled={disabled}>
      {content}
      <Icon type={iconType} />
    </button>
  );
};

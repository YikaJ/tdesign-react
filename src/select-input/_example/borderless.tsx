import React, { useState, useEffect } from 'react';
import { SelectInput } from 'tdesign-react';
import { ChevronDownIcon } from 'tdesign-icons-react';

import type { SelectInputProps } from 'tdesign-react';

const classStyles = `
<style>
.tdesign-demo__select-input-ul-borderless {
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.tdesign-demo__select-input-ul-borderless > li {
  display: block;
  border-radius: 3px;
  line-height: 22px;
  cursor: pointer;
  padding: 3px 8px;
  color: var(--td-text-color-primary);
  transition: background-color 0.2s linear;
  white-space: nowrap;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tdesign-demo__select-input-ul-borderless > li:hover {
  background-color: var(--td-bg-color-container-hover);
}
</style>
`;

const OPTIONS = [
  { label: 'tdesign-vue', value: 1 },
  { label: 'tdesign-react', value: 2 },
  { label: 'tdesign-miniprogram', value: 3 },
  { label: 'tdesign-angular', value: 4 },
  { label: 'tdesign-mobile-vue', value: 5 },
  { label: 'tdesign-mobile-react', value: 6 },
];

export default function SelectInputSingle() {
  // const selectValue = useState('tdesign-vue');
  const [selectValue, setSelectValue] = useState({ label: 'tdesign-vue', value: 1 });
  // const selectValue = useState([{ label: 'tdesign-vue', value: 1 }]);

  const [popupVisible, setPopupVisible] = useState(false);

  const onOptionClick = (item: { label: string; value: number }) => {
    setSelectValue(item);
    // 选中后立即关闭浮层
    setPopupVisible(false);
  };

  const onClear = () => {
    setSelectValue(undefined);
  };

  const onPopupVisibleChange: SelectInputProps['onPopupVisibleChange'] = (val, context) => {
    console.log(context);
    setPopupVisible(val);
  };

  useEffect(() => {
    // 添加示例代码所需样式
    document.head.insertAdjacentHTML('beforeend', classStyles);
  }, []);

  return (
    <div style={{ width: '60%' }}>
      {/* <!-- :popup-props="{ trigger: 'hover' }" --> */}
      <SelectInput
        value={selectValue}
        popupVisible={popupVisible}
        placeholder="Please Select"
        borderless
        clearable
        onPopupVisibleChange={onPopupVisibleChange}
        onClear={onClear}
        panel={
          <ul className="tdesign-demo__select-input-ul-borderless">
            {OPTIONS.map((item) => (
              <li key={item.value} onClick={() => onOptionClick(item)}>
                {item.label}
              </li>
            ))}
          </ul>
        }
        suffixIcon={<ChevronDownIcon />}
      ></SelectInput>
    </div>
  );
}

import React, {forwardRef, useState} from 'react';
import PropTypes from 'prop-types';
import {styles} from './styles';
// import {Icon} from '../Icon';
import SelectDropdown from 'react-native-select-dropdown';

const Select = forwardRef((props, ref) => {
  const {onPressItem, style, placeholder, items, styleRow} = props;

  const [selected, setSelected] = useState(false);

  return (
    <SelectDropdown
      ref={ref}
      defaultButtonText={placeholder}
      buttonStyle={[styles.selectContainer, style]}
      buttonTextStyle={[
        styles.textButton,
        selected ? styles.textButton__selected : null,
      ]}
      data={items}
      onSelect={selectedItem => {
        onPressItem(selectedItem);
        setSelected(true);
      }}
      rowTextForSelection={item => {
        return item.text;
      }}
      buttonTextAfterSelection={selectedItem => {
        return selectedItem.text;
      }}
      //   renderDropdownIcon={() => <Icon name={Icon.names.arrowDown} size={10} />}
      dropdownIconPosition="right"
      rowStyle={[styles.rowItem, styleRow]}
      selectedRowStyle={styles.rowItem__selected}
      rowTextStyle={styles.rowTextItem}
      dropdownStyle={styles.dropdown}
    />
  );
});

Select.propTypes = {
  placeholder: PropTypes.string,
  items: PropTypes.array.isRequired,
  onPressItem: PropTypes.func.isRequired,
  styles: PropTypes.object,
};

export {Select};

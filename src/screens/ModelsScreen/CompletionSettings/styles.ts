import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stopLabel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingItem: {
    marginBottom: 16,
  },
  settingLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  settingValue: {
    textAlign: 'right',
  },
  slider: {
    width: '100%',
    height: 40,
  },
  textInput: {
    backgroundColor: 'transparent',
    height: 50,
  },
  divider: {
    marginVertical: 16,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  chip: {
    marginHorizontal: 4,
  },
  textInputContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
    marginRight: 8,
  },
  stopWordsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 8,
  },
  stopChip: {
    marginRight: 4,
    marginBottom: 4,
  },
});

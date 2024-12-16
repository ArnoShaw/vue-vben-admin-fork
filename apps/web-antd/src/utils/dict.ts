import { useCommonStore } from '#/store/common';

export function getOptionsByDict(type: string): Array<{
  color: string | undefined;
  label: string | undefined;
  value: string | undefined;
}> {
  const dictInfo = useCommonStore().allDict;
  return dictInfo && dictInfo[type]
    ? dictInfo[type].map((item) => {
        switch (item.listClass) {
          case 'danger': {
            item.listClass = 'error';
            break;
          }
          case 'info': {
            item.listClass = 'default';
            break;
          }
          case 'primary': {
            item.listClass = 'processing';
            break;
          }
          default: {
            item.listClass = 'default';
          }
        }
        return {
          label: item.dictLabel,
          value: item.dictValue,
          color: item.listClass,
        };
      })
    : [];
}

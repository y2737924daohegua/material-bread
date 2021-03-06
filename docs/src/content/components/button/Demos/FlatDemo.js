import React from 'react';
import { View } from 'react-native';
import { ComponentDemo } from '@components';
import { Button, Icon } from '../../../../../../src/index';

export const code = `<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
  <Button text={'Flat'} type="flat" />
  <Button text={'Icon'} type="flat" color={'#E91E63'} icon={<Icon name="favorite" />} />
  <Button text={'Radius'} type="flat" color={'#FF5722'} radius={20} />
  <Button text={'Density'} type="flat" color={'#673AB7'} density={-1} />
  <Button text={'Loading'} type="flat" color={'#009688'} loading />
  <Button text={'Disabled'} type="flat" disabled />
  <Button text={'Loading'} type="flat" color={'#009688'} loading />
</View>
`;

const SubtitleDemo = pageHref => (
  <ComponentDemo
    sectionName={'Flat'}
    sectionHref={`${pageHref}#flat`}
    sectionId={'flat'}
    description={'Flat buttons are normal buttons without a shadow.'}
    code={code}
    scope={{ View, Button, Icon }}
  />
);
export default SubtitleDemo;

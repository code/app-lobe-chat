'use client';

import { FluentEmoji } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import AgentsSuggest from './AgentsSuggest';
import FeatureCards from './FeatureCards';

const useStyles = createStyles(({ css, responsive }) => ({
  container: css`
    align-items: center;
    ${responsive.mobile} {
      align-items: flex-start;
    }
  `,
  desc: css`
    font-size: 14px;
  `,
  title: css`
    margin-top: 0.2em;
    margin-bottom: 0;

    font-size: 32px;
    font-weight: bolder;
    line-height: 1;
    ${responsive.mobile} {
      font-size: 24px;
    }
  `,
}));

const InboxWelcome = memo(() => {
  const { styles } = useStyles();
  return (
    <Center padding={24} width={'100%'}>
      <Flexbox className={styles.container} gap={16} style={{ maxWidth: 800 }} width={'100%'}>
        <Flexbox align={'center'} gap={8} horizontal>
          <FluentEmoji emoji={'👋'} size={40} type={'anim'} />
          <h1 className={styles.title}>下午好</h1>
        </Flexbox>
        <p className={styles.desc}>我是 LobeChat 你的私人智能助理，我今天能帮你做什么？</p>
        <AgentsSuggest />
        <FeatureCards />
        {/*{t('inbox.defaultMessage')}*/}
      </Flexbox>
    </Center>
  );
});

export default InboxWelcome;

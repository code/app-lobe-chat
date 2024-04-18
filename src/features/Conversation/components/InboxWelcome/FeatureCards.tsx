'use client';

import { ActionIcon, Grid, Icon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { ArrowRight, Blocks, Bot, BrainCircuit, Eye, Images, Mic2 } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

const BASE_DOC_URL = 'https://lobehub.com/docs/usage/features';

const useStyles = createStyles(({ css, token }) => ({
  card: css`
    padding: 16px;
    color: ${token.colorText};
    background: ${token.colorFillTertiary};
    border-radius: ${token.borderRadius}px;

    &:hover {
      background: ${token.colorFillSecondary};
    }
  `,
  icon: css`
    color: ${token.colorTextSecondary};
  `,
  title: css`
    color: ${token.colorTextDescription};
  `,
}));

const FeatureCards = memo(() => {
  const { styles } = useStyles();
  const cards = [
    {
      icon: Eye,
      title: '视觉识别',
      url: 'vision',
    },
    {
      icon: Mic2,
      title: 'TTS & STT',
      url: 'tts',
    },
    {
      icon: Images,
      title: '文生图',
      url: 'text-to-image',
    },
    {
      icon: Blocks,
      title: '插件系统',
      url: 'plugin-system',
    },
    {
      icon: Bot,
      title: '助手市场',
      url: 'agent-market',
    },
    {
      icon: BrainCircuit,
      title: '多模型服务商',
      url: 'multi-ai-providers',
    },
  ];

  return (
    <Flexbox gap={8} width={'100%'}>
      <Flexbox align={'center'} horizontal justify={'space-between'}>
        <div className={styles.title}>查看我的能力：</div>
        <Link href={urlJoin(BASE_DOC_URL, 'start')} target={'_blank'}>
          <ActionIcon icon={ArrowRight} size={{ blockSize: 24, fontSize: 16 }} title={'了解更多'} />
        </Link>
      </Flexbox>
      <Grid gap={8} maxItemWidth={160}>
        {cards.map((card) => (
          <Link href={urlJoin(BASE_DOC_URL, card.url)} key={card.url} target={'_blank'}>
            <Flexbox align={'center'} className={styles.card} gap={8} horizontal>
              <Icon className={styles.icon} icon={card.icon} size={{ fontSize: 18 }} />
              {card.title}
            </Flexbox>
          </Link>
        ))}
      </Grid>
    </Flexbox>
  );
});

export default FeatureCards;

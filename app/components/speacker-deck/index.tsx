import type { JSX } from 'hono/jsx/jsx-runtime';

export type SpeakerDeckEmbedding = {
  title: string;
  date: string;
  event: string;
  speakerDeckUrl: string;
  embedding: JSX.Element;
};

export const speakerDeckEmbeddings = [
  {
    title: 'TypeScriptのパフォーマンス改善',
    date: '2024/05/11',
    event: 'TSKaigi',
    speakerDeckUrl:
      'https://speakerdeck.com/yajihum/typescriptnopahuomansugai-shan',
    embedding: (
      <iframe
        class='speakerdeck-iframe'
        frameborder='0'
        src='https://speakerdeck.com/player/1db2a6165c884f9cadb3ea922ebba57c'
        title='TypeScriptのパフォーマンス改善'
        allowFullScreen='true'
        style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;'
        data-ratio='1.7777777777777777'
      />
    ),
  },
  {
    title: 'アクセシビリティを考慮したUI/CSSフレームワーク・ライブラリ選定',
    date: '2024/04/20',
    event: 'BARフロントえんどう #2 「CSS Library / Framework」',
    speakerDeckUrl:
      'https://speakerdeck.com/yajihum/csshuremuwakuraiburarixuan-ding',
    embedding: (
      <iframe
        class='speakerdeck-iframe'
        frameborder='0'
        src='https://speakerdeck.com/player/771d68b9bc93436e8d76fd759faa4238'
        title='アクセシビリティを考慮したUI/CSSフレームワーク・ライブラリ選定'
        allowFullScreen='true'
        style='border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;'
        data-ratio='1.7777777777777777'
      />
    ),
  },
  {
    title: 'フロントエンドにおける テスト方針〜Testing Trophyの概念とBDD〜',
    date: '2023/10/25',
    event: 'CTOA若手エンジニアコミュニティ 勉強会 #4',
    speakerDeckUrl:
      'https://speakerdeck.com/yajihum/hurontoendoniokeru-tesutofang-zhen-testing-trophynogai-nian-tobdd',
    embedding: (
      <iframe
        className='speakerdeck-iframe'
        frameBorder='0'
        src='https://speakerdeck.com/player/8ad49e23e96f4829971567c559e790d5'
        title='フロントエンドにおける テスト方針〜Testing Trophyの概念とBDD〜'
        allowFullScreen={true}
        style={{
          border: '0px',
          background: 'padding-box padding-box rgba(0, 0, 0, 0.1)',
          margin: '0px',
          padding: '0px',
          borderRadius: '6px',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 40px',
          width: '100%',
          height: 'auto',
          aspectRatio: '560 / 315',
        }}
        data-ratio='1.7777777777777777'
      />
    ),
  },
  {
    title:
      'Cloudflare R2 + Reactを使って 絵文字ピッカーのnpmパッケージを作ってみた',
    date: '2023/08/30',
    event: 'はじめまして！若手エンジニアふんわりLT Night！',
    speakerDeckUrl:
      'https://speakerdeck.com/yajihum/cloudflare-r2-plus-reactwoshi-tute-hui-wen-zi-pitukanonpmpatukeziwozuo-tutemita',
    embedding: (
      <iframe
        className='speakerdeck-iframe'
        frameBorder='0'
        src='https://speakerdeck.com/player/ea327b5ad8b54c78b3e762660f6e56c1'
        title='Cloudflare R2 + Reactを使って 絵文字ピッカーのnpmパッケージを作ってみた'
        allowFullScreen={true}
        style={{
          border: '0px',
          background: 'padding-box padding-box rgba(0, 0, 0, 0.1)',
          margin: '0px',
          padding: '0px',
          borderRadius: '6px',
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 40px',
          width: '100%',
          height: 'auto',
          aspectRatio: '560 / 315',
        }}
        data-ratio='1.7777777777777777'
      />
    ),
  },
];

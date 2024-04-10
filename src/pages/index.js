import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';


function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">岚·域</h1>
        <p className="hero__subtitle">紧跟时代的Minecraft生存服务器</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/start">
            点击以阅读游玩指南
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="岚·域"
      description="紧跟时代的Minecraft生存服务器">
      <HomepageHeader />
      <main>
        {/* 这里可以放置其他主页内容，如功能列表、介绍等 */}
      </main>
    </Layout>
  );
}
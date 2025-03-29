import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import ScreenShotImageUrl from "@site/static/img/home_assistant_screenshot.png";
import { Button } from "@site/src/components/ui/button";
import Head from "@docusaurus/Head";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header>
      <div
        className="w-full"
        style={{
          background:
            "linear-gradient(340deg, #0af 0%, #00bfff 50%, #00eaff 100%)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-12 p-20">
        <div className="md:col-span-6 xl:col-span-8 sm:col-span-12 xl:pl-50">
          <h1
            className="text-5xl bg-clip-text text-transparent font-semibold tracking-widest md:text-7xl lg:text-9xl lg:leading-tight"
            style={{
              backgroundImage: 'linear-gradient(125deg, #FFF 29.3%, #80FFF4 89.99%)'
            }}
          >
            唤醒，你的家
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white my-10 ">
            开源智能家居系统，让您完全掌控隐私与数据。由全球创客和DIY爱好者共同驱动。
          </p>
          <div>
            <div className="flex items-start gap-4">
              <div className="flex items-center gap-4">
                <Button variant="secondary" asChild>
                  {/* <Link to="/docs/installation/">开始使用</Link> */}
                </Button>

                <Button variant="Link" asChild>
                  <Link to="https://demo.home-assistant.io/">查看演示</Link>
                </Button>
              </div>
            </div>
            <p className="text-base md:text-lg font-bold py-10 text-destructive">
                该网站是第三方翻译版本，如需官方文档请 <a target="_blank" className="text-white" href="https://home-assistant.io">点击这里</a>
            </p>
          </div>
        </div>
        <div className="md:col-span-6 xl:col-span-4 sm:col-span-12 flex items-center justify-center">
          <img className="w-80" src={ScreenShotImageUrl} />
        </div>
        </div>
        
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - 开源智能家居系统`}
      description="开源智能家居系统，让您完全掌控隐私与数据。由全球创客和DIY爱好者社区共同驱动。"
    >
      <Head>
        <meta name="baidu-site-verification" content="codeva-bbdnFo3p8K" />
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

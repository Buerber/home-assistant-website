import type {ReactNode} from 'react';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '兼容上千个品牌',
    description: (
      <>
        <p>Home Assistant 可以集成超过一千种不同的设备和服务。</p>
        <p>启动后，Home Assistant 会自动扫描您的网络来识别已知设备，让您轻松完成配置。</p>
      </>
    ),
  },
  {
    title: '强大的自动化能力',
    description: (
      <>
        <p>当您将所有设备接入家庭后，就可以使用 Home Assistant 强大的自动化引擎，让您的家更智能。</p>
        <ul>
          <li>日落时自动开灯，回家时自动亮灯</li>
          <li>车库门未关时及时提醒您</li>
        </ul>
      </>
    ),
  },
  {
    title: '灵活的仪表盘',
    description: (
      <>
        <p>Home Assistant 的仪表盘让您可以直观地查看智能家居的各项信息。您可以自定义仪表盘，通过手机或电脑轻松管理家居设备。</p>
        <ul>
          <li>拖拽式操作，轻松创建和定制仪表盘</li>
          <li>多样化的卡片类型，既可以可视化数据，也能控制智能设备</li>
        </ul>
      </>
    ),
  },
  {
    title: "Assist 语音助手",
    description: (
      <>
        <p>使用 Assist，您可以用自然语言控制 Home Assistant。它建立在开源语音基础上，由社区提供的知识库提供支持。</p>
        <ul>
          <li>自定义您的语音助手，体验 AI 对话</li>
          <li>随时随地使用 Assist，支持手机、平板、智能手表，甚至老式电话</li>
        </ul>
      </>
    )
  },
  {
    title: "丰富的插件扩展",
    description: (
      <>
        <p>Home Assistant 不仅仅是 Home Assistant。您可以轻松安装其他应用来增强家居管理能力。</p>
        <ul>
          <li>运行 AdGuard，屏蔽广告的 DNS 工具</li>
          <li>使用第三方自动化引擎，如 NodeRed</li>
          <li>将 Home Assistant 变成 Spotify 播放设备</li>
        </ul>
      </>
    )
  },
  {
    title: "数据本地存储，安全可靠",
    description: (
      <>
        <p>Home Assistant 将您的数据保存在本地，无需依赖云服务。</p>
        <p>系统优先通过本地网络与设备通信，只在必要时才会从云端获取数据。所有数据都在本地处理，不会存储在云端。</p>
      </>
    )
  },
  {
    title: "配套移动应用",
    description: (
      <>
        <p>使用官方 Home Assistant 应用，便捷控制您的设备，及时接收家庭事件通知，甚至可以在 Apple Watch 上操作。</p>
        <p>应用还可以将您的位置信息发送回家，用于自动化场景。数据直接发送到您的家庭系统，无需经过第三方。</p>
      </>
    )
  },
  {
    title: "家庭能源管理",
    description: (
      <>
        使用 Home Assistant 的能源管理功能，掌控家庭用电。深入了解用能情况，优化太阳能发电，规划用电时间，节省电费开支。
      </>
    )
  },
  {
    title: "Home Assistant Cast",
    description: (
      <>
        让所有屏幕都能显示。Home Assistant Cast 可以在任何电视上展示您的仪表盘。
      </>
    )
  },
  {
    title: "NFC 标签",
    description: (
      <>
        使用 NFC 标签来播放音乐或自动化日常任务。
      </>
    )
  }
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className='rounded-lg border bg-card text-card-foreground shadow-sm p-6 min-h-60'>
      <div className='text-2xl font-semibold mb-2'>{title}</div>
      <div className='text-muted-foreground'>{description}</div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section>
      <h2 className='text-7xl text-center p-16'>核心功能</h2>
      <div  className={"flex items-center"}>
      <div className="container mx-auto px-4 pb-12">
      <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2  gap-16">
      {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
      </div>
      </div>
      </div>
    </section>
  );
}
